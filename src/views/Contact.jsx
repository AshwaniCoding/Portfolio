import React, { useContext, useState } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { SITE_CONFIG } from "../seoConfig";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "SDET Job Opportunity",
    message: ""
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const subject = encodeURIComponent(`[Portfolio Inquiry - ${formData.purpose}] From ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.purpose}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
  };

  return (
    <footer id="contact" className="relative pt-16 pb-16 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-zinc-200 dark:border-zinc-800">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              08 / INITIATE CONTACT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-white uppercase font-sans">
              Initiate Contact
            </h2>
          </div>
          <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400 max-w-sm">
            Open to SDET / Test Automation Engineer opportunities, framework architecture consulting, and technical discussions.
          </p>
        </div>

        {/* Contact Content Grid: Symmetrical 50/50 Columns */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Column: Direct Contact & Entity Info */}
          <div className="h-full p-7 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl flex flex-col justify-between shadow-sm">
            
            <div className="space-y-6">
              {/* Header */}
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1.5 font-sans">
                  Direct Coordinates
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                  Reach out directly for roles, tech consults, or quality engineering.
                </p>
              </div>

              {/* Direct Email Card */}
              <div className="p-4 sm:p-5 rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/50">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-400 block mb-2">
                  Direct Email
                </span>
                <div className="flex items-center justify-between gap-3">
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white hover:underline break-all font-mono"
                  >
                    {SITE_CONFIG.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className={`px-3 py-1.5 rounded-full border text-xs font-mono font-semibold transition-all duration-200 active:scale-95 cursor-pointer flex-shrink-0 ${
                      copied
                        ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 border-transparent shadow-sm"
                        : darkMode
                        ? "bg-zinc-800 text-zinc-200 border-zinc-700 hover:bg-zinc-700 hover:text-white"
                        : "bg-white text-zinc-800 border-zinc-300 hover:bg-zinc-100 shadow-sm"
                    }`}
                    title="Copy email to clipboard"
                  >
                    {copied ? "Copied ✓" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Current Position & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/50">
                  <span className="text-zinc-400 uppercase tracking-wider block mb-1 text-[10px]">
                    Current Role
                  </span>
                  <p className="text-xs font-sans font-semibold text-zinc-800 dark:text-zinc-200 leading-snug">
                    Developer in Software Engineering at <strong>UST</strong>
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/50">
                  <span className="text-zinc-400 uppercase tracking-wider block mb-1 text-[10px]">
                    Location
                  </span>
                  <p className="text-xs font-sans font-semibold text-zinc-800 dark:text-zinc-200 leading-snug">
                    {SITE_CONFIG.location}
                  </p>
                </div>
              </div>

              {/* Entity Disambiguation */}
              <div className="p-4 rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/50 text-xs">
                <span className="text-zinc-400 uppercase tracking-wider block mb-1 text-[10px] font-mono">
                  Entity & Identity
                </span>
                <p className="text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed text-xs">
                  <strong>{SITE_CONFIG.fullName}</strong> is also widely known as <strong>{SITE_CONFIG.brandName}</strong> on GitHub (<code>@AshwaniCoding</code>).
                </p>
              </div>
            </div>

            {/* Verified Channels */}
            <div className="pt-6 mt-6 border-t border-zinc-200 dark:border-zinc-800">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-400 block mb-3">
                Verified Social & Coding Channels
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {contactLinks.map((el) => (
                  <a
                    key={el.name}
                    href={el.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/50 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200 active:scale-95 group"
                  >
                    <img src={el.url} alt={el.name} className="w-3.5 h-3.5 object-contain" />
                    <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200 font-mono group-hover:text-zinc-950 dark:group-hover:text-white truncate">
                      {el.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="h-full p-7 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1.5 font-sans">
                  Send Direct Message
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                  Initiates a structured mail client thread to {SITE_CONFIG.email}.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono font-semibold uppercase text-zinc-600 dark:text-zinc-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs font-mono transition-all outline-none ${
                        darkMode
                          ? "bg-zinc-950/80 border-zinc-800 text-white placeholder-zinc-600 focus:border-zinc-500"
                          : "bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-zinc-400"
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-semibold uppercase text-zinc-600 dark:text-zinc-400 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="s.jenkins@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs font-mono transition-all outline-none ${
                        darkMode
                          ? "bg-zinc-950/80 border-zinc-800 text-white placeholder-zinc-600 focus:border-zinc-500"
                          : "bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-zinc-400"
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-semibold uppercase text-zinc-600 dark:text-zinc-400 mb-1.5">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.purpose}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs font-mono transition-all outline-none ${
                      darkMode
                        ? "bg-zinc-950/80 border-zinc-800 text-white focus:border-zinc-500"
                        : "bg-zinc-50 border-zinc-200 text-zinc-900 focus:border-zinc-400"
                    }`}
                  >
                    <option value="SDET Job Opportunity">SDET / Test Automation Opportunity</option>
                    <option value="Framework Consulting">Test Architecture / Automation Consulting</option>
                    <option value="Technical Collaboration">Open Source / Technical Collaboration</option>
                    <option value="General Inquiry">General Discussion / Question</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-semibold uppercase text-zinc-600 dark:text-zinc-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe role requirements, testing scope, or technical questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs font-mono transition-all outline-none resize-none ${
                      darkMode
                        ? "bg-zinc-950/80 border-zinc-800 text-white placeholder-zinc-600 focus:border-zinc-500"
                        : "bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-zinc-400"
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full py-3 px-6 rounded-full font-mono text-xs font-bold transition-all duration-200 active:scale-95 cursor-pointer shadow-md flex items-center justify-center gap-2 ${
                    darkMode
                      ? "bg-white text-zinc-950 hover:bg-zinc-200"
                      : "bg-zinc-900 text-white hover:bg-zinc-800"
                  }`}
                >
                  <span>Compose & Send Inquiry via Email</span>
                  <span>↗</span>
                </button>

                {submitted && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-mono text-center flex items-center justify-center gap-2">
                    <span>✓</span>
                    <span>Mail application opened. Ready to send!</span>
                  </div>
                )}
              </form>
            </div>

            {/* Bottom Meta Bar matching Left Column */}
            <div className="pt-6 mt-6 border-t border-zinc-200 dark:border-zinc-800">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-400 block mb-3">
                Communication Guarantee & SLA
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono">
                <div className="p-2.5 rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/50 flex items-center gap-2">
                  <span className="text-emerald-500 font-bold text-sm">⚡</span>
                  <div className="min-w-0">
                    <span className="text-[10px] text-zinc-400 block">Response Time</span>
                    <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 truncate block">
                      Within 24 Hours
                    </span>
                  </div>
                </div>
                <div className="p-2.5 rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/50 flex items-center gap-2">
                  <span className="text-sky-500 font-bold text-sm">🔒</span>
                  <div className="min-w-0">
                    <span className="text-[10px] text-zinc-400 block">Privacy & Security</span>
                    <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 truncate block">
                      Direct Email Client
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Global Footer Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div>
            &copy; {new Date().getFullYear()} <strong>{SITE_CONFIG.fullName}</strong> ({SITE_CONFIG.brandName}).
          </div>
          <div className="flex items-center gap-4">
            <a href={SITE_CONFIG.socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              GitHub
            </a>
            <span>&bull;</span>
            <a href={SITE_CONFIG.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Contact;
