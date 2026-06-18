import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Ticket,
  Wrench,
  Bot,
} from "lucide-react";

function ProductCard({ product }) {
  const getIcon = () => {
    switch (product.icon) {
      case "cart":
        return <ShoppingCart size={28} />;

      case "ticket":
        return <Ticket size={28} />;

      case "wrench":
        return <Wrench size={28} />;

      case "bot":
        return <Bot size={28} />;

      default:
        return <Bot size={28} />;
    }
  };

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        bg-gradient-to-br
        from-[#1b2235]
        via-[#182235]
        to-[#131a29]
        border
        border-white/10
        p-10
        min-h-[320px]
        hover:-translate-y-2
        hover:scale-[1.02]
        transition-all
        duration-500
        hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]
      "
    >
      {/* Top Gradient Line */}
      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-[3px]
          bg-gradient-to-r
          from-cyan-400
          via-purple-500
          to-pink-500
        "
      />

      {/* Header */}
      <div className="flex items-center gap-5 mb-8">
        <div
          className="
            w-16
            h-16
            rounded-2xl
            bg-cyan-500/10
            border
            border-cyan-500/20
            flex
            items-center
            justify-center
            text-cyan-400
            shadow-[0_0_25px_rgba(34,211,238,0.2)]
            hover:scale-110
            transition-all
            duration-300
          "
        >
          {getIcon()}
        </div>

        <h3
          className="
            text-2xl
            lg:text-[38px]
            font-bold
            leading-tight
          "
        >
          {product.title}
        </h3>
      </div>

      {/* Description */}
      <p
        className="
          text-gray-300
          text-lg
          leading-8
          mb-10
        "
      >
        {product.description}
      </p>

      {/* Features */}
      <h4
        className="
          text-white
          font-semibold
          mb-5
        "
      >
        Key Features
      </h4>

      <div className="flex flex-wrap gap-3 mb-10">
        {product.features.map((feature) => (
          <span
            key={feature}
            className="
              px-4
              py-2
              rounded-full
              text-xs
              border
              border-white/10
              bg-white/5
              text-gray-200
              hover:bg-cyan-500/20
              hover:text-cyan-300
              transition-all
              cursor-pointer
            "
          >
            {feature}
          </span>
        ))}
      </div>

      {/* Learn More Button */}
      <Link to={product.link}>
        <button
          className="
            px-8
            py-3
            rounded-xl
            font-semibold
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            text-white
            shadow-lg
            shadow-cyan-500/20
            hover:scale-105
            transition-all
          "
        >
          Learn More
        </button>
      </Link>
    </div>
  );
}

export default ProductCard;