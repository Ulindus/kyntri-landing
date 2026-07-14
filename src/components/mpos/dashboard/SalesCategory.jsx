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
    <div className="rounded-2xl border border-white/10 bg-[#0B1220] p-6">

      <div className="mb-6">

        <h3 className="text-xl font-semibold text-white">
          Sales by Category
        </h3>

        <p className="mt-1 text-sm text-gray-400">
          Revenue contribution
        </p>

      </div>

      <div className="h-[260px]">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              innerRadius={65}
              outerRadius={95}
              paddingAngle={3}
              dataKey="value"
            >

              {data.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index]}
                />
              ))}

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

      <div className="space-y-3">

        {data.map((item, index) => (

          <div
            key={item.name}
            className="flex items-center justify-between"
          >

            <div className="flex items-center gap-3">

              <div
                className="h-3 w-3 rounded-full"
                style={{
                  backgroundColor: COLORS[index],
                }}
              />

              <span className="text-gray-300">
                {item.name}
              </span>

            </div>

            <span className="font-semibold text-white">
              {item.value}%
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default SalesCategory;