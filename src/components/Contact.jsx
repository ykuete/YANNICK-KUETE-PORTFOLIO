import { Mail, Phone, FileDown, ArrowUpRight } from "lucide-react";
import { profile } from "../data/resumeData";
import { SectionEyebrow } from "./About";
import GithubMark from "./GithubMark";
import { withBase } from "../lib/paths";

const LINKS = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/[^\d+]/g, "")}` },
  { icon: GithubMark, label: "github.com/ykuete", href: profile.github },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 border-t border-[var(--color-line)]">
      <div className="absolute inset-0 blueprint-grid blueprint-grid-fade opacity-40" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <SectionEyebrow index="§06">Contact</SectionEyebrow>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl text-[var(--color-text)] mb-4 text-balance">
              Let's build something reliable.
            </h2>
            <p className="text-[var(--color-text-muted)] text-[15px] leading-relaxed max-w-md">
              {profile.availability}. Reach out directly, or download the résumé
              for the full picture.
            </p>
            <a
              href={withBase("Yannick_Kuete_Resume.pdf")}
              download
              className="mt-6 inline-flex items-center gap-2 font-[var(--font-mono)] text-sm px-5 py-3 rounded bg-[var(--color-cyan)] text-[var(--color-ink)] font-medium hover:bg-[var(--color-cyan)]/85 transition-colors"
            >
              <FileDown size={15} /> Download Résumé (PDF)
            </a>
          </div>

          <div className="border border-[var(--color-line)] rounded-lg bg-[var(--color-bg-panel)]/60 divide-y divide-[var(--color-line)]">
            {LINKS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 px-5 py-4 group hover:bg-[var(--color-bg-panel-raised)] transition-colors"
              >
                <Icon size={16} className="text-[var(--color-cyan)] shrink-0" />
                <span className="font-[var(--font-mono)] text-sm text-[var(--color-text)] flex-1">{label}</span>
                <ArrowUpRight
                  size={15}
                  className="text-[var(--color-text-faint)] group-hover:text-[var(--color-cyan)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
