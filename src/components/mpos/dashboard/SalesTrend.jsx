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
    <div className="rounded-2xl border border-white/10 bg-[#0B1220] p-5 sm:p-6">
      {/* Header */}

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white sm:text-xl">
            Sales Trend
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            Revenue vs Gross Profit
          </p>
        </div>

        <div className="flex w-full rounded-xl bg-[#111827] p-1 sm:w-auto">
          <button className="flex-1 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-white sm:flex-none">
            Revenue
          </button>

          <button className="flex-1 px-4 py-2 text-sm text-gray-400 sm:flex-none">
            Profit
          </button>
        </div>
      </div>

      {/* Chart */}

      <div className="h-[260px] sm:h-[320px] lg:h-[360px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >
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
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke="#94A3B8"
              tick={{ fontSize: 11 }}
              tickLine={false}
              axisLine={false}
              width={42}
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
              strokeWidth={3}
              fill="url(#salesGradient)"
            />

            <Area
              type="monotone"
              dataKey="profit"
              stroke="#8B5CF6"
              strokeWidth={3}
              fill="url(#profitGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SalesTrend;