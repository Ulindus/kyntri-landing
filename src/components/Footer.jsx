function Footer() {
  return (
    <footer className="bg-[#010611] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Logo Section */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-black text-cyan-400">
              KYNTRI
            </h2>

            <p className="text-gray-400 mt-6 leading-7">
              Engineering scalable software,
              AI solutions and cloud platforms
              for modern enterprises.
            </p>
          </div>

          {/* Platforms */}
          <div>
            <h3 className="font-bold text-lg mb-6">
              Platforms
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>mPOS</li>
              <li>Liftly</li>
              <li>EventFlow</li>
              <li>AutoGarage</li>
              <li>Agentic AI</li>
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="font-bold text-lg mb-6">
              Use Cases
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Workflow Automation</li>
              <li>AI Assistants</li>
              <li>Data Analytics</li>
              <li>Cloud Migration</li>
              <li>Digital Transformation</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-6">
              Resources
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Blog</li>
              <li>Case Studies</li>
              <li>Documentation</li>
              <li>Support</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-6">
              Company
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>About Us</li>
              <li>Services</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500">
            © 2026 KYNTRI. All rights reserved.
          </p>

          <div className="flex gap-6 text-gray-500">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;