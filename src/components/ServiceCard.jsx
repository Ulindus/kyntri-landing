function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div
      className="
      relative
      overflow-hidden
      bg-gradient-to-b
      from-[#091426]
      to-[#07111f]
      border
      border-[#12253d]
      rounded-3xl
      p-10
      min-h-[420px]
      hover:-translate-y-3
      hover:border-cyan-400/60
      hover:shadow-[0_0_50px_rgba(0,255,255,0.15)]
      transition-all
      duration-500
      group
      "
    >
      {/* Animated Top Line */}
      <div
        className="
        absolute
        top-0
        left-[-100%]
        w-full
        h-[2px]
        bg-gradient-to-r
        from-transparent
        via-cyan-400
        to-transparent
        group-hover:left-[100%]
        transition-all
        duration-1000
        "
      />

      {/* Glow Overlay */}
      <div
        className="
        absolute
        inset-0
        opacity-0
        group-hover:opacity-100
        bg-gradient-to-br
        from-cyan-500/5
        via-transparent
        to-blue-500/5
        transition-all
        duration-500
        "
      />

      {/* Service Number */}
      <span
        className="
        absolute
        top-6
        right-6
        text-cyan-500/20
        text-5xl
        font-light
        group-hover:text-cyan-400/40
        transition-all
        duration-500
        "
      >
        {service.id}
      </span>

      {/* Icon */}
      <div
        className="
        relative
        z-10
        w-16
        h-16
        rounded-2xl
        border
        border-cyan-500/20
        bg-cyan-500/5
        flex
        items-center
        justify-center
        mb-8
        shadow-[0_0_20px_rgba(0,255,255,0.08)]
        group-hover:scale-110
        group-hover:bg-cyan-500/10
        group-hover:shadow-[0_0_35px_rgba(0,255,255,0.35)]
        transition-all
        duration-500
        "
      >
        <Icon
          size={30}
          className="
          text-cyan-400
          drop-shadow-[0_0_10px_#00ffff]
          group-hover:rotate-12
          transition-all
          duration-500
          "
        />
      </div>

      {/* Title */}
      <h3
        className="
        relative
        z-10
        text-3xl
        font-bold
        text-white
        mb-6
        "
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="
        relative
        z-10
        text-gray-400
        leading-8
        mb-8
        "
      >
        {service.description}
      </p>

      {/* Technologies */}
      <div className="relative z-10 flex flex-wrap gap-3">
        {service.technologies.map((tech) => (
          <span
            key={tech}
            className="
            px-4
            py-2
            rounded-xl
            border
            border-cyan-500/20
            bg-cyan-500/5
            text-cyan-300
            text-xs
            font-medium
            hover:bg-cyan-500
            hover:text-black
            hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]
            transition-all
            duration-300
            cursor-pointer
            "
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Bottom Glow */}
      <div
        className="
        absolute
        bottom-0
        left-0
        w-full
        h-24
        bg-gradient-to-t
        from-cyan-500/5
        to-transparent
        opacity-0
        group-hover:opacity-100
        transition-all
        duration-500
        "
      />
    </div>
  );
}

export default ServiceCard;