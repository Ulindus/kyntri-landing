import logo from "../assets/kyntri_logo.png";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030814]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

        {/* Top Footer */}

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-6
          gap-10
          lg:gap-12
        "
        >

          {/* Logo */}

          <div className="lg:col-span-2 text-center sm:text-left">

            <div className="mb-6 flex items-center justify-center gap-4 sm:justify-start">

              <img
                src={logo}
                alt="Kyntri"
                className="h-10 sm:h-11 w-auto"
              />

              <h2
                className="
                text-3xl
                sm:text-4xl
                font-black
                tracking-[3px]
                text-white
              "
              >
                KYNTRI
              </h2>

            </div>

            <p
              className="
              max-w-sm
              mx-auto
              sm:mx-0
              text-sm
              sm:text-base
              leading-7
              sm:leading-8
              text-gray-400
            "
            >
              Engineering scalable software,
              AI solutions, and cloud
              platforms for modern
              enterprises.
            </p>

          </div>

          {/* Platforms */}

          <div>

            <h3 className="mb-5 text-xl font-bold text-white">
              Platforms
            </h3>

            <ul className="space-y-3 text-sm sm:text-base text-gray-400">

              {[
                "mPOS",
                "Liftly",
                "EventFlow",
                "AutoGarage",
                "Agentic AI",
              ].map((item) => (

                <li
                  key={item}
                  className="cursor-pointer transition hover:text-white"
                >
                  {item}
                </li>

              ))}

            </ul>

          </div>

          {/* Use Cases */}

          <div>

            <h3 className="mb-5 text-xl font-bold text-white">
              Use Cases
            </h3>

            <ul className="space-y-3 text-sm sm:text-base text-gray-400">

              {[
                "Workflow Automation",
                "AI Assistants",
                "Data Analytics",
                "Cloud Migration",
                "Digital Transformation",
              ].map((item) => (

                <li
                  key={item}
                  className="cursor-pointer transition hover:text-white"
                >
                  {item}
                </li>

              ))}

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="mb-5 text-xl font-bold text-white">
              Resources
            </h3>

            <ul className="space-y-3 text-sm sm:text-base text-gray-400">

              {[
                "Blog",
                "Case Studies",
                "Documentation",
                "Support",
                "FAQ",
              ].map((item) => (

                <li
                  key={item}
                  className="cursor-pointer transition hover:text-white"
                >
                  {item}
                </li>

              ))}

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="mb-5 text-xl font-bold text-white">
              Company
            </h3>

            <ul className="space-y-3 text-sm sm:text-base text-gray-400">

              {[
                "About Us",
                "Services",
                "Careers",
                "Contact",
                "Privacy Policy",
              ].map((item) => (

                <li
                  key={item}
                  className="cursor-pointer transition hover:text-white"
                >
                  {item}
                </li>

              ))}

            </ul>

          </div>

        </div>

        {/* Divider */}

        <div className="my-10 sm:my-14 border-t border-white/10" />

        {/* Bottom */}

        <div
          className="
          flex
          flex-col
          gap-3
          text-center
          md:flex-row
          md:items-center
          md:justify-between
        "
        >

          <p className="text-xs sm:text-sm md:text-base text-gray-500">
            © 2026 Kyntri Technology Solutions. All rights reserved.
          </p>

          <p className="text-xs sm:text-sm md:text-base text-gray-500">
            Built for modern, intelligent enterprises.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;