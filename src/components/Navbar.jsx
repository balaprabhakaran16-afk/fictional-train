function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5">

      <div className="max-w-7xl mx-auto px-6">

        <nav className="h-[80px] flex items-center justify-between">

          <a
            href="/"
            className="text-2xl font-bold tracking-tight"
          >
            Bala Prabhakaran M
          </a>

          <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-300">

            <li>
              <a
                href="#about"
                className="hover:text-cyan-400 transition duration-300"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="hover:text-cyan-400 transition duration-300"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="hover:text-cyan-400 transition duration-300"
              >
                Projects
              </a>
            </li>

          <li>
             <a
               href="#education"
              className="hover:text-cyan-400 transition duration-300"
              >
                Education
             </a>
          </li>

            <li>
              <a
                href="#experience"
                className="hover:text-cyan-400 transition duration-300"
              >
                Experience
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-cyan-400 transition duration-300"
              >
                Contact
              </a>
            </li>

          </ul>

        </nav>

      </div>

    </header>
  )
}

export default Navbar