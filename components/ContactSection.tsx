export default function ContactSection() {
  return (
    <section className="bg-black px-8 py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-white/30 mb-6">
            Get in touch
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
            Let&apos;s work<br />together
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          <a
            href="mailto:vladrud.dsgn@gmail.com"
            className="text-sm text-white/50 hover:text-white transition-colors duration-200 tracking-wide"
          >
            vladrud.dsgn@gmail.com
          </a>
          <a
            href="tel:+380966055026"
            className="text-sm text-white/50 hover:text-white transition-colors duration-200 tracking-wide"
          >
            +38 096 605 50 26
          </a>
          <a
            href="https://t.me/vladrudnitskiy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/50 hover:text-white transition-colors duration-200 tracking-wide"
          >
            Telegram
          </a>
          <a
            href="https://www.instagram.com/by.vladrud/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/50 hover:text-white transition-colors duration-200 tracking-wide"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-white/5 flex justify-between items-center">
        <span className="text-xs text-white/20 tracking-widest">
          © 2026 Vladislav Rudnitskiy
        </span>
        <span className="text-xs text-white/20 tracking-widest uppercase">
          Portfolio
        </span>
      </div>
    </section>
  );
}
