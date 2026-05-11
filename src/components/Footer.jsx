function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-10 overflow-hidden">

      {/* GLOW */}

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-cyan-500/10 blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 py-14 relative z-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* LEFT */}

          <div>

            <h2 className="text-3xl font-bold mb-3">
              Bala Prabhakaran
            </h2>

            <p className="text-slate-400 leading-7 max-w-sm">

              MERN Stack Developer passionate about
              building scalable, responsive and modern
              web applications.

            </p>

          </div>

          {/* RIGHT */}

          <div className="text-center md:text-right">

            <p className="text-slate-500 mb-2">
              © 2026 Bala Prabhakaran
            </p>

            <p className="text-slate-600 text-sm">
              Designed & Developed by Bala
            </p>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer