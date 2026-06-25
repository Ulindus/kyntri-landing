import { useState } from "react";
import robot from "../assets/robot.png";
import FloatingCard from "./FloatingCard";

function Hero() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - rect.width / 2) / 12;
    const y = (e.clientY - rect.height / 2) / 12;

    setMousePosition({ x, y });
  };

  return (
    <section
  onMouseMove={handleMouseMove}
  className="
    relative
    min-h-screen
    pt-24
    bg-[#071126]
    overflow-hidden
    flex
    items-center
  "
>
      {/* Grid Background */}
      {/* Animated Grid */}
<div className="animated-grid absolute inset-0" />

      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-cyan-500/10 blur-[180px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/10 blur-[150px]" />
{/* Animated Glow Orbs */}

<div className="glow-orb orb-1" />
<div className="glow-orb orb-2" />
<div className="glow-orb orb-3" />
      {/* Tech Symbols */}
      <div className="absolute top-20 right-40 text-cyan-400/20 text-5xl font-bold animate-symbol-float">
  AI
</div>

<div className="absolute top-32 right-72 text-cyan-400/20 text-3xl animate-symbol-float-delayed">
  {"</>"}
</div>

<div className="absolute bottom-28 right-96 text-cyan-400/20 text-3xl animate-symbol-float">
  []
</div>

<div className="absolute bottom-40 right-20 text-cyan-400/20 text-4xl animate-symbol-float-delayed">
  {"{}"}
</div>

<div className="absolute top-[55%] right-56 text-cyan-400/20 text-4xl animate-symbol-float">
  ML
</div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* LEFT SIDE */}
        <div>
          <span className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-xs tracking-[4px] uppercase">
  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
  Smart Solutions • Intelligent Future
</span>

          <h1 className="text-6xl lg:text-7xl font-bold leading-none">
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

          <p className="mt-8 text-gray-400 text-lg max-w-xl leading-relaxed">
            From bespoke backend architectures to production-ready cloud
            infrastructure and intelligent software solutions.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            
            <button className="px-8 py-4 rounded-xl bg-cyan-500 text-white shadow-[0_0_30px_rgba(0,255,255,0.3)]">
  Start a Project →
</button>

<button className="px-8 py-4 rounded-xl border border-white/10 text-white">
  See our work
</button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative w-full h-[650px] flex items-center justify-end pr-10">
          {/* Robot Glow */}
          <div className="absolute w-[550px] h-[550px] bg-cyan-500/30 blur-[160px] rounded-full" />
{/* Floating Particles */}

<div className="particle particle-1" />
<div className="particle particle-2" />
<div className="particle particle-3" />
<div className="particle particle-4" />
<div className="particle particle-5" />
          {/* Floating Cards */}
          <FloatingCard
            type="ai"
            title="AI Solutions"
            description="Predict, analyze"
            className="left-24 top-4"
          />

          <FloatingCard
            type="software"
            title="Software Engineering"
            description="Built to scale"
            className="-right-25 top-32"
          />

          <FloatingCard
            type="analytics"
            title="Data Analytics"
            description="Data-driven"
            className="-left-16 top-60"
          />

          <FloatingCard
            type="automation"
            title="Automation"
            description="Smart workflows"
            className="left-24 bottom-10"
          />

          <FloatingCard
            type="cloud"
            title="Cloud"
            description="Secure & reliable"
            className="right-5 bottom-20"
          />

          {/* Robot */}
          <div className="animate-float perspective-[1000px]">
            <img
              src={robot}
              alt="AI Robot"
              style={{
                transform: `
                  translate(${mousePosition.x}px, ${mousePosition.y}px)
                  rotateY(${mousePosition.x * 1.2}deg)
rotateX(${-mousePosition.y * 0.8}deg)
                `,
              }}
              className="
  w-[250px]
  md:w-[300px]
  lg:w-[340px]
  relative
  z-20
  transition-transform
  duration-500
  ease-out
  drop-shadow-[0_0_80px_rgba(0,255,255,0.45)]
"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;