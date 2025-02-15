import React from "react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Footer = () => {
  const products = [
    { name: "Marketplace", href: "#" },
    { name: "Storefront", href: "#" },
    { name: "On-Demand Delivery", href: "#" },
    { name: "All Products", href: "#" },
  ];

  const businessTypes = [
    { name: "Restaurant", href: "#" },
    { name: "Grocery", href: "#" },
    { name: "Alcohol", href: "#" },
    { name: "Convenience", href: "#" },
    { name: "Flower Shops", href: "#" },
    { name: "Pet Stores", href: "#" },
    { name: "Retails", href: "#" },
  ];

  const resources = [
    { name: "Merchant Blog", href: "#" },
    { name: "Learning Center", href: "#" },
    { name: "Guides & Webinars", href: "#" },
    { name: "Benefits & Discounts", href: "#" },
    { name: "Advocacy & Access", href: "#" },
    { name: "Help & FAQ", href: "#" },
  ];

  const legalLinks = [
    { name: "Terms", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Referral Program", href: "#" },
    { name: "COVID-19", href: "#" },
    { name: "Do Not Sell or Share My Personal Information", href: "#" },
  ];

  return (
    <footer className="w-full">
      {/* Top Banner */}
      <div className="w-full bg-blue-700 px-4 py-2 flex justify-between items-center">
        <div className="text-white">
          <span>Logo Jade Media Delivery</span>
          <span className="ml-1 text-sm">for Merchants</span>
        </div>
        <Link href="#" className="text-white hidden md:block  hover:underline">
          Become a Partner
        </Link>
      </div>

      {/* Main Footer Content */}
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-4 lg:gap-8 mb-8">
            <div>
              <h2 className="text-lg font-bold mb-4">Logo</h2>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-4">PRODUCTS</h2>
              <ul className="space-y-2">
                {products.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:underline">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-4">BUSINESS TYPES</h2>
              <ul className="space-y-2">
                {businessTypes.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:underline">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-4">RESOURCES</h2>
              <ul className="space-y-2">
                {resources.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:underline">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-4">
            <div className="flex flex-col space-y-4">
              <h2 className="text-lg font-bold">Logo</h2>
              <div className="flex space-x-4">
                <Link href="#" className="text-white">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
                <Link href="#" className="text-white">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </Link>
                <Link href="#" className="text-white">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
                <Link href="#" className="text-white">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Language Selector and Legal Links */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
              <Select defaultValue="en-CA">
                <SelectTrigger className="w-[180px] bg-transparent text-white border-gray-700">
                  <SelectValue placeholder="English (CA)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en-CA">English (CA)</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex flex-wrap gap-4">
                {legalLinks.map((link, index) => (
                  <React.Fragment key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              © 2024 Jade Media Delivery
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
