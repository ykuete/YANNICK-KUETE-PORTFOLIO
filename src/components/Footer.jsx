import { profile } from "../data/resumeData";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] py-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 font-[var(--font-mono)] text-[12px] text-[var(--color-text-faint)]">
        <span>© {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.</span>
        <span>Denver, CO · Open to opportunities</span>
      </div>
    </footer>
  );
}
