function About() {
  return (
    <section
      id="about"
      className="py-32 px-6"
    >

      <div className="max-w-6xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-[3px] text-sm mb-4">
          About
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Passionate about building impactful digital experiences.
        </h2>

        <div className="grid md:grid-cols-2 gap-14">

          <div>

            <p className="text-slate-400 text-lg leading-8 mb-6">

              I'm Bala Prabhakaran, a MERN Stack Developer
              focused on creating scalable, responsive and
              user-friendly full-stack web applications.

            </p>

            <p className="text-slate-400 text-lg leading-8">

              I enjoy solving real-world problems through
              modern technologies while continuously improving
              my development and problem-solving skills.

            </p>

          </div>

          <div className="space-y-5">

            <div className="flex justify-between border-b border-white/10 pb-4">
              <span className="text-slate-400">
                Name
              </span>

              <span>
                Bala Prabhakaran
              </span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-4">
              <span className="text-slate-400">
                Location
              </span>

              <span>
                Tirunelveli, Tamil Nadu, India
              </span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-4">
              <span className="text-slate-400">
                Email
              </span>

              <span>
                balaprabhakaran106@gmail.com
              </span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-4">
              <span className="text-slate-400">
                Experience
              </span>

              <span>
                MERN Stack Intern
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About