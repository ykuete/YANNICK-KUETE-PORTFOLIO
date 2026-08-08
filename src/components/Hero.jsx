import { ArrowDown, MessageSquareText } from "lucide-react";
import { profile } from "../data/resumeData";
import { withBase } from "../lib/paths";

const NODES = [
  { key: "SEC", x: 259, y: 61, label: "Security", delay: 0.9 },
  { key: "NET", x: 61, y: 61, label: "Networks", delay: 1.05 },
  { key: "DB", x: 61, y: 259, label: "Databases", delay: 1.2 },
  { key: "OPS", x: 259, y: 259, label: "Automation", delay: 1.35 },
];
const CENTER = { x: 160, y: 160 };

function openChatbot() {
  window.dispatchEvent(new CustomEvent("open-chatbot"));
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 blueprint-grid blueprint-grid-fade opacity-60" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-line)] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-[1.15fr_1fr] gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 font-[var(--font-mono)] text-[12px] tracking-wide text-[var(--color-amber)] border border-[var(--color-amber)]/40 bg-[var(--color-amber)]/5 rounded-full px-3 py-1 mb-6">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-amber)] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--color-amber)]" />
            </span>
            {profile.availability}
          </div>

          <h1 className="font-[var(--font-display)] font-medium leading-[0.98] tracking-tight text-balance text-5xl sm:text-6xl lg:text-7xl text-[var(--color-text)]">
            Yannick
            <br />
            Kuete
          </h1>

          <p className="mt-5 font-[var(--font-mono)] text-[var(--color-cyan)] text-base sm:text-lg tracking-wide">
            {profile.title}
          </p>

          <p className="mt-5 max-w-xl text-[var(--color-text-muted)] text-[15px] sm:text-base leading-relaxed">
            I turn manual, error-prone workflows into reliable, automated systems —
            drawing on security, networking, and database fundamentals to build
            software that holds up under real conditions. Based in Denver, CO.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 font-[var(--font-mono)] text-sm px-5 py-3 rounded bg-[var(--color-cyan)] text-[var(--color-ink)] font-medium hover:bg-[var(--color-cyan)]/85 transition-colors"
            >
              View Projects <ArrowDown size={15} />
            </a>
            <button
              onClick={openChatbot}
              className="inline-flex items-center gap-2 font-[var(--font-mono)] text-sm px-5 py-3 rounded border border-[var(--color-line)] text-[var(--color-text)] hover:border-[var(--color-cyan)]/60 hover:text-[var(--color-cyan)] transition-colors"
            >
              <MessageSquareText size={15} /> Ask my AI assistant
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-[280px] h-[280px] sm:w-[320px] sm:h-[320px]" aria-hidden="true">
          <svg viewBox="0 0 320 320" className="absolute inset-0 w-full h-full">
            {NODES.map((n, i) => {
              const len = Math.round(Math.hypot(n.x - CENTER.x, n.y - CENTER.y)) + 4;
              return (
                <line
                  key={n.key}
                  x1={CENTER.x}
                  y1={CENTER.y}
                  x2={n.x}
                  y2={n.y}
                  stroke="var(--color-cyan)"
                  strokeWidth="1.4"
                  opacity="0.6"
                  className="draw-line"
                  style={{ "--len": len, "--delay": `${0.5 + i * 0.12}s` }}
                />
              );
            })}
            {NODES.map((n) => (
              <circle
                key={n.key + "-node"}
                cx={n.x}
                cy={n.y}
                r="4.5"
                fill="var(--color-amber)"
                className="node-pop"
                style={{ "--delay": `${n.delay}s` }}
              />
            ))}
            <circle cx={CENTER.x} cy={CENTER.y} r="72" fill="none" stroke="var(--color-line)" strokeWidth="1" strokeDasharray="2 4" />
          </svg>

          {NODES.map((n) => (
            <div
              key={n.key + "-label"}
              className="absolute node-pop"
              style={{
                left: `${(n.x / 320) * 100}%`,
                top: `${(n.y / 320) * 100}%`,
                transform: "translate(-50%, -50%)",
                "--delay": `${n.delay + 0.1}s`,
              }}
            >
              <div
                className={`translate-y-[14px] font-[var(--font-mono)] text-[10px] tracking-wider px-2 py-0.5 rounded border border-[var(--color-line)] bg-[var(--color-bg-panel)] text-[var(--color-text-muted)] whitespace-nowrap
                ${n.x < 160 ? "-translate-x-full ml-3" : "ml-3"}`}
              >
                {n.key} · {n.label}
              </div>
            </div>
          ))}

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[132px] h-[132px] sm:w-[152px] sm:h-[152px] rounded-full ring-2 ring-[var(--color-cyan)]/50 ring-offset-4 ring-offset-[var(--color-bg)] overflow-hidden shadow-[0_0_40px_-8px_rgba(94,234,212,0.35)]">
              <img
                src={withBase("images/profile.jpg")}
                alt="Portrait of Yannick Kuete"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
