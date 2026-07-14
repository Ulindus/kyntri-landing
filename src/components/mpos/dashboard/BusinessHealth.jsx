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

function BusinessHealth() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0B1220] p-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h3 className="text-xl font-bold text-white">
            Business Health
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            Overall business performance
          </p>

        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10">

          <ShieldCheck
            className="text-green-400"
            size={24}
          />

        </div>

      </div>

      {/* Overall Score */}

      <div className="mt-8 rounded-2xl border border-green-500/20 bg-gradient-to-r from-green-500/10 to-cyan-500/10 p-5">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-gray-400">
              Overall Health Score
            </p>

            <h2 className="mt-2 text-4xl font-bold text-white">
              94%
            </h2>

          </div>

          <div className="rounded-full bg-green-500/20 px-4 py-2">

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

            <div className="mb-2 flex items-center justify-between">

              <span className="text-gray-300">

                {item.title}

              </span>

              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${item.badge}`}>

                {item.status}

              </span>

            </div>

            <div className="mb-2 flex justify-between">

              <span className="text-sm text-gray-500">

                Score

              </span>

              <span className="font-semibold text-white">

                {item.value}%

              </span>

            </div>

            <div className="h-3 rounded-full bg-[#1F2937]">

              <div
                className={`h-3 rounded-full ${item.color}`}
                style={{
                  width: `${item.value}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

      {/* Status Cards */}

      <div className="mt-8 grid grid-cols-2 gap-4">

        <div className="rounded-xl bg-[#111827] p-4">

          <Activity
            className="mb-3 text-cyan-400"
            size={22}
          />

          <p className="text-sm text-gray-400">
            Active Stores
          </p>

          <h4 className="mt-2 text-2xl font-bold text-white">
            12
          </h4>

        </div>

        <div className="rounded-xl bg-[#111827] p-4">

          <TrendingUp
            className="mb-3 text-green-400"
            size={22}
          />

          <p className="text-sm text-gray-400">
            Revenue Growth
          </p>

          <h4 className="mt-2 text-2xl font-bold text-green-400">
            +12.4%
          </h4>

        </div>

        <div className="rounded-xl bg-[#111827] p-4">

          <CheckCircle2
            className="mb-3 text-green-400"
            size={22}
          />

          <p className="text-sm text-gray-400">
            Completed Orders
          </p>

          <h4 className="mt-2 text-2xl font-bold text-white">
            98.9%
          </h4>

        </div>

        <div className="rounded-xl bg-[#111827] p-4">

          <AlertTriangle
            className="mb-3 text-yellow-400"
            size={22}
          />

          <p className="text-sm text-gray-400">
            Critical Alerts
          </p>

          <h4 className="mt-2 text-2xl font-bold text-yellow-400">
            03
          </h4>

        </div>

      </div>

    </div>
  );
}

export default BusinessHealth;