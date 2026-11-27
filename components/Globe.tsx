"use client";

import { useEffect, useRef } from "react";

// Laredo, Cantabria (lon, lat)
const LAREDO: [number, number] = [-3.43, 43.41];
const LAREDO_LABEL = "Laredo, Cantabria";
const CENTER_LAT = 30; // leve inclinação para o globo não ficar reto demais

type Point = [number, number]; // [lon, lat] em graus

// Projeção ortográfica: devolve a posição na tela, ou null se o ponto está do lado de trás.
function project(
  [lon, lat]: Point,
  centerLon: number,
  cx: number,
  cy: number,
  r: number,
): [number, number] | null {
  const rad = Math.PI / 180;
  const phi = lat * rad;
  const phi0 = CENTER_LAT * rad;
  const dLambda = (lon - centerLon) * rad;
  const cosC = Math.sin(phi0) * Math.sin(phi) + Math.cos(phi0) * Math.cos(phi) * Math.cos(dLambda);
  if (cosC < 0) return null;
  const x = cx + r * Math.cos(phi) * Math.sin(dLambda);
  const y = cy - r * (Math.cos(phi0) * Math.sin(phi) - Math.sin(phi0) * Math.cos(phi) * Math.cos(dLambda));
  return [x, y];
}

export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Malha do oceano: pontos finos, sempre desenhados.
    const ocean: Point[] = [];
    for (let lat = -80; lat <= 80; lat += 5) {
      for (let lon = -180; lon < 180; lon += 5) ocean.push([lon, lat]);
    }
    // Pontos de terra: gerados uma vez (public/data/land-dots.json).
    let land: Point[] = [];
    let centerLon = LAREDO[0];
    let raf = 0;
    let cancelled = false;

    function resize() {
      canvas!.width = canvas!.clientWidth * dpr;
      canvas!.height = canvas!.clientHeight * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function drawLaredo(t: number, cx: number, cy: number, r: number) {
      const q = project(LAREDO, centerLon, cx, cy, r);
      if (!q) return; // do lado de trás: não mostra
      const period = 1800;
      for (const offset of [0, 0.5]) {
        const phase = ((t / period) + offset) % 1;
        ctx!.beginPath();
        ctx!.arc(q[0], q[1], 4 + phase * 24, 0, Math.PI * 2);
        ctx!.strokeStyle = `rgba(225, 29, 72, ${((1 - phase) * 0.8).toFixed(3)})`;
        ctx!.lineWidth = 1.5;
        ctx!.stroke();
      }
      ctx!.beginPath();
      ctx!.arc(q[0], q[1], 4, 0, Math.PI * 2);
      ctx!.fillStyle = "#e11d48";
      ctx!.shadowColor = "#e11d48";
      ctx!.shadowBlur = 14;
      ctx!.fill();
      ctx!.shadowBlur = 0;
      ctx!.font = "12px ui-monospace, Menlo, monospace";
      ctx!.fillStyle = "#1c1917";
      ctx!.fillText(LAREDO_LABEL, q[0] + 12, q[1] - 10);
    }

    function draw(t: number) {
      const w = canvas!.clientWidth;
      const h = canvas!.clientHeight;
      const cx = w / 2;
      const cy = h / 2;
      const r = Math.min(w, h) * 0.66;
      ctx!.clearRect(0, 0, w, h);

      ctx!.beginPath();
      ctx!.arc(cx, cy, r, 0, Math.PI * 2);
      ctx!.strokeStyle = "rgba(41, 37, 36, 0.35)";
      ctx!.lineWidth = 1;
      ctx!.stroke();

      const dots = (points: Point[], color: string, radius: number) => {
        ctx!.fillStyle = color;
        for (const p of points) {
          const q = project(p, centerLon, cx, cy, r);
          if (!q) continue;
          ctx!.beginPath();
          ctx!.arc(q[0], q[1], radius, 0, Math.PI * 2);
          ctx!.fill();
        }
      };

      dots(ocean, "rgba(41, 37, 36, 0.38)", 0.9);
      dots(land, "rgba(28, 25, 23, 0.85)", 1.6);
      drawLaredo(t, cx, cy, r);
    }

    function loop(t: number) {
      centerLon -= 0.03; // rotação lenta
      draw(t);
      raf = requestAnimationFrame(loop);
    }

    function onResize() {
      resize();
      draw(0);
    }

    fetch("/data/land-dots.json")
      .then((res) => (res.ok ? res.json() : []))
      .then((points: Point[]) => {
        if (cancelled) return;
        land = points;
        if (reduceMotion) draw(0);
      })
      .catch(() => {
        // Sem os dados de terra, o globo mostra só a malha e o ponto de Laredo.
      });

    resize();
    draw(0);
    window.addEventListener("resize", onResize);
    if (!reduceMotion) raf = requestAnimationFrame(loop);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="globe" aria-hidden="true" />;
}
