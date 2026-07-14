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
    <div className="rounded-2xl border border-white/10 bg-[#0B1220] p-6">

      <div className="mb-6">

        <h3 className="text-xl font-semibold text-white">
          Sales by Outlet
        </h3>

        <p className="mt-1 text-sm text-gray-400">
          Branch performance comparison
        </p>

      </div>

      <div className="space-y-6">

        {outlets.map((item) => (

          <div key={item.name}>

            <div className="mb-2 flex items-center justify-between">

              <div>

                <h4 className="font-semibold text-white">
                  {item.name}
                </h4>

                <p className="text-sm text-gray-500">
                  {item.revenue}
                </p>

              </div>

              <div className="flex items-center gap-1 text-green-400">

                <TrendingUp size={16} />

                <span className="text-sm font-semibold">
                  {item.growth}
                </span>

              </div>

            </div>

            <div className="h-3 rounded-full bg-[#1F2937]">

              <div
                className="h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                style={{
                  width: `${item.value}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default SalesOutlet;