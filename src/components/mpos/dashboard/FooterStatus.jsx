import {
  CheckCircle2,
  Wifi,
  ShieldCheck,
  Clock3,
} from "lucide-react";

const statusItems = [
  {
    icon: CheckCircle2,
    text: "All systems operational",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    icon: Wifi,
    text: "Live Sync Enabled",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: ShieldCheck,
    text: "Secure Cloud Backup",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: Clock3,
    text: "Updated just now",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
];

function FooterStatus() {
  return (
    <div className="mt-6 rounded-2xl border border-white/10 bg-[#0B1220] p-5 sm:p-6">
      {/* Mobile & Tablet */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:hidden">
        {statusItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.text}
              className="
                flex
                items-center
                gap-3
                rounded-xl
                bg-[#111827]
                p-4
                transition-all
                duration-300
                hover:bg-[#162032]
                hover:border-cyan-500/20
                border
                border-transparent
              "
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.bg}`}
              >
                <Icon
                  size={18}
                  className={item.color}
                />
              </div>

              <span className="text-sm text-gray-300">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>

      {/* Desktop */}

      <div className="hidden xl:flex xl:items-center xl:justify-between">
        <div className="flex items-center gap-8">
          {statusItems.slice(0, 2).map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.text}
                className="flex items-center gap-3"
              >
                <Icon
                  size={18}
                  className={item.color}
                />

                <span className="text-sm text-gray-300">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-8">
          {statusItems.slice(2).map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.text}
                className="flex items-center gap-3"
              >
                <Icon
                  size={18}
                  className={item.color}
                />

                <span className="text-sm text-gray-300">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Bottom */}

      <div className="mt-6 border-t border-white/10 pt-4">
        <div className="flex flex-col gap-2 text-center text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <span>
            © 2026 mPOS Retail Suite. All rights reserved.
          </span>

          <span>
            Dashboard Version 2.0 • Last Sync: Just Now
          </span>
        </div>
      </div>
    </div>
  );
}

export default FooterStatus;