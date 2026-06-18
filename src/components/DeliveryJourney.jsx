function DeliveryJourney() {
  const steps = [
    {
      number: "01",
      title: "Understand Your Needs",
      desc: "We analyze your business challenges, goals, and technical requirements.",
    },
    {
      number: "02",
      title: "Plan Together",
      desc: "Define the roadmap, architecture and delivery strategy.",
    },
    {
      number: "03",
      title: "Build & Craft",
      desc: "Develop scalable, secure and high-performance solutions.",
    },
    {
      number: "04",
      title: "Test & Improve",
      desc: "Validate quality, performance and user experience.",
    },
    {
      number: "05",
      title: "Go Live",
      desc: "Deploy and monitor your solution with confidence.",
    },
  ];

  return (
    <section className="bg-[#07101f] py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
            Process
          </p>

          <h2 className="text-5xl font-bold">
            Our Delivery Journey
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">

          {steps.map((step) => (
            <div
              key={step.number}
              className="
                relative
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
                hover:border-cyan-400/40
                transition-all
              "
            >
              <div
                className="
                  text-5xl
                  font-black
                  text-cyan-400/30
                  mb-4
                "
              >
                {step.number}
              </div>

              <h3 className="text-xl font-bold mb-4">
                {step.title}
              </h3>

              <p className="text-gray-400 text-sm leading-7">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default DeliveryJourney;