import { useState, useEffect } from "react";
import robot from "../assets/robot.png";
import FloatingCard from "./FloatingCard";

function Hero() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e) => {
    if (!isDesktop) return;

    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - rect.width / 2) / 12;
    const y = (e.clientY - rect.height / 2) / 12;

    setMousePosition({ x, y });
  };

  return (
    <section
      onMouseMove={isDesktop ? handleMouseMove : undefined}
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#071126]
      pt-24
      pb-16
      flex
      items-center
    "
    >
      {/* Animated Grid */}
      <div className="animated-grid absolute inset-0" />

      {/* Glow */}
      <div className="absolute top-0 right-0 w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] lg:w-[700px] lg:h-[700px] bg-cyan-500/10 blur-[180px]" />

      <div className="absolute bottom-0 left-0 w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] bg-violet-500/10 blur-[150px]" />

      {/* Glow Orbs */}
      <div className="glow-orb orb-1" />
      <div className="glow-orb orb-2" />
      <div className="glow-orb orb-3" />

      {/* Tech Symbols */}
      <div className="hidden lg:block absolute top-20 right-40 text-cyan-400/20 text-5xl font-bold animate-symbol-float">
        AI
      </div>

      <div className="hidden lg:block absolute top-32 right-72 text-cyan-400/20 text-3xl animate-symbol-float-delayed">
        {"</>"}
      </div>

      <div className="hidden lg:block absolute bottom-28 right-96 text-cyan-400/20 text-3xl animate-symbol-float">
        []
      </div>

      <div className="hidden lg:block absolute bottom-40 right-20 text-cyan-400/20 text-4xl animate-symbol-float-delayed">
        {"{}"}
      </div>

      <div className="hidden lg:block absolute top-[55%] right-56 text-cyan-400/20 text-4xl animate-symbol-float">
        ML
      </div>

      <div
        className="
        relative
        z-10
        mx-auto
        grid
        max-w-7xl
        grid-cols-1
        lg:grid-cols-2
        gap-14
        items-center
        px-5
        sm:px-8
        lg:px-10
      "
      >
        {/* LEFT SIDE */}

        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-[10px] sm:text-xs tracking-[3px] uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            Smart Solutions • Intelligent Future
          </span>

          <h1
            className="
            mt-8
            font-bold
            leading-tight
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
          "
          >
            Engineering
            <br />

            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Intelligent
            </span>

            <br />

            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Software
            </span>

            <br />

            For Modern

            <br />

            Businesses
          </h1>

          <p
            className="
            mt-6
            max-w-xl
            text-base
            sm:text-lg
            leading-relaxed
            text-gray-400
            mx-auto
            lg:mx-0
          "
          >
            From bespoke backend architectures to production-ready cloud
            infrastructure and intelligent software solutions.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-cyan-500 text-white shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:scale-105 transition">
              Start a Project →
            </button>

            <button className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/10 text-white hover:border-cyan-400 transition">
              See our work
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
                <div
          className="
          relative
          w-full
          h-[360px]
          sm:h-[480px]
          lg:h-[650px]
          flex
          items-center
          justify-center
          lg:justify-end
        "
        >
          {/* Robot Glow */}
          <div className="absolute w-[180px] h-[180px] bg-cyan-400/5 blur-[60px] rounded-full" />

          {/* Particles */}
          <div className="particle particle-1" />
          <div className="particle particle-2" />
          <div className="particle particle-3" />
          <div className="particle particle-4" />
          <div className="particle particle-5" />

          {/* Floating Cards - Desktop Only */}

          <FloatingCard
            type="ai"
            title="AI Solutions"
            description="Predict, analyze"
            className="hidden lg:block left-24 top-4"
          />

          <FloatingCard
            type="software"
            title="Software Engineering"
            description="Built to scale"
            className="hidden lg:block -right-24 top-32"
          />

          <FloatingCard
            type="analytics"
            title="Data Analytics"
            description="Data-driven"
            className="hidden lg:block -left-16 top-60"
          />

          <FloatingCard
            type="automation"
            title="Automation"
            description="Smart workflows"
            className="hidden lg:block left-24 bottom-10"
          />

          <FloatingCard
            type="cloud"
            title="Cloud"
            description="Secure & reliable"
            className="hidden lg:block right-5 bottom-20"
          />

          {/* Robot */}

          <div className="animate-float perspective-[1000px]">
            <img
              src={robot}
              alt="AI Robot"
              style={{
                transform: isDesktop
                  ? `
                    translate(${mousePosition.x}px, ${mousePosition.y}px)
                    rotateY(${mousePosition.x * 1.2}deg)
                    rotateX(${-mousePosition.y * 0.8}deg)
                  `
                  : "none",
              }}
              className="
                w-[180px]
                sm:w-[240px]
                md:w-[300px]
                lg:w-[340px]
                relative
                z-20
                transition-transform
                duration-500
                ease-out
                drop-shadow-[0_0_15px_rgba(34,211,238,0.15)]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;