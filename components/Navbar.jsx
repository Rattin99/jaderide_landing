"use client";
import { LanguageContext } from "@/lib/LanguageContext";
import { translations } from "@/public/language/language";
import { Home, Globe } from "lucide-react";
import { useContext, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);
  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const t = translations[language];

  return (
    <nav className="fixed w-full bg-white shadow-md z-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Home className="h-6 w-6 mr-2" />
            <span className="font-bold text-xl">Logo</span>
          </div>
          <div className="hidden lg:flex items-center space-x-5 lg:space-x-16">
            <a href="#" className="text-gray-700 hover:text-blue-800">
              {t.navbar.products}
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-800">
              {t.navbar.solutions}
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-800">
              {t.navbar.resources}
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-800">
              {t.navbar.pricing}
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-800">
              {t.navbar.contact}
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                className="text-gray-700 hover:text-blue-800 flex items-center"
                onClick={toggleLanguageDropdown}
              >
                <Globe className="h-5 w-5 mr-1" />
                {language}
              </button>
              {/* Dropdown for language selection */}
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setLanguage("en");
                        setIsLanguageDropdownOpen(false);
                      }}
                    >
                      English
                    </a>

                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setLanguage("fr");
                        setIsLanguageDropdownOpen(false);
                      }}
                    >
                      French
                    </a>
                  </div>
                </div>
              )}
            </div>

            <button className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 hidden md:inline">
              {t.navbar.button}
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
              <a href="#" className="block text-gray-700 hover:text-blue-800">
                {t.navbar.products}
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-800">
                {t.navbar.solutions}
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-800">
                {t.navbar.resources}
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-800">
                {t.navbar.pricing}
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-800">
                {t.navbar.contact}
              </a>

              <button className="w-full bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-800">
                {t.navbar.button}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
