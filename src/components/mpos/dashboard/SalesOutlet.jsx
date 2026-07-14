import { TrendingUp } from "lucide-react";

const outlets = [
  {
    name: "Colombo",
    revenue: "LKR 3.45M",
    growth: "+18%",
    value: 92,
  },
  {
    name: "Kandy",
    revenue: "LKR 2.21M",
    growth: "+11%",
    value: 73,
  },
  {
    name: "Negombo",
    revenue: "LKR 1.58M",
    growth: "+8%",
    value: 58,
  },
  {
    name: "Galle",
    revenue: "LKR 1.12M",
    growth: "+5%",
    value: 44,
  },
  {
    name: "Jaffna",
    revenue: "LKR 860K",
    growth: "+3%",
    value: 35,
  },
];

function SalesOutlet() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0B1220] p-5 sm:p-6">
      {/* Header */}

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white sm:text-xl">
          Sales by Outlet
        </h3>

        <p className="mt-1 text-sm text-gray-400">
          Branch performance comparison
        </p>
      </div>

      {/* Outlets */}

      <div className="space-y-5 sm:space-y-6">
        {outlets.map((item) => (
          <div key={item.name}>
            {/* Top Row */}

            <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <h4 className="truncate text-base font-semibold text-white sm:text-lg">
                  {item.name}
                </h4>

                <p className="text-sm text-gray-500">
                  {item.revenue}
                </p>
              </div>

              <div className="flex items-center gap-1 self-start rounded-lg bg-green-500/10 px-3 py-1 sm:self-auto">
                <TrendingUp
                  size={16}
                  className="text-green-400"
                />

                <span className="text-sm font-semibold text-green-400">
                  {item.growth}
                </span>
              </div>
            </div>

            {/* Progress */}

            <div className="relative h-3 overflow-hidden rounded-full bg-[#1F2937]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 transition-all duration-700"
                style={{
                  width: `${item.value}%`,
                }}
              />
            </div>

            {/* Bottom Labels */}

            <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
              <span>0%</span>

              <span className="font-medium text-cyan-400">
                {item.value}%
              </span>

              <span>100%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SalesOutlet;