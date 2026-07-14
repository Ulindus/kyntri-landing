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
    <div className="rounded-2xl border border-white/10 bg-[#0B1220] p-6">

      <div className="mb-6">

        <h3 className="text-xl font-semibold text-white">
          Demand vs Margin
        </h3>

        <p className="mt-1 text-sm text-gray-400">
          High demand & profitability opportunities
        </p>

      </div>

      <div className="space-y-6">

        {products.map((item) => (

          <div key={item.name}>

            <div className="mb-2 flex items-center justify-between">

              <span className="text-white">
                {item.name}
              </span>

              <span className="text-cyan-400">
                {item.margin}% Margin
              </span>

            </div>

            <div className="h-2 rounded-full bg-[#1F2937]">

              <div
                className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                style={{
                  width: `${item.demand}%`,
                }}
              />

            </div>

            <div className="mt-2 flex justify-between text-xs text-gray-500">

              <span>
                Demand {item.demand}%
              </span>

              <span>
                Margin {item.margin}%
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default DemandVsMargin;