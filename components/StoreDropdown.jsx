// components/StoreDropdown.jsx
"use client"; // Since we're using client-side interactivity

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDown } from "lucide-react"; // Icon for the dropdown trigger

const storeItems = [
  { name: "Restaurant", href: "/jadeorder/business-type/resturant" },
  { name: "Grocery Store", href: "/jadeorder/business-type/grocery-store" },
  {
    name: "Coffee Shop",
    href: "/jadeorder/business-type/coffee-shop",
    isSelected: true,
  },
  { name: "Retail Store", href: "/jadeorder/business-type/retail-store" },
  { name: "Flower Shop", href: "/jadeorder/business-type/flower-shop" },
  { name: "Pet Shop", href: "/jadeorder/business-type/pet-shop" },
  { name: "Convenience", href: "/jadeorder/business-type/convenience" },
  { name: "Pharmacy", href: "/jadeorder/business-type/pharmacy" },
  { name: "Bakeries", href: "/jadeorder/business-type/bakeries" },
  { name: "Book Store", href: "/jadeorder/business-type/book-store" },
  { name: "Gifts", href: "/jadeorder/business-type/gifts" },
];
const StoreDropdown = () => {
  const selectedItem =
    storeItems.find((item) => item.isSelected) || storeItems[0];

  return (
    <DropdownMenu>
      {/* Dropdown Trigger */}
      <DropdownMenuTrigger className="text-gray-700 focus:outline-none flex">
        Business Type
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
              {item.name}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default StoreDropdown;
