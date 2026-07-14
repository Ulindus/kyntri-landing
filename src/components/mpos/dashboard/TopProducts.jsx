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
    <div className="rounded-2xl border border-white/10 bg-[#0B1220] p-6">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h3 className="text-xl font-semibold text-white">
            Top Selling Products
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            Best performing items this week
          </p>

        </div>

        <button className="rounded-xl border border-cyan-500/20 px-4 py-2 text-sm text-cyan-400 transition hover:bg-cyan-500/10">
          View All
        </button>

      </div>

      <div className="overflow-hidden rounded-xl border border-white/10">

        <table className="w-full">

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

                <td className="px-5 py-4 text-right text-cyan-400">
                  {item.sold}
                </td>

                <td className="px-5 py-4 text-right text-white">
                  {item.revenue}
                </td>

                <td className="px-5 py-4 text-right text-green-400">
                  {item.margin}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default TopProducts;