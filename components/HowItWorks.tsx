"use client";

import { useLanguage } from "./LanguageProvider";

export function HowItWorks() {
  const { t } = useLanguage();
  const h = t.howItWorks;

  return (
    <section id="como-llega">
      <h2 className="section-title">
        <span>02 ·</span> {h.title}
      </h2>
      <p className="how-intro">{h.intro}</p>
      <div className="how-panel">
        <div className="how-track" aria-hidden="true">
          <span className="how-packet" />
        </div>
        <ol className="how-steps mono">
          {h.steps.map((step, i) => (
            <li className="how-step" key={step.title}>
              <span className="how-index">{String(i + 1).padStart(2, "0")}</span>
              <strong>{step.title}</strong>
              <span>{step.detail}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
