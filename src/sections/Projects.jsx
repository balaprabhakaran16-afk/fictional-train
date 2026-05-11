import { motion } from "framer-motion"

const projects = [
  {
    title: "E-Commerce Web Application",

    description:
      "Built a full-stack MERN e-commerce application with authentication, cart management and responsive UI design.",

    tech: [
      "React",
      "TypeScript",
      "HTML",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },

  {
    title: "Smart Campus Management System",

    description:
      "Developed a centralized campus management platform with attendance tracking, authentication and academic analytics dashboard.",

    tech: [
      "React",
      "JavaScript",
      "HTML",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-6"
    >

      <div className="max-w-6xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-[3px] text-sm mb-4">
          Projects
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-14 leading-tight">
          Featured work and development projects.
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2 backdrop-blur-xl"
            >

              <div className="flex items-start justify-between mb-6">

                <h3 className="text-2xl font-semibold leading-snug max-w-[80%]">
                  {project.title}
                </h3>

                <span className="text-cyan-400 text-sm">
                  0{index + 1}
                </span>

              </div>

              <p className="text-slate-400 leading-8 mb-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">

                {project.tech.map((item, techIndex) => (

                  <span
                    key={techIndex}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300"
                  >
                    {item}
                  </span>

                ))}

              </div>

              <a
                href="https://github.com/balaprabhakaran16-afk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium hover:text-cyan-400 transition duration-300"
              >

                View on GitHub →

              </a>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects