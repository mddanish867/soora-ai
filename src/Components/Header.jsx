import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="p-4 border-b border-gray-700">
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-semibold text-blue-400 hover:text-blue-300 transition-colors"
        >
          Soora.ai
        </Link>
        <nav className="hidden md:flex gap-x-28 items-center">
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/pricing"
                className="hover:text-blue-400 transition-colors"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className="hover:text-blue-400 transition-colors"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-400 transition-colors"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
        <Link
          to="/auth"
          className="hidden md:block text-blue-400 hover:text-blue-300 transition-colors"
        >
          Login →
        </Link>
        <button
          className="md:hidden text-blue-400 hover:text-blue-300 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            ></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <nav className="mt-4 md:hidden">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link
                to="/pricing"
                className="block hover:text-blue-400 transition-colors"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className="block hover:text-blue-400 transition-colors"
                onClick={toggleMenu}
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block hover:text-blue-400 transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/auth"
                className="block text-blue-400 hover:text-blue-300 transition-colors"
                onClick={toggleMenu}
              >
                Login →
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
