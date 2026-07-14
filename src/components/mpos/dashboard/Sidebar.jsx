import {
  LayoutDashboard,
  BarChart3,
  Boxes,
  Package,
  Receipt,
  Users,
  Tag,
  Truck,
  FileText,
  Settings,
  Store,
  ChevronDown,
} from "lucide-react";

const menu = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: BarChart3, label: "Sales" },
  { icon: Boxes, label: "Inventory" },
  { icon: Package, label: "Products" },
  { icon: Receipt, label: "Transactions" },
  { icon: Users, label: "Customers" },
  { icon: Tag, label: "Promotions" },
  { icon: Truck, label: "Suppliers" },
  { icon: FileText, label: "Reports" },
  { icon: Settings, label: "Settings" },
];

function Sidebar() {
  return (
    <aside
      className="
      flex
      h-screen
      w-[260px]
      shrink-0
      flex-col
      overflow-y-auto
      border-r
      border-white/10
      bg-[#0B1220]
    "
    >
      {/* Logo */}

      <div className="border-b border-white/10 p-5">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20">

            <Store className="text-cyan-400" size={20} />

          </div>

          <div>

            <h2 className="text-xl font-bold text-white">
              mPOS
            </h2>

            <p className="text-xs text-gray-400">
              Retail Suite
            </p>

          </div>

        </div>

      </div>

      {/* Menu */}

      <div className="flex-1 p-4">

        {menu.map((item) => {

          const Icon = item.icon;

          return (

            <button
              key={item.label}
              className={`
              mb-2
              flex
              w-full
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              text-left
              text-sm
              transition-all
              ${
                item.active
                  ? "bg-cyan-500 text-white shadow-lg"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }
            `}
            >

              <Icon size={18} />

              <span>{item.label}</span>

            </button>

          );

        })}

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10 p-4">

        <button
          className="
          mb-4
          flex
          w-full
          items-center
          justify-between
          rounded-xl
          border
          border-white/10
          bg-[#111827]
          px-4
          py-3
          text-sm
          text-white
        "
        >

          <span>All Stores</span>

          <ChevronDown size={16} />

        </button>

        <div className="flex items-center gap-3">

          <div
            className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-cyan-500
            font-bold
            text-white
          "
          >
            M
          </div>

          <div>

            <p className="text-sm font-semibold text-white">
              Manager
            </p>

            <p className="text-xs text-gray-400">
              Retail Admin
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;