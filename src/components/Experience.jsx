import { experience, education } from "../data/resumeData";
import { SectionEyebrow } from "./About";

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28 border-t border-[var(--color-line)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.2fr_1fr] gap-16">
        <div>
          <SectionEyebrow index="§04">Experience</SectionEyebrow>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl text-[var(--color-text)] mb-10 text-balance">
            Two careers, one throughline.
          </h2>

          <ol className="relative border-l border-[var(--color-line)] pl-7 space-y-10">
            {experience.map((job) => (
              <li key={job.role} className="relative">
                <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-cyan)]" />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                  <h3 className="font-[var(--font-display)] text-lg text-[var(--color-text)]">{job.role}</h3>
                  <span className="text-[var(--color-cyan)] text-sm">{job.org}</span>
                  <span className="font-[var(--font-mono)] text-[11.5px] text-[var(--color-text-faint)] ml-auto">
                    {job.dates}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="text-[var(--color-text-muted)] text-[13.5px] leading-relaxed flex gap-2">
                      <span className="text-[var(--color-amber)] mt-1.5 shrink-0">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        <div id="education">
          <SectionEyebrow index="§05">Education</SectionEyebrow>
          <ol className="relative border-l border-[var(--color-line)] pl-7 space-y-8">
            {education.map((ed) => (
              <li key={ed.school} className="relative">
                <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-amber)]" />
                <h3 className="font-[var(--font-display)] text-[15px] text-[var(--color-text)] leading-snug">
                  {ed.school}
                </h3>
                <p className="text-[var(--color-text-muted)] text-[13px] mt-0.5">{ed.detail}</p>
                <p className="font-[var(--font-mono)] text-[11.5px] text-[var(--color-text-faint)] mt-0.5">{ed.dates}</p>
                {ed.extra.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {ed.extra.map((e, i) => (
                      <li key={i} className="text-[var(--color-text-muted)] text-[12.5px] leading-relaxed">
                        {e}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
