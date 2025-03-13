import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand Name */}
        <h1 className="text-2xl font-bold">Car Catalogue</h1>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-blue-600 p-4 md:p-0 md:space-x-6 text-center`}
        >
          <Link to="/" className="block md:inline px-4 py-2 hover:bg-blue-500 rounded-md">
            Home
          </Link>
          <Link to="/dashboard" className="block md:inline px-4 py-2 hover:bg-blue-500 rounded-md">
            Dashboard
          </Link>
          {user?.role === "admin" && (
            <Link to="/admin" className="block md:inline px-4 py-2 hover:bg-blue-500 rounded-md">
              Admin
            </Link>
          )}
          {user ? (
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="block md:inline px-4 py-2 bg-green-500 hover:bg-green-700 rounded-md">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
