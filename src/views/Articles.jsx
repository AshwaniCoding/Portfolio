import React, { useContext, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { articlesData } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "../seoConfig";

// Inline text formatter for bold (**text**) and code (`code`)
export const renderInlineText = (text) => {
  if (!text) return null;
  const regex = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const content = part.slice(2, -2);
      return (
        <strong key={index} className="font-bold text-zinc-900 dark:text-zinc-100">
          {content}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      const code = part.slice(1, -1);
      return (
        <code
          key={index}
          className="px-1.5 py-0.5 mx-0.5 rounded text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/70 dark:border-zinc-700/70"
        >
          {code}
        </code>
      );
    }
    return part;
  });
};

// Syntax-styled code block with copy action
const CodeBlock = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-5 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 text-zinc-100 shadow-xl font-mono text-xs">
      <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900 border-b border-zinc-800 text-zinc-400">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[11px] font-mono text-zinc-400 ml-2 uppercase font-semibold">
            {language || "TypeScript"}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="text-[11px] font-mono px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors cursor-pointer flex items-center gap-1.5"
        >
          <span>{copied ? "Copied ✓" : "Copy Code"}</span>
        </button>
      </div>
      <pre className="p-4 sm:p-5 overflow-x-auto text-zinc-200 leading-relaxed font-mono text-xs">
        <code>{code}</code>
      </pre>
    </div>
  );
};

// Full article content parser converting markdown blocks into rich semantic elements
const ArticleBody = ({ content }) => {
  if (!content) return null;

  const lines = content.trim().split("\n");
  const elements = [];
  let inCodeBlock = false;
  let codeBuffer = [];
  let codeLang = "";
  let listBuffer = [];
  let listType = null; // 'ol' or 'ul'

  const flushList = () => {
    if (listBuffer.length > 0) {
      if (listType === "ol") {
        elements.push(
          <ol key={`ol-${elements.length}`} className="space-y-3.5 my-4 pl-0">
            {listBuffer.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-mono text-xs font-bold flex items-center justify-center border border-zinc-200 dark:border-zinc-700/60 mt-0.5 shadow-sm">
                  {item.num}
                </span>
                <div className="flex-1 pt-0.5">
                  {renderInlineText(item.text)}
                </div>
              </li>
            ))}
          </ol>
        );
      } else if (listType === "ul") {
        elements.push(
          <ul key={`ul-${elements.length}`} className="space-y-2.5 my-4 pl-0">
            {listBuffer.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300"
              >
                <span className="text-emerald-500 dark:text-emerald-400 font-bold mt-0.5 flex-shrink-0 text-base leading-none">
                  ▸
                </span>
                <div className="flex-1">
                  {renderInlineText(item.text)}
                </div>
              </li>
            ))}
          </ul>
        );
      }
      listBuffer = [];
      listType = null;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    // Check code block fences
    if (trimmed.startsWith("```")) {
      flushList();
      if (inCodeBlock) {
        elements.push(
          <CodeBlock
            key={`code-${elements.length}`}
            code={codeBuffer.join("\n")}
            language={codeLang}
          />
        );
        codeBuffer = [];
        codeLang = "";
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
        codeLang = trimmed.replace("```", "").trim();
      }
      continue;
    }

    if (inCodeBlock) {
      codeBuffer.push(rawLine);
      continue;
    }

    // Empty line separates blocks
    if (!trimmed) {
      flushList();
      continue;
    }

    // Headings (###)
    if (trimmed.startsWith("### ")) {
      flushList();
      const headingText = trimmed.replace(/^###\s+/, "");
      elements.push(
        <h3
          key={`h3-${elements.length}`}
          className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mt-7 mb-3 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 first:border-0 first:pt-0 font-sans tracking-tight"
        >
          {renderInlineText(headingText)}
        </h3>
      );
      continue;
    }

    // Sub-headings (####)
    if (trimmed.startsWith("#### ")) {
      flushList();
      const headingText = trimmed.replace(/^####\s+/, "");
      elements.push(
        <h4
          key={`h4-${elements.length}`}
          className="text-base font-bold text-zinc-900 dark:text-zinc-100 mt-5 mb-2.5 font-sans"
        >
          {renderInlineText(headingText)}
        </h4>
      );
      continue;
    }

    // Level 2 Headings (##)
    if (trimmed.startsWith("## ")) {
      flushList();
      const headingText = trimmed.replace(/^##\s+/, "");
      elements.push(
        <h2
          key={`h2-${elements.length}`}
          className="text-xl sm:text-2xl font-extrabold text-zinc-900 dark:text-white mt-7 mb-3 font-sans tracking-tight"
        >
          {renderInlineText(headingText)}
        </h2>
      );
      continue;
    }

    // Numbered list item: e.g. "1. **Title**: text"
    const olMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
    if (olMatch) {
      if (listType !== "ol") {
        flushList();
        listType = "ol";
      }
      listBuffer.push({
        num: olMatch[1],
        text: olMatch[2]
      });
      continue;
    }

    // Bullet list item: e.g. "- **Title**: text" or "* text"
    const ulMatch = trimmed.match(/^[-*]\s+(.*)$/);
    if (ulMatch) {
      if (listType !== "ul") {
        flushList();
        listType = "ul";
      }
      listBuffer.push({
        text: ulMatch[1]
      });
      continue;
    }

    // Regular paragraph
    flushList();
    elements.push(
      <p
        key={`p-${elements.length}`}
        className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 font-sans my-3"
      >
        {renderInlineText(trimmed)}
      </p>
    );
  }

  flushList();
  return <div className="space-y-1">{elements}</div>;
};

const Articles = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedArticle]);

  return (
    <section id="articles" className="relative py-14 sm:py-18 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-zinc-200 dark:border-zinc-800">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              07 / TECHNICAL WRITING
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-white uppercase font-sans">
              QA Insights & Writing
            </h2>
          </div>
          <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400 max-w-sm">
            Architecture deep-dives on Playwright, API test design, and Shift-Left quality engineering authored by {SITE_CONFIG.brandName}.
          </p>
        </div>

        {/* Articles List Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articlesData.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="group h-full p-7 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-600 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 shadow-sm"
            >
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-4">
                  <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
                    {article.category}
                  </span>
                  <span>{article.readingTime}</span>
                </div>

                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors leading-snug font-sans min-h-[3.5rem] flex items-start">
                  {article.title}
                </h3>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed mb-6 font-sans flex-1">
                  {renderInlineText(article.summary)}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between mt-auto">
                <span className="text-[11px] font-mono text-zinc-400">
                  By {SITE_CONFIG.brandName}
                </span>
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <span>Read Article</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LinkedIn Connection Callout */}
        <div className="mt-12 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300">
          <div>
            <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-1 font-sans">
              Connect on LinkedIn with {SITE_CONFIG.fullName}
            </h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
              Regular discussions on Playwright, CI/CD gates, REST API testing, and SDET career engineering.
            </p>
          </div>
          <a
            href={SITE_CONFIG.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2.5 rounded-full text-xs font-mono font-semibold whitespace-nowrap transition-all duration-200 active:scale-95 ${
              darkMode
                ? "bg-white text-zinc-950 hover:bg-zinc-200 shadow-md"
                : "bg-zinc-900 text-white hover:bg-zinc-800 shadow-md"
            }`}
          >
            LinkedIn Profile ↗
          </a>
        </div>
      </div>

      {/* Article Reader Modal (Portaled directly to document.body with z-[9999]) */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedArticle && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl"
                onClick={() => setSelectedArticle(null)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ type: "spring", damping: 28, stiffness: 320 }}
                  onClick={(e) => e.stopPropagation()}
                  className={`relative w-full max-w-3xl max-h-[88vh] rounded-3xl shadow-2xl p-6 sm:p-10 overflow-y-auto border ${
                    darkMode
                      ? "bg-zinc-950/95 border-zinc-800 text-zinc-100 shadow-black/80"
                      : "bg-white/95 border-zinc-200 text-zinc-900 shadow-zinc-900/20"
                  }`}
                >
                  {/* Close Button with Rotation */}
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200 hover:rotate-90 active:scale-90 cursor-pointer"
                    aria-label="Close modal"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      {selectedArticle.category}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">{selectedArticle.readingTime}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 dark:text-white mb-3 font-sans tracking-tight">
                    {selectedArticle.title}
                  </h2>

                  <div className="text-xs font-mono text-zinc-400 pb-4 mb-6 border-b border-zinc-200 dark:border-zinc-800">
                    Authored by <strong className="text-zinc-700 dark:text-zinc-200">{SITE_CONFIG.fullName}</strong> ({SITE_CONFIG.brandName}) &bull; SDET & Quality Engineering
                  </div>

                  {/* Render parsed article content with typography, code blocks, lists, and bold text */}
                  <div className="article-body-content">
                    <ArticleBody content={selectedArticle.fullContent} />
                  </div>

                  {/* Modal Footer */}
                  <div className="mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                    <a
                      href={SITE_CONFIG.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono font-semibold hover:underline text-blue-600 dark:text-blue-400 flex items-center gap-1"
                    >
                      <span>Discuss on LinkedIn</span>
                      <span>↗</span>
                    </a>
                    <button
                      onClick={() => setSelectedArticle(null)}
                      className="px-5 py-2.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 text-xs font-mono font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-200 active:scale-95 cursor-pointer shadow-sm"
                    >
                      Close Article
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
};

export default Articles;

