import {
  CalendarDays,
  ChevronDown,
  Download,
  Filter,
} from "lucide-react";

function Header() {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-6">

      {/* Left */}

      <div>

        <h1 className="text-4xl font-bold text-white">
          Overview
        </h1>

        <p className="mt-2 text-gray-400">
          Real-time summary of your retail business
        </p>

      </div>

      {/* Right */}

      <div className="flex flex-wrap items-center gap-3">

        {/* Date */}

        <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111827] px-5 py-3 text-sm text-gray-300 transition hover:border-cyan-500/30">

          <CalendarDays size={18} />

          <span>May 12 - May 18, 2024</span>

        </button>

        {/* Compare */}

        <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111827] px-5 py-3 text-sm text-gray-300 transition hover:border-cyan-500/30">

          <span>Compare: Previous Period</span>

          <ChevronDown size={16} />

        </button>

        {/* Filter */}

        <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111827] px-4 py-3 text-sm text-gray-300 transition hover:border-cyan-500/30">

          <Filter size={18} />

          Filters

        </button>

        {/* Download */}

        <button className="rounded-xl border border-white/10 bg-[#111827] p-3 text-gray-300 transition hover:border-cyan-500/30">

          <Download size={18} />

        </button>

      </div>

    </div>
  );
}

export default Header;