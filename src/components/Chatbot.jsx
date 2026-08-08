import { useEffect, useRef, useState } from "react";
import { MessageSquareText, X, Send, Sparkles } from "lucide-react";
import { getBotResponse } from "../lib/chatEngine";
import { profile, suggestedQuestions } from "../data/resumeData";

const WELCOME = {
  role: "bot",
  text: `Hi, I'm a small assistant trained on ${profile.name}'s résumé — ask me about his experience, skills, or projects.`,
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-chatbot", handler);
    return () => window.removeEventListener("open-chatbot", handler);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 250);
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  function send(text) {
    const q = (text ?? input).trim();
    if (!q) return;
    setMessages((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setTyping(true);
    const delay = 380 + Math.random() * 380;
    setTimeout(() => {
      const { text: answer } = getBotResponse(q);
      setMessages((m) => [...m, { role: "bot", text: answer }]);
      setTyping(false);
    }, delay);
  }

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[var(--color-cyan)] text-[var(--color-ink)] shadow-[0_8px_30px_-6px_rgba(94,234,212,0.5)] flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
      >
        {open ? <X size={22} /> : <MessageSquareText size={22} />}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Résumé assistant chat"
          className="fixed z-50 bottom-24 right-5 left-5 sm:left-auto sm:w-[380px] h-[min(560px,70vh)] rounded-xl border border-[var(--color-line)] bg-[var(--color-bg-panel)] shadow-2xl flex flex-col overflow-hidden"
        >
          <div className="flex items-center gap-2.5 px-4 py-3.5 border-b border-[var(--color-line)] bg-[var(--color-bg-panel-raised)]">
            <div className="w-8 h-8 rounded-full bg-[var(--color-cyan)]/15 border border-[var(--color-cyan)]/40 flex items-center justify-center">
              <Sparkles size={15} className="text-[var(--color-cyan)]" />
            </div>
            <div className="leading-tight">
              <div className="font-[var(--font-display)] text-sm text-[var(--color-text)]">Résumé Assistant</div>
              <div className="font-[var(--font-mono)] text-[10.5px] text-[var(--color-text-faint)]">
                runs locally · no data leaves your browser
              </div>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-lg px-3.5 py-2.5 text-[13.5px] leading-relaxed ${
                    m.role === "user"
                      ? "bg-[var(--color-cyan)] text-[var(--color-ink)]"
                      : "bg-[var(--color-bg)] border border-[var(--color-line)] text-[var(--color-text)]"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-[var(--color-bg)] border border-[var(--color-line)] rounded-lg px-3.5 py-2.5 flex gap-1 items-center">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-faint)] animate-bounce"
                      style={{ animationDelay: `${i * 0.12}s` }}
                    />
                  ))}
                </div>
              </div>
            )}

            {messages.length === 1 && !typing && (
              <div className="pt-2 flex flex-wrap gap-1.5">
                {suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="font-[var(--font-mono)] text-[11.5px] text-[var(--color-cyan)] border border-[var(--color-cyan)]/30 rounded-full px-3 py-1.5 hover:bg-[var(--color-cyan)]/10 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="flex items-center gap-2 p-3 border-t border-[var(--color-line)]"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about his experience, skills…"
              className="flex-1 bg-[var(--color-bg)] border border-[var(--color-line)] rounded-lg px-3 py-2.5 text-[13.5px] text-[var(--color-text)] placeholder:text-[var(--color-text-faint)] focus:border-[var(--color-cyan)]/60 outline-none"
            />
            <button
              type="submit"
              aria-label="Send"
              className="w-10 h-10 shrink-0 rounded-lg bg-[var(--color-cyan)] text-[var(--color-ink)] flex items-center justify-center hover:bg-[var(--color-cyan)]/85 transition-colors disabled:opacity-40"
              disabled={!input.trim()}
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
