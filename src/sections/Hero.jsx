import { FaGithub, FaLinkedin } from "react-icons/fa"
import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      {/* Glow Effects */}

      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-cyan-500/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500/20 blur-[140px] rounded-full"></div>

      {/* Content */}

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-center relative z-10"
      >

        <p className="text-cyan-400 tracking-[4px] uppercase text-sm mb-6">
          MERN Stack Developer
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-8">

          Bala
          <br />

          Prabhakaran.

        </h1>

        <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-8 mb-12">

          Passionate MERN Stack Developer focused on
          building scalable, responsive and user-friendly
          web applications with modern technologies.

        </p>

        {/* CTA */}

        <div className="flex items-center justify-center gap-8 text-sm font-medium mb-12">

          <a
            href="#projects"
            className="hover:text-cyan-400 transition duration-300"
          >
            View Projects
          </a>

          <div className="w-10 h-[1px] bg-slate-700"></div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300"
          >
            View Resume
          </a>

        </div>

        {/* SOCIAL ICONS */}

        <div className="flex items-center justify-center gap-6 text-slate-300">

          <a
            href="https://github.com/balaprabhakaran16-afk"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="YOUR_LINKEDIN_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 transition duration-300"
          >
            <FaLinkedin />
          </a>

        </div>

      </motion.div>

    </section>
  )
}

export default Hero