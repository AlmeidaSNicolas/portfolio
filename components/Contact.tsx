"use client";

import { useLanguage } from "./LanguageProvider";
import { links } from "@/lib/links";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contacto" className="contact">
      <div>
        <h2 className="mono">{t.contact.title}</h2>
        <a className="contact-email mono" href={`mailto:${links.email}`}>
          {links.email}
        </a>
      </div>
      <div className="contact-links mono">
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={links.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={links.youtube} target="_blank" rel="noopener noreferrer">
          YouTube · Stack do Almeida
        </a>
      </div>
    </section>
  );
}
