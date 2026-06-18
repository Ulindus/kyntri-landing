import ServiceCard from "./ServiceCard";
import { services } from "../data/services";

function Services() {
  return (
    <section className="bg-[#020817] py-24">
      <div className="max-w-7xl mx-auto px-8">

        <div className="mb-20">
          <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-6">
            What We Do
          </p>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
              End-to-End
              <br />
              <span className="text-cyan-400">
                Technology Services
              </span>
            </h2>

            <p className="text-gray-400 max-w-md text-lg">
              We combine deep technical expertise
              with pragmatic engineering to deliver
              solutions that are built to last.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;