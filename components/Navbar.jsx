"use client";
import { Home, Search, Globe } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Home className="h-6 w-6 mr-2" />
            <span className="font-bold text-xl">Logo</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Products
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Solutions
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Resources
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Pricing
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900">
              <Search className="h-5 w-5" />
            </button>
            <div className="relative">
              <button
                className="text-gray-700 hover:text-gray-900 flex items-center"
                onClick={toggleLanguageDropdown}
              >
                <Globe className="h-5 w-5 mr-1" />
                ENG
              </button>
              {/* Dropdown for language selection */}
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      English
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Spanish
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      French
                    </a>
                  </div>
                </div>
              )}
            </div>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 hidden md:inline"
            >
              Login
            </a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 hidden md:inline">
              Get Started
            </button>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block text-gray-700 hover:text-gray-900">
                Products
              </a>
              <a href="#" className="block text-gray-700 hover:text-gray-900">
                Solutions
              </a>
              <a href="#" className="block text-gray-700 hover:text-gray-900">
                Resources
              </a>
              <a href="#" className="block text-gray-700 hover:text-gray-900">
                Pricing
              </a>
              <a href="#" className="block text-gray-700 hover:text-gray-900">
                Contact
              </a>
              <a href="#" className="block text-gray-700 hover:text-gray-900">
                Login
              </a>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
