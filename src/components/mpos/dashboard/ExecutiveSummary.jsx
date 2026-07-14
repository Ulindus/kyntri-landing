import {
  TrendingUp,
  ShoppingBag,
  Package,
  Store,
} from "lucide-react";

const summary = [
  {
    title: "Best Category",
    value: "Beverages",
    sub: "29% of total sales",
    icon: ShoppingBag,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Top Outlet",
    value: "Colombo",
    sub: "LKR 3.45M Revenue",
    icon: Store,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    title: "Top Product",
    value: "Coca Cola 1L",
    sub: "1,245 Units Sold",
    icon: Package,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
];

function ExecutiveSummary() {
  return (
    <div className="mt-6 rounded-2xl border border-white/10 bg-[#0B1220] p-6">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Executive Summary
          </h2>

          <p className="mt-2 text-gray-400">
            AI generated weekly business overview.
          </p>

        </div>

        <button className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white hover:bg-cyan-600">
          View Report
        </button>

      </div>

      <div className="mt-8 rounded-2xl bg-[#111827] p-6">

        <div className="flex items-start gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10">

            <TrendingUp
              className="text-cyan-400"
              size={28}
            />

          </div>

          <div>

            <h3 className="text-xl font-semibold text-white">
              Weekly Performance
            </h3>

            <p className="mt-3 max-w-3xl leading-8 text-gray-400">
              Revenue increased by
              <span className="mx-1 font-semibold text-green-400">
                12.4%
              </span>
              compared with last week.

              Beverage sales remain the strongest
              category while Colombo continues to
              outperform every other outlet.

              Inventory health remains stable with
              only 24 critical low-stock items.
            </p>

          </div>

        </div>

      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">

        {summary.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="rounded-2xl bg-[#111827] p-5"
            >

              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${item.bg}`}
              >

                <Icon
                  className={item.color}
                  size={22}
                />

              </div>

              <p className="text-sm text-gray-400">
                {item.title}
              </p>

              <h3 className="mt-2 text-xl font-bold text-white">
                {item.value}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {item.sub}
              </p>

            </div>

          );

        })}

      </div>

    </div>
  );
}

export default ExecutiveSummary;