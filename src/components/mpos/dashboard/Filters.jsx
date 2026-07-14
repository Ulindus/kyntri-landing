import { ChevronDown } from "lucide-react";

function FilterCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0B1220] p-4">
      <p className="text-xs uppercase tracking-wider text-gray-500">
        {title}
      </p>

      <button className="mt-2 flex w-full items-center justify-between text-white">
        <span className="truncate">{value}</span>

        <ChevronDown size={18} />
      </button>
    </div>
  );
}

function Filters() {
  return (
    <div
      className="
        mt-6
        mb-6
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-[1fr_1fr_1fr_auto]
        gap-4
      "
    >
      <FilterCard
        title="Store"
        value="All Stores"
      />

      <FilterCard
        title="Category"
        value="All Categories"
      />

      <FilterCard
        title="Product"
        value="All Products"
      />

      {/* Period Toggle */}

      <div className="rounded-2xl border border-white/10 bg-[#0B1220] p-2">

        <div className="flex rounded-xl bg-[#111827] overflow-hidden">

          <button
            className="
              flex-1
              py-3
              text-xs
              sm:text-sm
              text-gray-400
              transition
              hover:text-white
            "
          >
            Daily
          </button>

          <button
            className="
              flex-1
              bg-cyan-500
              py-3
              text-xs
              sm:text-sm
              font-semibold
              text-white
            "
          >
            Weekly
          </button>

          <button
            className="
              flex-1
              py-3
              text-xs
              sm:text-sm
              text-gray-400
              transition
              hover:text-white
            "
          >
            Monthly
          </button>

        </div>

      </div>

    </div>
  );
}

export default Filters;