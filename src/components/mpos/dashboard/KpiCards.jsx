import {
  ShoppingCart,
  Wallet,
  Receipt,
  Package,
  TrendingUp,
  Percent,
  Boxes,
  Activity,
} from "lucide-react";

const cards = [
  {
    title: "Total Sales",
    value: "LKR 8.75M",
    change: "+12.4%",
    icon: ShoppingCart,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Gross Profit",
    value: "LKR 2.34M",
    change: "+14.7%",
    icon: Wallet,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    title: "Transactions",
    value: "12,845",
    change: "+9.8%",
    icon: Receipt,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    title: "Units Sold",
    value: "26,540",
    change: "+11.6%",
    icon: Package,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    title: "Avg Basket",
    value: "LKR 682",
    change: "+5.2%",
    icon: TrendingUp,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  {
    title: "Gross Margin",
    value: "26.7%",
    change: "+1.8%",
    icon: Percent,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Inventory Value",
    value: "LKR 14.2M",
    change: "+3.5%",
    icon: Boxes,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    title: "Sell-through",
    value: "82%",
    change: "+6.4%",
    icon: Activity,
    color: "text-sky-400",
    bg: "bg-sky-500/10",
  },
];

function KpiCards() {
  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-4
        sm:gap-5
      "
    >
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="
              rounded-2xl
              border
              border-white/10
              bg-[#0B1220]
              p-5
              sm:p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-cyan-500/30
              hover:shadow-[0_0_30px_rgba(34,211,238,.12)]
            "
          >
            {/* Icon */}

            <div
              className={`
                mb-4
                flex
                h-11
                w-11
                sm:h-12
                sm:w-12
                items-center
                justify-center
                rounded-xl
                ${card.bg}
              `}
            >
              <Icon
                size={20}
                className={card.color}
              />
            </div>

            {/* Title */}

            <p className="text-sm text-gray-400">
              {card.title}
            </p>

            {/* Value */}

            <h3
              className="
                mt-2
                text-2xl
                sm:text-3xl
                font-bold
                text-white
                break-words
              "
            >
              {card.value}
            </h3>

            {/* Growth */}

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className={`${card.color} font-semibold`}>
                {card.change}
              </span>

              <span className="text-xs sm:text-sm text-gray-500">
                vs last week
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default KpiCards;