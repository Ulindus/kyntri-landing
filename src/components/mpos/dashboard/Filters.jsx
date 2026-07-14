import { ChevronDown } from "lucide-react";

function Filters() {
  return (
    <div className="mt-6 mb-6 grid gap-4 xl:grid-cols-[1fr_1fr_1fr_auto]">

      {/* Store */}

      <div className="rounded-2xl border border-white/10 bg-[#0B1220] p-4">

        <p className="text-xs uppercase tracking-wider text-gray-500">
          Store
        </p>

        <button className="mt-2 flex w-full items-center justify-between text-white">

          <span>All Stores</span>

          <ChevronDown size={18} />

        </button>

      </div>

      {/* Category */}

      <div className="rounded-2xl border border-white/10 bg-[#0B1220] p-4">

        <p className="text-xs uppercase tracking-wider text-gray-500">
          Category
        </p>

        <button className="mt-2 flex w-full items-center justify-between text-white">

          <span>All Categories</span>

          <ChevronDown size={18} />

        </button>

      </div>

      {/* Product */}

      <div className="rounded-2xl border border-white/10 bg-[#0B1220] p-4">

        <p className="text-xs uppercase tracking-wider text-gray-500">
          Product
        </p>

        <button className="mt-2 flex w-full items-center justify-between text-white">

          <span>All Products</span>

          <ChevronDown size={18} />

        </button>

      </div>

      {/* Toggle */}

      <div className="rounded-2xl border border-white/10 bg-[#0B1220] p-2">

        <div className="flex rounded-xl bg-[#111827]">

          <button className="flex-1 rounded-xl py-3 text-gray-400">
            Daily
          </button>

          <button className="flex-1 rounded-xl bg-cyan-500 py-3 font-semibold text-white">
            Weekly
          </button>

          <button className="flex-1 rounded-xl py-3 text-gray-400">
            Monthly
          </button>

        </div>

      </div>

    </div>
  );
}

export default Filters;