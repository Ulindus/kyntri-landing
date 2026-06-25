const items = [
  "AI SOLUTIONS",
  "CLOUD SERVICES",
  "BUSINESS AUTOMATION",
  "DATA ANALYTICS",
  "SOFTWARE ENGINEERING",
  "MACHINE LEARNING",
];

function Marquee() {
  return (
    <section className="relative overflow-hidden bg-black border-y border-cyan-500/10 py-4">

      <div className="marquee-track">

        {[...items, ...items].map((item, index) => (
          <span key={index} className="marquee-item">
            {item}
          </span>
        ))}

      </div>

    </section>
  );
}

export default Marquee;