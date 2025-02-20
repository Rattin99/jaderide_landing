"use client";
import { LanguageContext } from "@/lib/LanguageContext";
import { translations } from "@/public/language/language";
import {
  Coffee,
  PawPrint,
  ShoppingCart,
  Store,
  Flower,
  HeartPulse,
  Gift,
  Cake,
  BookOpen,
  Salad,
} from "lucide-react";
import { useContext } from "react";

const DeliverySolutions = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const solutions = [
    {
      icon: <Salad className="w-5 h-5 text-blue-800" />,
      label: "Restaurants",
      labelFr: "Restaurants",
    },
    {
      icon: <Coffee className="w-5 h-5 text-blue-800" />,
      label: "Coffee Shop",
      labelFr: "Café",
    },
    {
      icon: <ShoppingCart className="w-5 h-5 text-blue-800" />,
      label: "Grocery Store",
      labelFr: "Épicerie",
    },
    {
      icon: <Store className="w-5 h-5 text-blue-800" />,
      label: "Retail Store",
      labelFr: "Magasin de détail",
    },
    {
      icon: <HeartPulse className="w-5 h-5 text-blue-800" />,
      label: "Pharmacy",
      labelFr: "Pharmacie",
    },
    {
      icon: <Flower className="w-5 h-5 text-blue-800" />,
      label: "Flower Shop",
      labelFr: "Fleuriste",
    },
    {
      icon: <PawPrint className="w-5 h-5 text-blue-800" />,
      label: "Pet Store",
      labelFr: "Animalerie",
    },
    {
      icon: <Cake className="w-5 h-5 text-blue-800" />,
      label: "Bakery & Pastry Shop",
      labelFr: "Boulangerie & Pâtisserie",
    },
    {
      icon: <BookOpen className="w-5 h-5 text-blue-800" />,
      label: "Bookstore",
      labelFr: "Librairie",
    },
    {
      icon: <Gift className="w-5 h-5 text-blue-800" />,
      label: "Gift Shop",
      labelFr: "Boutique de cadeaux",
    },
  ];

  return (
    <div className="px-4 mb-36 md:px-12 bg-white">
      <div className=" p-4  md:py-16 rounded-md bg-blue-800">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          {t.deliverySolutions.title}
        </h2>

        {/* Mobile: 2 boxes per row */}
        <div className="grid grid-cols-2 gap-4 lg:hidden">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="flex justify-center items-center py-2 px-10 bg-white rounded-lg shadow-sm"
            >
              <div className="mr-2">{solution.icon}</div>
              <p className="text-sm  text-nowrap text-center text-gray-800">
                {language == "en" ? solution.label : solution.labelFr}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop: 3-4-3 rows with centered alignment */}
        <div className="hidden lg:block">
          {/* First Row: 3 Boxes */}
          <div className="flex justify-center gap-6 mb-6">
            {solutions.slice(0, 3).map((solution, index) => (
              <div
                key={index}
                className="flex items-center py-2 px-10 bg-white rounded-lg shadow-sm"
              >
                <div className="mr-2">{solution.icon}</div>
                <p className="text-sm font-medium text-gray-800">
                  {language == "en" ? solution.label : solution.labelFr}
                </p>
              </div>
            ))}
          </div>

          {/* Second Row: 4 Boxes */}
          <div className="flex justify-center gap-6 mb-6">
            {solutions.slice(3, 7).map((solution, index) => (
              <div
                key={index}
                className="flex items-center py-2 px-10 bg-white rounded-lg shadow-sm"
              >
                <div className="mr-2">{solution.icon}</div>
                <p className="text-sm font-medium text-gray-800">
                  {language == "en" ? solution.label : solution.labelFr}
                </p>
              </div>
            ))}
          </div>

          {/* Third Row: 3 Boxes */}
          <div className="flex justify-center gap-6">
            {solutions.slice(7, 10).map((solution, index) => (
              <div
                key={index}
                className="flex items-center py-2 px-10 bg-white rounded-lg shadow-sm"
              >
                <div className="mr-2">{solution.icon}</div>
                <p className="text-sm font-medium text-gray-800">
                  {language == "en" ? solution.label : solution.labelFr}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverySolutions;
