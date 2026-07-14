import {
  AlertTriangle,
  AlertCircle,
  Package,
  Clock3,
  ChevronRight,
} from "lucide-react";

const alerts = [
  {
    id: 1,
    title: "Low Stock Alert",
    message: "24 products are below the minimum stock level.",
    severity: "High",
    time: "5 mins ago",
    icon: Package,
    color: "text-red-400",
    bg: "bg-red-500/10",
    badge: "bg-red-500/20 text-red-400",
  },
  {
    id: 2,
    title: "Supplier Delivery Delayed",
    message: "ABC Suppliers delivery delayed by 2 days.",
    severity: "Medium",
    time: "25 mins ago",
    icon: Clock3,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    badge: "bg-yellow-500/20 text-yellow-400",
  },
  {
    id: 3,
    title: "Sales Spike Detected",
    message: "Beverage sales increased by 18% today.",
    severity: "Info",
    time: "1 hour ago",
    icon: AlertCircle,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    badge: "bg-cyan-500/20 text-cyan-400",
  },
  {
    id: 4,
    title: "Inventory Sync Completed",
    message: "All outlets successfully synchronized.",
    severity: "Normal",
    time: "2 hours ago",
    icon: AlertTriangle,
    color: "text-green-400",
    bg: "bg-green-500/10",
    badge: "bg-green-500/20 text-green-400",
  },
];

function KeyAlerts() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0B1220] p-6">

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h3 className="text-xl font-bold text-white">
            Key Alerts
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            Important business notifications
          </p>

        </div>

        <span className="rounded-full bg-red-500/20 px-3 py-1 text-sm font-semibold text-red-400">
          {alerts.length} Alerts
        </span>

      </div>

      {/* Alert List */}

      <div className="space-y-4">

        {alerts.map((alert) => {
          const Icon = alert.icon;

          return (
            <div
              key={alert.id}
              className="rounded-xl border border-white/5 bg-[#111827] p-4 transition-all duration-300 hover:border-cyan-500/30 hover:bg-[#162032]"
            >
              <div className="flex items-start gap-4">

                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${alert.bg}`}
                >
                  <Icon
                    size={20}
                    className={alert.color}
                  />
                </div>

                <div className="flex-1">

                  <div className="flex items-center justify-between">

                    <h4 className="font-semibold text-white">
                      {alert.title}
                    </h4>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${alert.badge}`}
                    >
                      {alert.severity}
                    </span>

                  </div>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {alert.message}
                  </p>

                  <div className="mt-4 flex items-center justify-between">

                    <span className="text-xs text-gray-500">
                      {alert.time}
                    </span>

                    <button className="flex items-center gap-1 text-sm font-medium text-cyan-400 transition hover:text-cyan-300">
                      View
                      <ChevronRight size={16} />
                    </button>

                  </div>

                </div>

              </div>

            </div>
          );
        })}

      </div>

      {/* Footer */}

      <button
        className="
          mt-6
          w-full
          rounded-xl
          border
          border-cyan-500/20
          bg-cyan-500/10
          py-3
          font-semibold
          text-cyan-400
          transition
          hover:bg-cyan-500/20
        "
      >
        View All Notifications
      </button>

    </div>
  );
}

export default KeyAlerts;