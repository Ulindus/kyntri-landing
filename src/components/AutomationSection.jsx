import chartImg from "../assets/chart.png";
import robotImg from "../assets/robot.png";

function AutomationSection() {
  return (
    <section className="bg-[#6b7cff] py-12 overflow-hidden">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 items-center">

          {/* LEFT */}
          <div>

            <h2 className="text-5xl font-bold text-white">
              KYNTRI'S AI
              <br />
              WORKFLOW
              <br />
              AUTOMATION
              <br />
              SOLUTION
            </h2>

            <p className="mt-6 text-white/80 text-lg">
              Don't end up with a bloated set of AI point solutions.
              Our platform architecture helps you solve any GTM use case.
            </p>

            <div className="mt-12">
              <img
                src={chartImg}
                alt="Chart"
                className="w-[350px]"
              />
            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <img
  src={robotImg}
  alt="Robot"
  className="
    w-[500px]
    mx-auto
  "
/>
          </div>

        </div>

        {/* Logo Strip */}
        <div className="
          mt-10
          bg-white
          rounded-lg
          p-6
          flex
          justify-around
          items-center
          flex-wrap
          gap-4
        ">

          <span className="text-gray-600 font-semibold">
            OpenAI
          </span>

          <span className="text-gray-600 font-semibold">
            Anthropic
          </span>

          <span className="text-gray-600 font-semibold">
            Gemini
          </span>

          <span className="text-gray-600 font-semibold">
            Perplexity
          </span>

        </div>

      </div>

    </section>
  );
}

export default AutomationSection;