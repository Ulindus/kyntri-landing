function LiftlySection() {
  return (
    <section className="bg-[#020817] py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>

            <p className="text-cyan-400 uppercase tracking-[4px] mb-6">
              Featured Platform
            </p>

            <h2 className="text-5xl lg:text-7xl font-black leading-none">
              THE ALL-IN-ONE
              <br />

              <span className="text-cyan-400">
                PLATFORM
              </span>

              <br />

              FOR YOUR GYM
            </h2>

            <p className="text-gray-400 text-lg mt-8 max-w-xl leading-8">
              Streamline operations, engage members,
              manage subscriptions, and grow your
              fitness business from a single
              intelligent platform.
            </p>

            {/* FEATURES */}

            <div className="flex flex-wrap gap-3 mt-8">

              <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                Members
              </span>

              <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                Bookings
              </span>

              <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                Revenue
              </span>

              <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                Attendance
              </span>

            </div>

            {/* CHART */}

            <div
              className="
                mt-12
                p-6
                rounded-3xl
                bg-gradient-to-br
                from-[#1b2235]
                to-[#131a29]
                border
                border-white/10
              "
            >
              <img
                src="/chart.png"
                alt="analytics chart"
                className="w-[350px] mx-auto"
              />
            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="relative">

            <div
              className="
                absolute
                inset-0
                bg-cyan-500/20
                blur-[120px]
              "
            />

            <img
              src="/gym-robot.png"
              alt="Liftly Platform"
              className="
                relative
                w-full
                max-w-[650px]
                mx-auto
                hover:scale-105
                transition-all
                duration-500
              "
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default LiftlySection;