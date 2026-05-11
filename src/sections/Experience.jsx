function Experience() {
  return (
    <section
      id="experience"
      className="py-32 px-6"
    >

      <div className="max-w-6xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-[3px] text-sm mb-4">
          Experience
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-14">
          Internship and professional experience.
        </h2>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">

            <div>

              <h3 className="text-3xl font-semibold mb-3">
                MERN Full Stack Developer Intern
              </h3>

              <p className="text-cyan-400">
                Hepta Fusion, Coimbatore
              </p>

            </div>

            <span className="text-slate-400">
              Nov 2025 — Dec 2025
            </span>

          </div>

          <div className="space-y-5 text-slate-400 leading-8">

            <p>
              • Developed responsive web components using React.js.
            </p>

            <p>
              • Worked on REST APIs using Node.js and Express.js.
            </p>

            <p>
              • Collaborated with frontend and backend teams on full-stack development tasks.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Experience