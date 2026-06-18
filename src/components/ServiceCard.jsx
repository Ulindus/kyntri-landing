function ServiceCard({ service }) {
  const Icon = service.icon;
<div
  className="
    w-16
    h-16
    border
    border-cyan-900
    bg-cyan-500/5
    flex
    items-center
    justify-center
    mb-8
    rounded-md
  "
>
  <Icon
    size={30}
    className="
      text-cyan-400
      drop-shadow-[0_0_10px_#00ffff]
    "
  />
</div>
  return (
    <div
      className="
      bg-[#07111f]
      border
      border-[#12253d]
      p-10
      min-h-[280px]
      relative
      hover:border-cyan-400
      hover:bg-[#071625]
      hover:shadow-[0_0_25px_rgba(0,255,255,0.18)]
      transition-all
      duration-300
      "
    >
      <span className="absolute top-6 right-6 text-gray-600 text-3xl">
        {service.id}
      </span>

      {/* Icon */}
      <div
        className="
        w-16
        h-16
        border
        border-cyan-900
        bg-cyan-500/5
        flex
        items-center
        justify-center
        mb-8
        shadow-[0_0_20px_rgba(0,255,255,0.08)]
        "
      >
        <Icon
          size={28}
          className="
          text-cyan-400
          drop-shadow-[0_0_8px_#00ffff]
          "
        />
      </div>

      <h3 className="text-3xl font-bold mb-6">
        {service.title}
      </h3>

      <p className="text-gray-400 leading-8 mb-8">
        {service.description}
      </p>

      <div className="flex flex-wrap gap-3">
        {service.technologies.map((tech) => (
          <span
            key={tech}
            className="
            bg-cyan-950/40
            border
            border-cyan-800
            text-cyan-400
            text-xs
            px-3
            py-2
            hover:bg-cyan-500
            hover:text-black
            cursor-pointer
            transition-all
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ServiceCard;