import mposPhone from "../../assets/mpos-phone.png";

function MposHero() {
  return (
    <section className="bg-[#020817] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <span
              className="
                inline-block
                px-4
                py-2
                rounded-full
                bg-cyan-500/10
                border
                border-cyan-500/20
                text-cyan-400
                text-sm
                mb-8
              "
            >
              THE FUTURE OF POINT OF SALES
            </span>

            <h1
              className="
                text-5xl
                lg:text-7xl
                font-black
                leading-tight
              "
            >
              Simplify Billing.
              <br />

              <span className="text-cyan-400">
                Accelerate
              </span>

              <br />

              Your Business
            </h1>

            <p
              className="
                mt-8
                text-lg
                text-gray-400
                leading-8
                max-w-xl
              "
            >
              Transform the way you manage
              transactions with a powerful
              mobile-first billing platform.
              Manage inventory, billing,
              analytics and customer
              engagement from one place.
            </p>

            <div className="flex gap-4 mt-10">

              <button
                className="
                  px-8
                  py-4
                  rounded-xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  font-semibold
                "
              >
                Request Demo
              </button>

              <button
                className="
                  px-8
                  py-4
                  rounded-xl
                  border
                  border-white/10
                "
              >
                Explore Features
              </button>

            </div>

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
  src={mposPhone}
  alt="mPOS App"
  className="
    relative
    w-full
    max-w-[550px]
    mx-auto
  "
/>

          </div>

        </div>

      </div>
    </section>
  );
}

export default MposHero;