import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaPython,
  FaGithub,
} from "react-icons/fa"

import {
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si"

const skills = [
  {
    name: "React.js",
    icon: <FaReact />,
  },

  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },

  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },

  {
    name: "HTML5",
    icon: <FaHtml5 />,
  },

  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },

  {
    name: "Node.js",
    icon: <FaNodeJs />,
  },

  {
    name: "Express.js",
    icon: <SiExpress />,
  },

  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },

  {
    name: "Python",
    icon: <FaPython />,
  },

  {
    name: "GitHub",
    icon: <FaGithub />,
  },

  {
    name: "Postman",
    icon: <SiPostman />,
  },
]

function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-6"
    >

      <div className="max-w-6xl mx-auto">

        <div className="mb-16">

          <p className="text-cyan-400 uppercase tracking-[3px] text-sm mb-4">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">

            Technologies
            <br />
            I work with.

          </h2>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2 group"
            >

              <div className="text-5xl text-cyan-400 mb-6 group-hover:scale-125 group-hover:rotate-6 transition duration-300">

                {skill.icon}

              </div>

              <h3 className="text-lg font-medium text-slate-200">
                {skill.name}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills