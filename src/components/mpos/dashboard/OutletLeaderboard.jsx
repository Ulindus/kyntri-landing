import { Trophy, TrendingUp } from "lucide-react";

const outlets = [
  {
    name: "Colombo",
    sales: "LKR 3.45M",
    growth: "+18%",
    rank: 1,
  },
  {
    name: "Kandy",
    sales: "LKR 2.21M",
    growth: "+11%",
    rank: 2,
  },
  {
    name: "Negombo",
    sales: "LKR 1.58M",
    growth: "+8%",
    rank: 3,
  },
  {
    name: "Galle",
    sales: "LKR 1.12M",
    growth: "+5%",
    rank: 4,
  },
];

function OutletLeaderboard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0B1220] p-6">

      <div className="mb-6 flex items-center justify-between">

        <h3 className="text-xl font-semibold text-white">
          Outlet Leaderboard
        </h3>

        <Trophy className="text-yellow-400" />

      </div>

      <div className="space-y-4">

        {outlets.map((item) => (

          <div
            key={item.rank}
            className="flex items-center justify-between rounded-xl bg-[#111827] p-4"
          >

            <div className="flex items-center gap-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 font-bold text-cyan-400">
                {item.rank}
              </div>

              <div>

                <h4 className="font-semibold text-white">
                  {item.name}
                </h4>

                <p className="text-sm text-gray-500">
                  {item.sales}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-2 text-green-400">

              <TrendingUp size={16} />

              {item.growth}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default OutletLeaderboard;