import {
  ArrowRight,
  ShoppingCart,
  Package,
  Tag,
  FileText,
  CheckCircle2,
} from "lucide-react";

const actions = [
  {
    id: 1,
    title: "Restock Inventory",
    description: "24 products have reached the minimum stock level.",
    priority: "High",
    icon: Package,
    color: "text-red-400",
    bg: "bg-red-500/10",
    button: "Restock",
  },
  {
    id: 2,
    title: "Launch Promotion",
    description: "Weekend sales campaign could increase revenue by 15%.",
    priority: "Medium",
    icon: Tag,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    button: "Create",
  },
  {
    id: 3,
    title: "Review Top Products",
    description: "Top-selling products need pricing optimization.",
    priority: "Medium",
    icon: ShoppingCart,
    color: "text-green-400",
    bg: "bg-green-500/10",
    button: "Review",
  },
  {
    id: 4,
    title: "Generate Weekly Report",
    description: "Prepare executive performance summary for management.",
    priority: "Low",
    icon: FileText,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    button: "Generate",
  },
];

const badge = {
  High: "bg-red-500/20 text-red-400",
  Medium: "bg-yellow-500/20 text-yellow-400",
  Low: "bg-green-500/20 text-green-400",
};

function RecommendedActions() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0B1220] p-6">

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h3 className="text-xl font-bold text-white">
            Recommended Actions
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            AI generated recommendations
          </p>

        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">

          <CheckCircle2
            className="text-cyan-400"
            size={22}
          />

        </div>

      </div>

      {/* Actions */}

      <div className="space-y-4">

        {actions.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.id}
              className="
                rounded-xl
                border
                border-white/5
                bg-[#111827]
                p-4
                transition-all
                duration-300
                hover:border-cyan-500/30
                hover:bg-[#162032]
              "
            >

              <div className="flex gap-4">

                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.bg}`}
                >

                  <Icon
                    size={20}
                    className={item.color}
                  />

                </div>

                <div className="flex-1">

                  <div className="flex items-center justify-between">

                    <h4 className="font-semibold text-white">
                      {item.title}
                    </h4>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${badge[item.priority]}`}
                    >
                      {item.priority}
                    </span>

                  </div>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">

                    <button
                      className="
                        rounded-lg
                        bg-cyan-500
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        text-white
                        transition
                        hover:bg-cyan-600
                      "
                    >
                      {item.button}
                    </button>

                    <button className="flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300">

                      Details

                      <ArrowRight size={16} />

                    </button>

                  </div>

                </div>

              </div>

            </div>

          );

        })}

      </div>

      {/* Summary */}

      <div className="mt-6 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-gray-300">
              Estimated Revenue Impact
            </p>

            <h4 className="mt-2 text-2xl font-bold text-white">
              +LKR 485K
            </h4>

          </div>

          <button
            className="
              rounded-xl
              bg-cyan-500
              px-5
              py-3
              font-semibold
              text-white
              transition
              hover:bg-cyan-600
            "
          >
            Apply All
          </button>

        </div>

      </div>

    </div>
  );
}

export default RecommendedActions;