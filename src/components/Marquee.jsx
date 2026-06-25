function Marquee() {
return (
  <section className="relative bg-black overflow-hidden py-5 border-y border-cyan-500/10">

    {/* Left Fade */}
    <div className="absolute left-0 top-0 z-10 h-full w-40 bg-gradient-to-r from-black to-transparent" />

    {/* Right Fade */}
    <div className="absolute right-0 top-0 z-10 h-full w-40 bg-gradient-to-l from-black to-transparent" />

    <div className="marquee">
      <div className="marquee-content">
        AI SOLUTIONS • CLOUD SERVICES • BUSINESS AUTOMATION •
        DATA ANALYTICS • SOFTWARE ENGINEERING • MACHINE LEARNING •
        AI SOLUTIONS • CLOUD SERVICES • BUSINESS AUTOMATION •
        DATA ANALYTICS • SOFTWARE ENGINEERING • MACHINE LEARNING •
      </div>
    </div>

  </section>
);
}

export default Marquee;