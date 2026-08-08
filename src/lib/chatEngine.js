import { chatKnowledge, profile } from "../data/resumeData";

const STOPWORDS = new Set([
  "a", "an", "the", "is", "are", "was", "were", "be", "been", "being",
  "do", "does", "did", "have", "has", "had", "i", "you", "he", "she",
  "it", "we", "they", "what", "where", "when", "who", "why", "how",
  "to", "of", "in", "on", "for", "and", "or", "with", "about", "your",
  "his", "yannick's", "yannick", "can", "tell", "me", "please", "thanks",
]);

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9+#./\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w && !STOPWORDS.has(w));
}

function score(queryTokens, entry) {
  const haystack = [entry.question, ...entry.keywords].join(" ").toLowerCase();
  let s = 0;
  for (const tok of queryTokens) {
    if (haystack.includes(tok)) s += tok.length >= 4 ? 2 : 1;
  }
  // Bonus for direct keyword phrase containment in the raw query
  return s;
}

const GREETINGS = ["hi", "hello", "hey", "yo", "sup", "howdy"];
const THANKS = ["thanks", "thank", "appreciate", "cool", "nice", "great"];

export function getBotResponse(rawQuery) {
  const query = rawQuery.trim().toLowerCase();
  if (!query) {
    return {
      text: "Ask me anything about Yannick's experience, skills, or projects.",
      matched: null,
    };
  }

  if (GREETINGS.some((g) => query === g || query.startsWith(g + " ") || query.startsWith(g + "!"))) {
    return {
      text: `Hey! I'm a small local assistant trained on ${profile.name}'s résumé. Ask about his experience, skills, or projects — try "What does he do at WWTS?" or "What's his strongest skill?"`,
      matched: null,
    };
  }

  if (THANKS.some((t) => query.includes(t))) {
    return {
      text: "Happy to help! Anything else you'd like to know — projects, skills, or how to reach him?",
      matched: null,
    };
  }

  const queryTokens = tokenize(query);
  if (queryTokens.length === 0) {
    return {
      text: "Could you rephrase that? I can talk about Yannick's experience, skills, education, or projects.",
      matched: null,
    };
  }

  let best = null;
  let bestScore = 0;
  for (const entry of chatKnowledge) {
    const s = score(queryTokens, entry);
    if (s > bestScore) {
      bestScore = s;
      best = entry;
    }
  }

  if (best && bestScore >= 2) {
    return { text: best.answer, matched: best.id };
  }

  return {
    text:
      "I don't have that in Yannick's résumé — but I can tell you about his experience at WWTS, his cybersecurity/networking/database coursework, his projects, or how to get in touch. What would you like to know?",
    matched: null,
  };
}
