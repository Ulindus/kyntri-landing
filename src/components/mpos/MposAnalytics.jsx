import chartImg from "../../assets/chart.png";
import {
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Users,
  ArrowRight,
} from "lucide-react";

function MposAnalytics() {
  return (
    <section className="relative overflow-hidden bg-[#020817] py-32">

      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="relative mx-auto max-w-[1450px] px-8">

        <div className="grid items-center gap-20 lg:grid-cols-[0.95fr_1.05fr]">

          {/* LEFT */}

          <div>

            <span className="text-sm uppercase tracking-[5px] text-cyan-400">

              Analytics

            </span>

            <h2 className="mt-5 text-5xl font-black leading-tight text-white">

              Advanced Analytics
              <br />
              For Smarter Decisions

            </h2>

            <p className="mt-8 max-w-xl text-lg leading-9 text-gray-400">

              Get real-time visibility into your sales,
              customers and inventory. Make better decisions
              with beautiful dashboards and AI-powered insights.

            </p>

            <div className="mt-12 space-y-5">

              {[
                "Real-time Sales Dashboard",
                "Revenue Growth Reports",
                "Inventory Performance",
                "Customer Behaviour Insights",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4"
                >

                  <div className="h-3 w-3 rounded-full bg-cyan-400" />

                  <span className="text-gray-300">

                    {item}

                  </span>

                </div>

              ))}

            </div>

            <button
              className="
              mt-12
              flex
              items-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              px-8
              py-4
              font-semibold
              transition
              hover:scale-105
              "
            >

              View Analytics

              <ArrowRight size={18} />

            </button>

          </div>

          {/* RIGHT */}

          <div className="relative">

            {/* Glow */}

            <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-[120px]" />

            {/* Chart */}

            <img
              src={chartImg}
              alt="Analytics Dashboard"
              className="
              relative
              z-20
              rounded-3xl
              border
              border-white/10
              shadow-[0_30px_90px_rgba(0,0,0,.45)]
              "
            />

            {/* Revenue */}

            <div
              className="
              absolute
              -left-10
              top-8
              rounded-2xl
              border
              border-white/10
              bg-[#0B1120]/95
              p-5
              backdrop-blur-xl
              "
            >

              <div className="flex items-center gap-3">

                <DollarSign className="text-cyan-400" />

                <span className="text-sm text-gray-400">

                  Revenue

                </span>

              </div>

              <h3 className="mt-3 text-3xl font-bold text-white">

                LKR 2.4M

              </h3>

              <p className="mt-1 text-green-400">

                +18.5%

              </p>

            </div>

            {/* Orders */}

            <div
              className="
              absolute
              right-0
              top-20
              rounded-2xl
              border
              border-white/10
              bg-[#0B1120]/95
              p-5
              backdrop-blur-xl
              "
            >

              <ShoppingCart className="text-cyan-400" />

              <h3 className="mt-3 text-2xl font-bold text-white">

                1,254

              </h3>

              <p className="text-gray-400">

                Orders

              </p>

            </div>

            {/* Customers */}

            <div
              className="
              absolute
              bottom-6
              left-8
              rounded-2xl
              border
              border-white/10
              bg-[#0B1120]/95
              p-5
              backdrop-blur-xl
              "
            >

              <Users className="text-cyan-400" />

              <h3 className="mt-3 text-2xl font-bold text-white">

                5.8K

              </h3>

              <p className="text-gray-400">

                Customers

              </p>

            </div>

            {/* Growth */}

            <div
              className="
              absolute
              -right-5
              bottom-12
              rounded-2xl
              border
              border-white/10
              bg-[#0B1120]/95
              p-5
              backdrop-blur-xl
              "
            >

              <TrendingUp className="text-green-400" />

              <h3 className="mt-3 text-2xl font-bold text-white">

                32%

              </h3>

              <p className="text-green-400">

                Growth

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default MposAnalytics;