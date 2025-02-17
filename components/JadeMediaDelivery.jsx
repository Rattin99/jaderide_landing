"use client";
import { LanguageContext } from "@/lib/LanguageContext";
import { translations } from "@/public/language/language";
import Image from "next/image";
import { useContext } from "react";

const JadeMediaDelivery = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  return (
    <div className="bg-white p-6 lg:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Section 1: Get the most out of Jade Media Delivery */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12 mb-12">
          <div className="lg:w-1/2 flex justify-center w-[400px] h-[300px] overflow-hidden">
            <Image
              src="/image.jpg"
              alt="Jade Media Delivery"
              width={400}
              height={200}
              className="rounded-lg shadow-lg object-cover object-center"
            />
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t.jadeMediaDelivery.title}
            </h2>
            <p className="text-gray-700 mb-6">
              {t.jadeMediaDelivery.description.part1}
            </p>
            <p className="text-gray-700 mb-6">
              {t.jadeMediaDelivery.description.part2}
            </p>
            <a
              href="#"
              className="inline-block bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t.jadeMediaDelivery.button}
            </a>
          </div>
        </div>

        {/* Section 2: Explore insights you can use */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          <div className="lg:w-1/2 order-2 lg:order-1 mt-6 lg:mt-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t.jadeMediaDelivery.explore}
            </h2>
            <p className="text-gray-700 mb-6">
              {t.jadeMediaDelivery.exploreText}
            </p>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <Image
              src="/dashboard.png"
              alt="Dashboard Insights"
              width={600}
              height={400}
              className="rounded-lg shadow-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JadeMediaDelivery;
