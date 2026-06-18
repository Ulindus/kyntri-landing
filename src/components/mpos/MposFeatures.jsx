function MposFeatures() {
  const features = [
    {
      title: "Elevate Customer Experience",
      desc: "Build lasting trust with transparent communication, automated updates and personalized interactions.",
      points: [
        "WhatsApp Notifications",
        "Online Payments",
        "Customer Loyalty",
        "Smart Reminders",
      ],
    },

    {
      title: "Quick Billing & Print Receipts",
      desc: "Generate invoices instantly, accept multiple payment methods and provide accurate receipts.",
      points: [
        "Fast Barcode Billing",
        "Supports Cash & Card",
        "Receipt Printing",
        "Digital Receipts",
      ],
    },

    {
      title: "Inbuilt Bar-Code Scanning",
      desc: "Integrated barcode scanning improves inventory tracking and checkout speed.",
      points: [
        "Instant Product Detection",
        "Real-Time Price Lookup",
        "Faster Checkout",
        "Stock Accuracy",
      ],
    },
  ];

  return (
    <section className="bg-[#020817] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-cyan-400 uppercase tracking-[3px] text-sm">
            Features
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Everything You Need
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Powerful retail tools designed to streamline operations,
            increase efficiency and improve customer satisfaction.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="
                rounded-3xl
                bg-gradient-to-br
                from-[#111827]
                to-[#1e293b]
                border
                border-white/10
                p-8
                hover:-translate-y-2
                transition-all
                duration-300
                hover:border-cyan-500/30
                hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
              "
            >
              <div
                className="
                  w-14
                  h-14
                  rounded-xl
                  bg-cyan-500/10
                  flex
                  items-center
                  justify-center
                  text-2xl
                  mb-6
                "
              >
                🚀
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 mb-8">
                {item.desc}
              </p>

              <div className="space-y-3">

                {item.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3"
                  >
                    <span className="text-cyan-400">
                      ✓
                    </span>

                    <span className="text-gray-300">
                      {point}
                    </span>
                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default MposFeatures;