import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

const data = [
  { name: "Beverages", value: 29 },
  { name: "Snacks", value: 21 },
  { name: "Household", value: 18 },
  { name: "Personal Care", value: 15 },
  { name: "Others", value: 17 },
];

const COLORS = [
  "#22D3EE",
  "#8B5CF6",
  "#22C55E",
  "#F59E0B",
  "#64748B",
];

function SalesCategory() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0B1220] p-5 sm:p-6">
      {/* Header */}

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white sm:text-xl">
          Sales by Category
        </h3>

        <p className="mt-1 text-sm text-gray-400">
          Revenue contribution
        </p>
      </div>

      {/* Chart */}

      <div className="h-[240px] sm:h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius="50%"
              outerRadius="72%"
              paddingAngle={3}
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                background: "#111827",
                border: "1px solid #334155",
                borderRadius: 12,
                color: "#fff",
              }}
              formatter={(value) => [`${value}%`, "Revenue"]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}

      <div className="mt-6 space-y-3">
        {data.map((item, index) => (
          <div
            key={item.name}
            className="flex items-center justify-between gap-3"
          >
            <div className="flex min-w-0 items-center gap-3">
              <div
                className="h-3 w-3 shrink-0 rounded-full"
                style={{
                  backgroundColor: COLORS[index],
                }}
              />

              <span className="truncate text-sm text-gray-300 sm:text-base">
                {item.name}
              </span>
            </div>

            <span className="shrink-0 font-semibold text-white">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SalesCategory;