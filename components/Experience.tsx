"use client";

import { useLanguage } from "./LanguageProvider";

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experiencia">
      <h2 className="section-title">
        <span>02 ·</span> {t.experience.title}
      </h2>
      <div className="timeline mono">
        {t.experience.items.map((item) => (
          <div className="timeline-row" key={item.role}>
            <span className="timeline-period">{item.period}</span>
            <span className="timeline-role">
              {item.role}
              {item.detail && <span className="timeline-detail"> — {item.detail}</span>}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
