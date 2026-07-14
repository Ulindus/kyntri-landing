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
    <aside className="flex w-[250px] flex-col border-r border-white/10 bg-[#0B1220]">

      {/* Logo */}

      <div className="border-b border-white/10 p-6">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/20">

            <Store className="text-cyan-400" size={22} />

          </div>

          <div>

            <h2 className="text-2xl font-bold text-white">
              mPOS
            </h2>

            <p className="text-sm text-gray-400">
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
              className={`mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all
              ${
                item.active
                  ? "bg-cyan-500 text-white shadow-lg"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >

              <Icon size={20} />

              {item.label}

            </button>

          );

        })}

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10 p-4">

        <button className="mb-4 flex w-full items-center justify-between rounded-xl border border-white/10 bg-[#111827] px-4 py-3 text-white">

          <span>All Stores</span>

          <ChevronDown size={18} />

        </button>

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500 font-bold text-white">
            M
          </div>

          <div>

            <p className="font-semibold text-white">
              Manager
            </p>

            <p className="text-sm text-gray-400">
              Retail Admin
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;