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
    <div className="rounded-2xl border border-white/10 bg-[#0B1220] p-5 sm:p-6">
      {/* Header */}

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white sm:text-xl">
            Outlet Leaderboard
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            Top performing retail outlets
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-500/10">
          <Trophy
            size={22}
            className="text-yellow-400"
          />
        </div>
      </div>

      {/* Leaderboard */}

      <div className="space-y-4">
        {outlets.map((item) => (
          <div
            key={item.rank}
            className="
              rounded-xl
              bg-[#111827]
              p-4
              transition-all
              duration-300
              hover:bg-[#162032]
              hover:border-cyan-500/20
              border
              border-transparent
            "
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Left */}

              <div className="flex min-w-0 items-center gap-4">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-cyan-500/10
                    font-bold
                    text-cyan-400
                  "
                >
                  #{item.rank}
                </div>

                <div className="min-w-0">
                  <h4 className="truncate text-base font-semibold text-white sm:text-lg">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {item.sales}
                  </p>
                </div>
              </div>

              {/* Right */}

              <div
                className="
                  flex
                  w-fit
                  items-center
                  gap-2
                  rounded-lg
                  bg-green-500/10
                  px-3
                  py-2
                "
              >
                <TrendingUp
                  size={16}
                  className="text-green-400"
                />

                <span className="text-sm font-semibold text-green-400">
                  {item.growth}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}

      <div className="mt-6 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-300">
              Best Performing Outlet
            </p>

            <h4 className="mt-1 text-xl font-bold text-white">
              Colombo
            </h4>
          </div>

          <div className="text-left sm:text-right">
            <p className="text-sm text-gray-300">
              Weekly Growth
            </p>

            <h4 className="mt-1 text-lg font-bold text-green-400">
              +18%
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutletLeaderboard;