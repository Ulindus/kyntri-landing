import {
  CalendarDays,
  ChevronDown,
  Download,
  Filter,
} from "lucide-react";

function Header() {
  return (
    <div className="mb-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

      {/* Left */}

      <div>

        <h1
          className="
          text-3xl
          sm:text-4xl
          font-bold
          text-white
        "
        >
          Overview
        </h1>

        <p
          className="
          mt-2
          text-sm
          sm:text-base
          text-gray-400
        "
        >
          Real-time summary of your retail business
        </p>

      </div>

      {/* Right */}

      <div
        className="
        flex
        flex-wrap
        items-center
        gap-3
      "
      >

        {/* Date */}

        <button
          className="
          flex
          flex-1
          min-w-[220px]
          items-center
          justify-center
          gap-2
          rounded-xl
          border
          border-white/10
          bg-[#111827]
          px-4
          py-3
          text-sm
          text-gray-300
          transition
          hover:border-cyan-500/30
          sm:flex-none
        "
        >
          <CalendarDays size={18} />

          <span className="truncate">
            May 12 - May 18, 2024
          </span>

        </button>

        {/* Compare */}

        <button
          className="
          flex
          flex-1
          min-w-[220px]
          items-center
          justify-center
          gap-2
          rounded-xl
          border
          border-white/10
          bg-[#111827]
          px-4
          py-3
          text-sm
          text-gray-300
          transition
          hover:border-cyan-500/30
          sm:flex-none
        "
        >
          <span className="truncate">
            Compare: Previous Period
          </span>

          <ChevronDown size={16} />
        </button>

        {/* Filter */}

        <button
          className="
          flex
          items-center
          gap-2
          rounded-xl
          border
          border-white/10
          bg-[#111827]
          px-4
          py-3
          text-sm
          text-gray-300
          transition
          hover:border-cyan-500/30
        "
        >
          <Filter size={18} />
          Filters
        </button>

        {/* Download */}

        <button
          className="
          flex
          h-[46px]
          w-[46px]
          items-center
          justify-center
          rounded-xl
          border
          border-white/10
          bg-[#111827]
          text-gray-300
          transition
          hover:border-cyan-500/30
        "
        >
          <Download size={18} />
        </button>

      </div>

    </div>
  );
}

export default Header;