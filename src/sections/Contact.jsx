import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6"
    >

      <div className="max-w-6xl mx-auto">

        {/* TOP */}

        <div className="text-center mb-20">

          <p className="text-cyan-400 uppercase tracking-[3px] text-sm mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">

            Let’s create
            <br />
            something amazing.

          </h2>

          <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-8">

            Open for internships, freelance work and
            full-stack development opportunities.

          </p>

        </div>

        {/* MAIN GRID */}

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}

          <div className="space-y-6">

            {/* EMAIL */}

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition duration-300">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center text-2xl">
                  <MdEmail />
                </div>

                <div>

                  <p className="text-slate-400 mb-1">
                    Email
                  </p>

                  <a
                    href="mailto:balaprabhakaran106@gmail.com"
                    className="text-lg hover:text-cyan-400 transition"
                  >
                    balaprabhakaran106@gmail.com
                  </a>

                </div>

              </div>

            </div>

            {/* PHONE */}

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition duration-300">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center text-2xl">
                  <FaPhoneAlt />
                </div>

                <div>

                  <p className="text-slate-400 mb-1">
                    Phone
                  </p>

                  <a
                    href="tel:7708337356"
                    className="text-lg hover:text-cyan-400 transition"
                  >
                    +91 7708337356
                  </a>

                </div>

              </div>

            </div>

            {/* SOCIALS */}

            <div className="flex gap-5 pt-4">

              <a
                href="https://github.com/balaprabhakaran16-afk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="YOUR_LINKEDIN_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 transition duration-300"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          {/* RIGHT FORM */}

          <form
            action="https://formsubmit.co/balaprabhakaran106@gmail.com"
            method="POST"
            className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6"
          >

            {/* DISABLE CAPTCHA */}

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            {/* EMAIL SUBJECT */}

            <input
              type="hidden"
              name="_subject"
              value="New Portfolio Message!"
            />

            {/* REDIRECT */}

            <input
              type="hidden"
              name="_next"
              value="http://localhost:5173/?success=true#contact"
            />

            {/* TEMPLATE */}

            <input
              type="hidden"
              name="_template"
              value="table"
            />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-[#0f172a] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full bg-[#0f172a] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400 transition"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              required
              className="w-full bg-[#0f172a] border border-white/10 rounded-2xl px-6 py-4 outline-none resize-none focus:border-cyan-400 transition"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-cyan-400 text-black py-4 rounded-2xl font-semibold hover:bg-cyan-300 transition duration-300"
            >
              Send Message 🚀
            </button>

          </form>

        </div>

      </div>

    </section>
  )
}

export default Contact