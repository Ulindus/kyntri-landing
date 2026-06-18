function Navbar() {
  return (
    <nav className="bg-black px-10 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <h1 className="text-2xl font-bold text-cyan-400">
          KYNTRI
        </h1>

        <ul className="hidden md:flex gap-8 text-sm">
          <li>Services</li>
          <li>AI/ML</li>
          <li>Automation</li>
          <li>Contact</li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;