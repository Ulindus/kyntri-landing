import logo from "../assets/kyntri_logo.png";

function Navbar() {
  return (
    <nav
  className="
    fixed
    top-0
    left-0
    w-full
    z-50
    bg-[#050816]/40
    backdrop-blur-2xl
    border-b
    border-white/5
  "
>
      <div className="max-w-[1400px] mx-auto px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <img
            src={logo}
            alt="Kyntri"
            className="w-10 h-10 object-contain"
          />

          <div>
            <h1 className="text-white font-bold text-xl tracking-wider">
              KYNTRI
            </h1>

            <p className="text-[9px] uppercase tracking-[4px] text-gray-500">
              Technology Solutions
            </p>
          </div>

        </div>

        {/* Menu */}
        <ul className="hidden lg:flex items-center gap-10 text-gray-300 text-sm">

          <li className="hover:text-cyan-400 transition cursor-pointer">
            Services
          </li>

          <li className="hover:text-cyan-400 transition cursor-pointer">
            Automation
          </li>

          <li className="hover:text-cyan-400 transition cursor-pointer">
            Platforms
          </li>

          <li className="hover:text-cyan-400 transition cursor-pointer">
            Process
          </li>

          <li className="hover:text-cyan-400 transition cursor-pointer">
            Contact
          </li>

        </ul>

        {/* Button */}
        <button
          className="
            px-6
            py-3
            rounded-xl
            text-white
            text-sm
            font-medium
            bg-gradient-to-r
            from-cyan-400
            to-blue-500
            hover:scale-105
            transition-all
            duration-300
            shadow-[0_0_30px_rgba(34,211,238,0.45)]
          "
        >
          Start a Project
        </button>

      </div>
    </nav>
  );
}

export default Navbar;