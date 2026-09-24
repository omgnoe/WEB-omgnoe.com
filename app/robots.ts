import type { MetadataRoute } from "next";

// Explicit allows for AI crawlers: search visibility (Bing feeds ChatGPT,
// Perplexity crawls directly) and answer-engine citations are the goal.
const AI_BOTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "CCBot",
  "Amazonbot",
  "meta-externalagent",
  "Applebot",
  "Applebot-Extended",
  "Bytespider",
  "DuckAssistBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_BOTS.map((bot) => ({ userAgent: bot, allow: "/" })),
    ],
    sitemap: "https://omgnoe.com/sitemap.xml",
    host: "https://omgnoe.com",
  };
}
