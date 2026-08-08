import { skillGroups } from "../data/resumeData";
import { SectionEyebrow } from "./About";

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28 border-t border-[var(--color-line)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionEyebrow index="§02">Skills</SectionEyebrow>
        <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl text-[var(--color-text)] mb-10 text-balance">
          Five domains, one toolkit.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((g) => (
            <div
              key={g.tag}
              className="group relative border border-[var(--color-line)] rounded-lg p-5 bg-[var(--color-bg-panel)]/40 hover:bg-[var(--color-bg-panel)] hover:border-[var(--color-cyan)]/40 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="font-[var(--font-mono)] text-[11px] px-1.5 py-0.5 rounded bg-[var(--color-amber)]/10 text-[var(--color-amber)] border border-[var(--color-amber)]/30">
                  {g.tag}
                </span>
                <h3 className="font-[var(--font-display)] text-[15px] text-[var(--color-text)]">{g.label}</h3>
              </div>
              <ul className="flex flex-wrap gap-1.5">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="font-[var(--font-mono)] text-[11.5px] text-[var(--color-text-muted)] border border-[var(--color-line)] rounded px-2 py-1 group-hover:border-[var(--color-line)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
