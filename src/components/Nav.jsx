import { useEffect, useState } from "react";
import { Menu, X, FileDown } from "lucide-react";
import { withBase } from "../lib/paths";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-[var(--color-bg)]/90 backdrop-blur border-b border-[var(--color-line)]" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 h-16">
        <a href="#top" className="flex items-center gap-2.5 group" aria-label="Back to top">
          <svg width="26" height="26" viewBox="0 0 64 64" aria-hidden="true">
            <rect width="64" height="64" rx="14" fill="var(--color-bg-panel)" stroke="var(--color-line)" />
            <circle cx="32" cy="32" r="5" fill="var(--color-cyan)" />
            <circle cx="16" cy="18" r="2.5" fill="var(--color-amber)" />
            <circle cx="48" cy="18" r="2.5" fill="var(--color-amber)" />
            <circle cx="16" cy="46" r="2.5" fill="var(--color-amber)" />
            <circle cx="48" cy="46" r="2.5" fill="var(--color-amber)" />
            <path
              d="M32 32L16 18M32 32L48 18M32 32L16 46M32 32L48 46"
              stroke="var(--color-cyan)"
              strokeWidth="1.4"
              opacity="0.75"
            />
          </svg>
          <span className="font-[var(--font-mono)] text-sm tracking-wide text-[var(--color-text)] group-hover:text-[var(--color-cyan)] transition-colors">
            Y.KUETE
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-7 font-[var(--font-mono)] text-[13px] tracking-wide text-[var(--color-text-muted)]">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-[var(--color-cyan)] transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={withBase("Yannick_Kuete_Resume.pdf")}
            download
            className="inline-flex items-center gap-1.5 font-[var(--font-mono)] text-[13px] px-3.5 py-1.5 rounded border border-[var(--color-cyan)]/50 text-[var(--color-cyan)] hover:bg-[var(--color-cyan)]/10 transition-colors"
          >
            <FileDown size={14} /> Résumé
          </a>
        </div>

        <button
          className="md:hidden text-[var(--color-text)]"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[var(--color-bg-panel)] border-t border-[var(--color-line)] px-5 py-4">
          <ul className="flex flex-col gap-4 font-[var(--font-mono)] text-sm text-[var(--color-text-muted)]">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="hover:text-[var(--color-cyan)]">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={withBase("Yannick_Kuete_Resume.pdf")}
                download
                className="inline-flex items-center gap-1.5 text-[var(--color-cyan)]"
              >
                <FileDown size={14} /> Download Résumé
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
