import chartImg from "../../assets/chart.png";

function MposAnalytics() {
  return (
    <section className="bg-[#020817] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <span className="text-cyan-400 uppercase tracking-[3px] text-sm">
              Analytics
            </span>

            <h2 className="text-5xl font-bold mt-4 leading-tight">
              Advanced Analytics
              <br />
              & Growth
            </h2>

            <p className="text-gray-400 mt-6 text-lg leading-8">
              Make data-driven decisions that propel your
              business forward. Monitor revenue trends,
              inventory performance and customer behaviour
              in real-time.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-cyan-400" />
                <span>Revenue Tracking</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-cyan-400" />
                <span>Inventory Analytics</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-cyan-400" />
                <span>Customer Insights</span>
              </div>

            </div>

            <button
              className="
                mt-10
                px-8
                py-4
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                font-semibold
              "
            >
              View Full Report
            </button>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <div
              className="
                absolute
                inset-0
                bg-cyan-500/20
                blur-[120px]
              "
            />

            <img
              src={chartImg}
              alt="Analytics Dashboard"
              className="
                relative
                rounded-3xl
                border
                border-white/10
                shadow-2xl
              "
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default MposAnalytics;