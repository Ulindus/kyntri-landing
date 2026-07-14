import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", revenue: 420000, profit: 165000 },
  { month: "Feb", revenue: 510000, profit: 198000 },
  { month: "Mar", revenue: 470000, profit: 186000 },
  { month: "Apr", revenue: 620000, profit: 245000 },
  { month: "May", revenue: 760000, profit: 305000 },
  { month: "Jun", revenue: 710000, profit: 288000 },
  { month: "Jul", revenue: 890000, profit: 362000 },
];

function SalesTrend() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0B1220] p-6">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h3 className="text-xl font-semibold text-white">
            Sales Trend
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            Revenue vs Gross Profit
          </p>

        </div>

        <div className="flex rounded-xl bg-[#111827] p-1">

          <button className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-white">
            Revenue
          </button>

          <button className="px-4 py-2 text-sm text-gray-400">
            Profit
          </button>

        </div>

      </div>

      <div className="h-[320px]">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="salesGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="0%"
                  stopColor="#22D3EE"
                  stopOpacity={0.35}
                />

                <stop
                  offset="100%"
                  stopColor="#22D3EE"
                  stopOpacity={0}
                />

              </linearGradient>

              <linearGradient
                id="profitGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="0%"
                  stopColor="#8B5CF6"
                  stopOpacity={0.25}
                />

                <stop
                  offset="100%"
                  stopColor="#8B5CF6"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              stroke="#1F2937"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              stroke="#94A3B8"
            />

            <YAxis
              stroke="#94A3B8"
            />

            <Tooltip
              contentStyle={{
                background: "#111827",
                border: "1px solid #334155",
                borderRadius: 12,
                color: "#fff",
              }}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#22D3EE"
              strokeWidth={4}
              fill="url(#salesGradient)"
            />

            <Area
              type="monotone"
              dataKey="profit"
              stroke="#8B5CF6"
              strokeWidth={4}
              fill="url(#profitGradient)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default SalesTrend;