import { ExternalLink } from "lucide-react";
import { projects } from "../data/resumeData";
import { ART } from "./ProjectArt";
import { SectionEyebrow } from "./About";
import GithubMark from "./GithubMark";

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28 border-t border-[var(--color-line)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionEyebrow index="§03">Projects</SectionEyebrow>
        <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl text-[var(--color-text)] mb-10 text-balance">
          Things he's shipped.
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p) => {
            const Art = ART[p.art];
            return (
              <article
                key={p.id}
                className="group border border-[var(--color-line)] rounded-xl overflow-hidden bg-[var(--color-bg-panel)]/40 hover:border-[var(--color-cyan)]/40 transition-colors flex flex-col"
              >
                <div className="p-3 pb-0">
                  <Art />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-[var(--font-display)] text-lg text-[var(--color-text)] mb-1.5">{p.name}</h3>
                  <p className="text-[var(--color-text-muted)] text-[13.5px] leading-relaxed mb-3">{p.summary}</p>
                  <ul className="text-[13px] text-[var(--color-text-muted)] space-y-1 mb-4 list-disc list-inside marker:text-[var(--color-cyan)]">
                    {p.bullets.map((b, i) => (
                      <li key={i} className="leading-snug">{b}</li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-center justify-between pt-3 border-t border-[var(--color-line)]">
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="font-[var(--font-mono)] text-[10.5px] text-[var(--color-text-faint)] border border-[var(--color-line)] rounded px-1.5 py-0.5"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-[var(--font-mono)] text-[12px] text-[var(--color-cyan)] hover:underline"
                          aria-label={`${p.name} on GitHub`}
                        >
                          <GithubMark size={13} /> repo
                        </a>
                      )}
                      {p.link2 && (
                        <a
                          href={p.link2}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-[var(--font-mono)] text-[12px] text-[var(--color-cyan)] hover:underline"
                        >
                          <ExternalLink size={13} /> udp
                        </a>
                      )}
                      {!p.link && <span className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-faint)]">private</span>}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
