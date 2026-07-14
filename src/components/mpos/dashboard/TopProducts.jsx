import { ArrowUpRight } from "lucide-react";

const products = [
  {
    name: "Coca Cola 1L",
    sold: 1245,
    revenue: "LKR 245K",
    margin: "34%",
  },
  {
    name: "Anchor Milk 400g",
    sold: 1018,
    revenue: "LKR 221K",
    margin: "29%",
  },
  {
    name: "Munchee Biscuit",
    sold: 946,
    revenue: "LKR 181K",
    margin: "31%",
  },
  {
    name: "Signal Toothpaste",
    sold: 804,
    revenue: "LKR 159K",
    margin: "27%",
  },
  {
    name: "Sunlight Soap",
    sold: 775,
    revenue: "LKR 148K",
    margin: "25%",
  },
];

function TopProducts() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0B1220] p-5 sm:p-6">
      {/* Header */}

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white sm:text-xl">
            Top Selling Products
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            Best performing items this week
          </p>
        </div>

        <button
          className="
            w-full
            rounded-xl
            border
            border-cyan-500/20
            px-4
            py-2
            text-sm
            text-cyan-400
            transition
            hover:bg-cyan-500/10
            sm:w-auto
          "
        >
          View All
        </button>
      </div>

      {/* Mobile Cards */}

      <div className="space-y-4 lg:hidden">
        {products.map((item) => (
          <div
            key={item.name}
            className="
              rounded-xl
              border
              border-white/10
              bg-[#111827]
              p-4
              transition-all
              duration-300
              hover:border-cyan-500/30
              hover:bg-[#162032]
            "
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
                <ArrowUpRight
                  size={18}
                  className="text-cyan-400"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h4 className="break-words font-semibold text-white">
                  {item.name}
                </h4>

                <div className="mt-3 grid grid-cols-3 gap-3 text-sm">
                  <div>
                    <p className="text-gray-500">Sold</p>
                    <p className="font-semibold text-cyan-400">
                      {item.sold}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500">Revenue</p>
                    <p className="font-semibold text-white">
                      {item.revenue}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500">Margin</p>
                    <p className="font-semibold text-green-400">
                      {item.margin}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table */}

      <div className="hidden overflow-x-auto rounded-xl border border-white/10 lg:block">
        <table className="min-w-full">
          <thead className="bg-[#111827]">
            <tr>
              <th className="px-5 py-4 text-left text-sm font-medium text-gray-400">
                Product
              </th>

              <th className="px-5 py-4 text-right text-sm font-medium text-gray-400">
                Sold
              </th>

              <th className="px-5 py-4 text-right text-sm font-medium text-gray-400">
                Revenue
              </th>

              <th className="px-5 py-4 text-right text-sm font-medium text-gray-400">
                Margin
              </th>
            </tr>
          </thead>

          <tbody>
            {products.map((item) => (
              <tr
                key={item.name}
                className="border-t border-white/5 transition hover:bg-white/5"
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10">
                      <ArrowUpRight
                        size={18}
                        className="text-cyan-400"
                      />
                    </div>

                    <span className="font-medium text-white">
                      {item.name}
                    </span>
                  </div>
                </td>

                <td className="px-5 py-4 text-right font-medium text-cyan-400">
                  {item.sold}
                </td>

                <td className="px-5 py-4 text-right text-white">
                  {item.revenue}
                </td>

                <td className="px-5 py-4 text-right font-semibold text-green-400">
                  {item.margin}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary */}

      <div className="mt-6 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-300">
              Best Selling Product
            </p>

            <h4 className="mt-1 text-xl font-bold text-white">
              Coca Cola 1L
            </h4>
          </div>

          <div className="text-left sm:text-right">
            <p className="text-sm text-gray-300">
              Weekly Revenue
            </p>

            <h4 className="mt-1 text-2xl font-bold text-cyan-400">
              LKR 245K
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopProducts;