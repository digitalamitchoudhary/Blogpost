import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
            Q
          </div>
          <span className="text-xl font-semibold text-gray-800">
            Quickblog
          </span>
        </div>

        {/* Right Button */}
        <Link
          to="/dashboard"
          className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition"
        >
          Dashboard →
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
