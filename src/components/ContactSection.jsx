function ContactSection() {
  return (
    <section className="bg-[#020817] py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div>

            <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
              Start a Project
            </p>

            <h2 className="text-5xl lg:text-6xl font-black leading-tight">
              Your Vision.
              <br />
              <span className="text-cyan-400">
                Our Engineering.
              </span>
            </h2>

            <p className="text-gray-400 mt-8 leading-8">
              Tell us about your idea, business challenge,
              or digital transformation initiative.
              We'll help you design and build a scalable solution.
            </p>

            <div className="mt-12 space-y-4">

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-cyan-400" />
                Enterprise Software Development
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-cyan-400" />
                AI & Automation Solutions
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-cyan-400" />
                Cloud Infrastructure & DevOps
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-cyan-400" />
                Data Analytics Platforms
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
            "
          >

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full
                  bg-[#111827]
                  border
                  border-white/10
                  rounded-xl
                  px-5
                  py-4
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                  w-full
                  bg-[#111827]
                  border
                  border-white/10
                  rounded-xl
                  px-5
                  py-4
                "
              />

              <input
                type="text"
                placeholder="Company"
                className="
                  w-full
                  bg-[#111827]
                  border
                  border-white/10
                  rounded-xl
                  px-5
                  py-4
                "
              />

              <select
                className="
                  w-full
                  bg-[#111827]
                  border
                  border-white/10
                  rounded-xl
                  px-5
                  py-4
                "
              >
                <option>Project Type</option>
                <option>AI Solution</option>
                <option>Software Development</option>
                <option>Cloud Infrastructure</option>
                <option>Data Analytics</option>
              </select>

              <textarea
                rows="5"
                placeholder="Tell us about your project..."
                className="
                  w-full
                  bg-[#111827]
                  border
                  border-white/10
                  rounded-xl
                  px-5
                  py-4
                "
              />

              <button
                className="
                  w-full
                  py-4
                  rounded-xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  font-semibold
                "
              >
                Submit Inquiry
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactSection;