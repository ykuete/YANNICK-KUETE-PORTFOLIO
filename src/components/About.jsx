import { profile, certifications } from "../data/resumeData";

function SectionEyebrow({ index, children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-[var(--font-mono)] text-xs text-[var(--color-amber)]">{index}</span>
      <span className="font-[var(--font-mono)] text-xs tracking-[0.2em] text-[var(--color-text-faint)] uppercase">
        {children}
      </span>
      <span className="flex-1 h-px bg-[var(--color-line)]" />
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 border-t border-[var(--color-line)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionEyebrow index="§01">About</SectionEyebrow>

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12">
          <div>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl text-[var(--color-text)] mb-6 text-balance">
              From construction sites to <span className="text-[var(--color-cyan)]">CI/CD pipelines.</span>
            </h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed text-[15px] sm:text-base">
              {profile.summary}
            </p>
          </div>

          <div className="font-[var(--font-mono)] text-sm border border-[var(--color-line)] rounded-lg bg-[var(--color-bg-panel)]/60 p-6 space-y-5 h-fit">
            <div>
              <div className="text-[var(--color-text-faint)] text-[11px] tracking-wider uppercase mb-1">Location</div>
              <div className="text-[var(--color-text)]">{profile.location}</div>
            </div>
            <div>
              <div className="text-[var(--color-text-faint)] text-[11px] tracking-wider uppercase mb-1">Graduating</div>
              <div className="text-[var(--color-text)]">{profile.graduation} · GPA {profile.gpa}</div>
            </div>
            <div>
              <div className="text-[var(--color-text-faint)] text-[11px] tracking-wider uppercase mb-1">Certifications</div>
              <ul className="space-y-1">
                {certifications.map((c) => (
                  <li key={c.name} className="text-[var(--color-text)] leading-snug">
                    {c.name} <span className="text-[var(--color-text-faint)]">· {c.year}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[var(--color-text-faint)] text-[11px] tracking-wider uppercase mb-1">Status</div>
              <div className="text-[var(--color-cyan)]">{profile.availability}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { SectionEyebrow };
