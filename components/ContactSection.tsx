export default function ContactSection() {
  return (
    <section className="bg-black px-6 md:px-8 py-24 md:py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-8">

          {/* Left — заголовок */}
          <div className="flex flex-col justify-between">
            <p className="text-xs tracking-[0.2em] uppercase text-white/30 mb-8">
              Available for work
            </p>
            <div>
              <h2 className="text-5xl md:text-7xl font-light text-white leading-tight tracking-tight">
                Let&apos;s build<br />something<br />
                <span className="text-white/30">together</span>
              </h2>
            </div>
          </div>

          {/* Right — контакти */}
          <div className="flex flex-col justify-end gap-5 min-w-[240px]">

            <a
              href="mailto:vladrud.dsgn@gmail.com"
              className="group flex items-center gap-4 text-white/50 hover:text-white transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-white/40 flex items-center justify-center transition-colors duration-200 shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <span className="text-sm tracking-wide">vladrud.dsgn@gmail.com</span>
            </a>

            <a
              href="tel:+380966055026"
              className="group flex items-center gap-4 text-white/50 hover:text-white transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-white/40 flex items-center justify-center transition-colors duration-200 shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.07 6.07l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <span className="text-sm tracking-wide">+38 096 605 50 26</span>
            </a>

            <a
              href="https://t.me/vladrudnitskiy"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-white/50 hover:text-white transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-white/40 flex items-center justify-center transition-colors duration-200 shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.67l-2.94-.92c-.64-.203-.653-.64.136-.954l11.47-4.42c.537-.194 1.006.131.837.847z"/>
                </svg>
              </div>
              <span className="text-sm tracking-wide">Telegram</span>
            </a>

            <a
              href="https://www.instagram.com/by.vladrud/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-white/50 hover:text-white transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-white/40 flex items-center justify-center transition-colors duration-200 shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-sm tracking-wide">Instagram</span>
            </a>

          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-white/5 flex justify-between items-center">
          <span className="text-xs text-white/20 tracking-widest">
            © 2026 Vladislav Rudnitskiy
          </span>
          <span className="text-xs text-white/20 tracking-widest uppercase">
            Portfolio
          </span>
        </div>

      </div>
    </section>
  );
}
