import GymCanvas from "./GymCanvas";
import chart from "../assets/chart.png"; // chart.png assets folder එකේ නම්

function LiftlySection() {
  return (
    <section className="relative bg-[#020817] py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <p className="text-cyan-400 uppercase tracking-[4px] mb-6">
              Featured Platform
            </p>

            <h2 className="text-5xl lg:text-7xl font-black leading-none">
              THE ALL-IN-ONE
              <br />
              <span className="text-cyan-400">PLATFORM</span>
              <br />
              FOR YOUR GYM
            </h2>

            <p className="text-gray-400 text-lg mt-8 max-w-xl leading-8">
              Streamline operations, engage members,
              manage subscriptions, and grow your fitness
              business from one intelligent platform.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {["Members", "Bookings", "Revenue", "Attendance"].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20"
                >
                  {item}
                </span>
              ))}
            </div>

           
          </div>

          {/* RIGHT */}
          <div className="relative h-[720px] flex items-center justify-center">

            <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[150px]" />

            <div className="relative w-full h-full">
              <GymCanvas />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default LiftlySection;