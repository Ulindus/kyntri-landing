import { Brain, Cloud, BarChart3, Zap, Code2 } from "lucide-react";

const icons = {
  ai: Brain,
  cloud: Cloud,
  analytics: BarChart3,
  automation: Zap,
  software: Code2,
};

function FloatingCard({ type, title, description, className }) {
  const Icon = icons[type];

  return (
    <div
      className={`
        absolute
        z-30
        bg-[#0f172a]/90
        backdrop-blur-xl
        border border-cyan-500/15
        rounded-2xl
        px-4 py-3
        flex items-center gap-3
        shadow-[0_0_20px_rgba(0,255,255,0.08)]
        hover:scale-105
        transition-all
        duration-300
        ${className}
      `}
    >
      {/* Icon */}
      <div
        className="
          w-10 h-10
          rounded-xl
          border border-cyan-500/30
          bg-cyan-500/10
          flex items-center justify-center
          shrink-0
        "
      >
        <Icon size={18} className="text-cyan-400" />
      </div>

      {/* Text */}
      <div>
        <h4 className="text-white font-semibold text-base leading-none">
          {title}
        </h4>

        <p className="text-gray-400 text-xs mt-1">
          {description}
        </p>
      </div>
    </div>
  );
}

export default FloatingCard;