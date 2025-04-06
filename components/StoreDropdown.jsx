// components/StoreDropdown.jsx
"use client"; // Since we're using client-side interactivity

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDown } from "lucide-react"; // Icon for the dropdown trigger
import { LanguageContext } from "@/lib/LanguageContext";
import { useContext } from "react";
import { translations } from "@/public/language/language";
const storeItems = [
  {
    name: "Restaurant",
    nameFr: "Restaurant",
    href: "/jadeorder/business-type/resturant",
  },
  {
    name: "Grocery Store",
    nameFr: "Épicerie",
    href: "/jadeorder/business-type/grocery-store",
  },
  {
    name: "Coffee Shop",
    nameFr: "Café",
    href: "/jadeorder/business-type/coffee-shop",
    isSelected: true,
  },
  {
    name: "Retail Store",
    nameFr: "Commerce de détail",
    href: "/jadeorder/business-type/retail-store",
  },
  {
    name: "Flower Shop",
    nameFr: "Fleuriste",
    href: "/jadeorder/business-type/flower-shop",
  },
  {
    name: "Pet Shop",
    nameFr: "Animalerie",
    href: "/jadeorder/business-type/pet-shop",
  },
  {
    name: "Convenience",
    nameFr: "Dépanneur",
    href: "/jadeorder/business-type/convenience",
  },
  {
    name: "Pharmacy",
    nameFr: "Pharmacie",
    href: "/jadeorder/business-type/pharmacy",
  },
  {
    name: "Bakeries",
    nameFr: "Boulangerie",
    href: "/jadeorder/business-type/bakeries",
  },
  {
    name: "Book Store",
    nameFr: "Librairie",
    href: "/jadeorder/business-type/book-store",
  },
  {
    name: "Gifts",
    nameFr: "Cadeaux",
    href: "/jadeorder/business-type/gifts",
  },
];
const StoreDropdown = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <DropdownMenu>
      {/* Dropdown Trigger */}
      <DropdownMenuTrigger className="text-gray-700 focus:outline-none flex">
        {t.navbar.businessType}
        <ChevronDown className="w-5 h-full  my-auto flex justify-center items-center" />
      </DropdownMenuTrigger>

      {/* Dropdown Content */}
      <DropdownMenuContent className="w-full sm:w-64">
        {storeItems.map((item) => (
          <DropdownMenuItem
            key={item.name}
            className={`${
              item.isSelected ? "bg-blue-600 text-white" : "text-gray-700"
            } hover:bg-blue-500 hover:text-white transition-colors`}
            asChild
          >
            <a href={item.href} className="w-full">
              {language == "en" ? item.name : item.nameFr}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default StoreDropdown;
