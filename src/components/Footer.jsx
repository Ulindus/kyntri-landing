import logo from "../assets/kyntri_logo.png";

function Footer() {
  return (
    <footer className="bg-[#030814] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">

          {/* Logo Section */}
          <div className="lg:col-span-2">

            <div className="flex items-center gap-4 mb-6">
              <img
                src={logo}
                alt="Kyntri"
                className="h-11 w-auto"
              />

              <h2 className="text-4xl font-black tracking-[4px] text-white">
                KYNTRI
              </h2>
            </div>

            <p className="text-gray-400 text-lg leading-9 max-w-sm">
              Engineering scalable software,
              AI solutions, and cloud
              platforms for modern
              enterprises.
            </p>

          </div>

          {/* Platforms */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">
              Platforms
            </h3>

            <ul className="space-y-4 text-lg text-gray-400">
              <li className="hover:text-white transition cursor-pointer">mPOS</li>
              <li className="hover:text-white transition cursor-pointer">Liftly</li>
              <li className="hover:text-white transition cursor-pointer">EventFlow</li>
              <li className="hover:text-white transition cursor-pointer">AutoGarage</li>
              <li className="hover:text-white transition cursor-pointer">Agentic AI</li>
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">
              Use Cases
            </h3>

            <ul className="space-y-4 text-lg text-gray-400">
              <li className="hover:text-white transition cursor-pointer">
                Workflow Automation
              </li>

              <li className="hover:text-white transition cursor-pointer">
                AI Assistants
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Data Analytics
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Cloud Migration
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Digital Transformation
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">
              Resources
            </h3>

            <ul className="space-y-4 text-lg text-gray-400">
              <li className="hover:text-white transition cursor-pointer">Blog</li>
              <li className="hover:text-white transition cursor-pointer">Case Studies</li>
              <li className="hover:text-white transition cursor-pointer">Documentation</li>
              <li className="hover:text-white transition cursor-pointer">Support</li>
              <li className="hover:text-white transition cursor-pointer">FAQ</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">
              Company
            </h3>

            <ul className="space-y-4 text-lg text-gray-400">
              <li className="hover:text-white transition cursor-pointer">About Us</li>
              <li className="hover:text-white transition cursor-pointer">Services</li>
              <li className="hover:text-white transition cursor-pointer">Careers</li>
              <li className="hover:text-white transition cursor-pointer">Contact</li>
              <li className="hover:text-white transition cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-14"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm md:text-base">
            © 2026 Kyntri Technology Solutions. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm md:text-base">
            Built for modern, intelligent enterprises.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;