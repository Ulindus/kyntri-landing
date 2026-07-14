import {
  Activity,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const metrics = [
  {
    title: "Inventory Health",
    value: 96,
    status: "Excellent",
    color: "bg-green-500",
    badge: "bg-green-500/20 text-green-400",
  },
  {
    title: "Stock Availability",
    value: 92,
    status: "Good",
    color: "bg-cyan-500",
    badge: "bg-cyan-500/20 text-cyan-400",
  },
  {
    title: "Order Accuracy",
    value: 99,
    status: "Excellent",
    color: "bg-violet-500",
    badge: "bg-violet-500/20 text-violet-400",
  },
  {
    title: "Customer Satisfaction",
    value: 94,
    status: "Very Good",
    color: "bg-orange-500",
    badge: "bg-orange-500/20 text-orange-400",
  },
];

const stats = [
  {
    title: "Active Stores",
    value: "12",
    icon: Activity,
    color: "text-cyan-400",
  },
  {
    title: "Revenue Growth",
    value: "+12.4%",
    icon: TrendingUp,
    color: "text-green-400",
  },
  {
    title: "Completed Orders",
    value: "98.9%",
    icon: CheckCircle2,
    color: "text-green-400",
  },
  {
    title: "Critical Alerts",
    value: "03",
    icon: AlertTriangle,
    color: "text-yellow-400",
  },
];

function BusinessHealth() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0B1220] p-5 sm:p-6">
      {/* Header */}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-bold text-white sm:text-xl">
            Business Health
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            Overall business performance
          </p>
        </div>

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500/10">
          <ShieldCheck
            className="text-green-400"
            size={24}
          />
        </div>
      </div>

      {/* Overall Score */}

      <div className="mt-8 rounded-2xl border border-green-500/20 bg-gradient-to-r from-green-500/10 to-cyan-500/10 p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-400">
              Overall Health Score
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white sm:text-5xl">
              94%
            </h2>
          </div>

          <div className="w-fit rounded-full bg-green-500/20 px-4 py-2">
            <span className="font-semibold text-green-400">
              Excellent
            </span>
          </div>
        </div>
      </div>

      {/* Metrics */}

      <div className="mt-8 space-y-6">
        {metrics.map((item) => (
          <div key={item.title}>
            <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-medium text-gray-300">
                {item.title}
              </span>

              <span
                className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${item.badge}`}
              >
                {item.status}
              </span>
            </div>

            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-gray-500">
                Score
              </span>

              <span className="font-semibold text-white">
                {item.value}%
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-[#1F2937]">
              <div
                className={`${item.color} h-full rounded-full transition-all duration-700`}
                style={{
                  width: `${item.value}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
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
              <Icon
                className={`mb-3 ${item.color}`}
                size={22}
              />

              <p className="text-sm text-gray-400">
                {item.title}
              </p>

              <h4 className={`mt-2 text-2xl font-bold ${item.color}`}>
                {item.value}
              </h4>
            </div>
          );
        })}
      </div>

      {/* Footer */}

      <div className="mt-6 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-300">
              Business Status
            </p>

            <h4 className="mt-1 text-xl font-bold text-white">
              Healthy & Growing
            </h4>
          </div>

          <div className="text-left sm:text-right">
            <p className="text-sm text-gray-300">
              Performance Score
            </p>

            <h4 className="mt-1 text-2xl font-bold text-green-400">
              94%
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessHealth;