import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/kyntri_logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "Services",
    "Automation",
    "Platforms",
    "Process",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050816]/40 backdrop-blur-2xl border-b border-white/5">
      <div className="max-w-[1400px] mx-auto h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Kyntri"
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
          />

          <div>
            <h1 className="text-white font-bold text-lg sm:text-xl tracking-wider">
              KYNTRI
            </h1>

            <p className="text-[8px] sm:text-[9px] uppercase tracking-[3px] sm:tracking-[4px] text-gray-500">
              Technology Solutions
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10 text-sm text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button className="hidden lg:block px-6 py-3 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.45)]">
          Start a Project
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-[#081120]/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 flex flex-col gap-6">
          {menuItems.map((item) => (
            <button
              key={item}
              className="text-left text-gray-300 hover:text-cyan-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </button>
          ))}

          <button className="mt-2 w-full rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3 text-white font-medium">
            Start a Project
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;