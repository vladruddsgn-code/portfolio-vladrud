export default function ContactSection() {
  return (
    <section className="bg-black border-t border-white/5">

      <div className="px-6 md:px-8 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">

          {/* 3 колонки на одному рівні */}
          <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-8">

            {/* 1 — Слоган */}
            <div className="flex flex-col gap-6">
              <p className="text-xs tracking-[0.2em] uppercase text-white/30">
                Available for work
              </p>
              <h2 className="text-5xl md:text-6xl font-light text-white leading-tight tracking-tight">
                Let&apos;s build<br />something<br />
                <span className="text-white/30">together</span>
              </h2>
            </div>

            {/* 2 — Download CV */}
            <div className="flex flex-col gap-4">
              <p className="text-xs tracking-[0.2em] uppercase text-white/50">Download CV</p>
              <div className="flex flex-col gap-3 mt-1">
                <a
                  href="/cv-eng.pdf"
                  download
                  className="group flex items-center gap-2.5 px-5 py-2.5 border border-white/40 text-white/80 text-xs tracking-[0.18em] uppercase hover:border-white hover:text-white transition-all duration-200 w-fit"
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-y-0.5 transition-transform duration-200">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  ENG
                </a>
                <a
                  href="/cv-ua.pdf"
                  download
                  className="group flex items-center gap-2.5 px-5 py-2.5 border border-white/40 text-white/80 text-xs tracking-[0.18em] uppercase hover:border-white hover:text-white transition-all duration-200 w-fit"
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-y-0.5 transition-transform duration-200">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  UA
                </a>
              </div>
            </div>

            {/* 3 — Контакти */}
            <div className="flex flex-col gap-4">
              <p className="text-xs tracking-[0.2em] uppercase text-white/50">Contacts</p>

              <div className="flex flex-col gap-5 mt-1">
                <a href="mailto:vladrud.dsgn@gmail.com" className="group flex items-center gap-4 text-white/70 hover:text-white transition-colors duration-200">
                  <div className="w-10 h-10 rounded-full border border-white/25 group-hover:border-white/60 flex items-center justify-center transition-colors duration-200 shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <span className="text-sm tracking-wide">vladrud.dsgn@gmail.com</span>
                </a>

                <a href="tel:+380966055026" className="group flex items-center gap-4 text-white/70 hover:text-white transition-colors duration-200">
                  <div className="w-10 h-10 rounded-full border border-white/25 group-hover:border-white/60 flex items-center justify-center transition-colors duration-200 shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.07 6.07l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <span className="text-sm tracking-wide">+38 096 605 50 26</span>
                </a>

                <a href="https://t.me/vladrudnitskiy" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-white/70 hover:text-white transition-colors duration-200">
                  <div className="w-10 h-10 rounded-full border border-white/25 group-hover:border-white/60 flex items-center justify-center transition-colors duration-200 shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.67l-2.94-.92c-.64-.203-.653-.64.136-.954l11.47-4.42c.537-.194 1.006.131.837.847z"/>
                    </svg>
                  </div>
                  <span className="text-sm tracking-wide">Telegram</span>
                </a>

                <a href="https://wa.me/380966055026" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-white/70 hover:text-white transition-colors duration-200">
                  <div className="w-10 h-10 rounded-full border border-white/25 group-hover:border-white/60 flex items-center justify-center transition-colors duration-200 shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                    </svg>
                  </div>
                  <span className="text-sm tracking-wide">WhatsApp</span>
                </a>

                <a href="https://www.instagram.com/by.vladrud/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-white/70 hover:text-white transition-colors duration-200">
                  <div className="w-10 h-10 rounded-full border border-white/25 group-hover:border-white/60 flex items-center justify-center transition-colors duration-200 shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="2" width="20" height="20" rx="5"/>
                      <circle cx="12" cy="12" r="4"/>
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                    </svg>
                  </div>
                  <span className="text-sm tracking-wide">Instagram</span>
                </a>

                <a href="https://www.linkedin.com/in/vladislav-rudnitskyi/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-white/70 hover:text-white transition-colors duration-200">
                  <div className="w-10 h-10 rounded-full border border-white/25 group-hover:border-white/60 flex items-center justify-center transition-colors duration-200 shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </div>
                  <span className="text-sm tracking-wide">LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="mt-24 pt-8 border-t border-white/5 flex justify-between items-center">
            <span className="text-xs text-white/20 tracking-widest">© 2026 Vladislav Rudnitskiy</span>
            <span className="text-xs text-white/20 tracking-widest uppercase">Portfolio</span>
          </div>
        </div>
      </div>

    </section>
  );
}
