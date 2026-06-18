
function Hero() {
  return (
    <section className="bg-[#071126] py-24">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">

        <div>

          <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 text-xs">
            TECHNOLOGY SOLUTIONS PARTNER
          </span>

          <h1 className="text-6xl font-bold mt-8">
            Engineering
            Systems
            That
            <span className="text-cyan-400"> Scale.</span>
          </h1>

          <p className="mt-6 text-gray-300">
            From bespoke backend architectures to
            production-ready cloud infrastructure.
          </p>

          <button className="mt-8 bg-cyan-500 px-6 py-3 rounded">
            Get Started
          </button>

        </div>

        <div className="flex justify-center items-center">

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            alt=""
            className="rounded-xl"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;