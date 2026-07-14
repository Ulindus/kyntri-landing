const products = [
  {
    name: "Coca Cola 1L",
    demand: 92,
    margin: 34,
  },
  {
    name: "Anchor Milk",
    demand: 80,
    margin: 28,
  },
  {
    name: "Munchee Biscuit",
    demand: 73,
    margin: 31,
  },
  {
    name: "Signal Toothpaste",
    demand: 62,
    margin: 26,
  },
];

function DemandVsMargin() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0B1220] p-5 sm:p-6">
      {/* Header */}

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white sm:text-xl">
          Demand vs Margin
        </h3>

        <p className="mt-1 text-sm text-gray-400">
          High demand & profitability opportunities
        </p>
      </div>

      {/* Products */}

      <div className="space-y-6">
        {products.map((item) => (
          <div
            key={item.name}
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
            {/* Top */}

            <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h4 className="break-words text-base font-semibold text-white">
                {item.name}
              </h4>

              <span className="w-fit rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-semibold text-cyan-400">
                {item.margin}% Margin
              </span>
            </div>

            {/* Progress */}

            <div className="relative h-3 overflow-hidden rounded-full bg-[#1F2937]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 transition-all duration-700"
                style={{
                  width: `${item.demand}%`,
                }}
              />
            </div>

            {/* Footer */}

            <div className="mt-3 flex items-center justify-between text-xs sm:text-sm">
              <span className="text-gray-500">
                Demand
                <span className="ml-1 font-semibold text-white">
                  {item.demand}%
                </span>
              </span>

              <span className="text-gray-500">
                Margin
                <span className="ml-1 font-semibold text-cyan-400">
                  {item.margin}%
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}

      <div className="mt-6 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-300">
              Highest Demand Product
            </p>

            <h4 className="mt-1 text-xl font-bold text-white">
              Coca Cola 1L
            </h4>
          </div>

          <div className="text-left sm:text-right">
            <p className="text-sm text-gray-300">
              Demand Score
            </p>

            <h4 className="mt-1 text-2xl font-bold text-cyan-400">
              92%
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemandVsMargin;