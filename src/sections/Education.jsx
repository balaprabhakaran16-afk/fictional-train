function Education() {
  return (
    <section
      id="education"
      className="py-32 px-6"
    >

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}

        <div className="mb-16">

          <p className="text-cyan-400 uppercase tracking-[3px] text-sm mb-4">
            Education
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">

            Academic
            <br />
            background.

          </h2>

        </div>

        {/* EDUCATION CARDS */}

        <div className="space-y-8">

          {/* COLLEGE */}

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition duration-300">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">

              <div>

                <h3 className="text-2xl font-semibold mb-2">
                  Bachelor of Science in Computer Science
                </h3>

                <p className="text-cyan-400">
                  Erode Arts and Science College (Autonomous)
                </p>

              </div>

              <span className="text-slate-400">
                2023 — 2026
              </span>

            </div>

            <p className="text-slate-400 leading-8">

              Pursuing undergraduate studies in Computer Science
              with focus on programming, full-stack development
              and modern software technologies.

            </p>

          </div>

          {/* 12TH */}

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition duration-300">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">

              <div>

                <h3 className="text-2xl font-semibold mb-2">
                  Higher Secondary Education
                </h3>

                <p className="text-cyan-400">
                  Vivekanandha Vidhyashram Matric Higher Secondary School
                </p>

              </div>

              <span className="text-slate-400">
                2023
              </span>

            </div>

            <p className="text-slate-400 leading-8">

              Completed higher secondary education with
              strong interest in computer science and technology.

            </p>

          </div>

          {/* 10TH */}

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition duration-300">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">

              <div>

                <h3 className="text-2xl font-semibold mb-2">
                  Secondary School Education
                </h3>

                <p className="text-cyan-400">
                  Saratha Matriculation School
                </p>

              </div>

              <span className="text-slate-400">
                2021
              </span>

            </div>

            <p className="text-slate-400 leading-8">

              Built foundational academic and analytical skills
              with growing passion for software development.

            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Education