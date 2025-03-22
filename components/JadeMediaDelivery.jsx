"use client";
import { LanguageContext } from "@/lib/LanguageContext";
import { translations } from "@/public/language/language";
import Image from "next/image";
import { useContext } from "react";

const JadeMediaDelivery = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  return (
    <div className="bg-white p-6 lg:p-12 ">
      <div className=" mx-auto">
        {/* Section 1: Get the most out of Jade Media Delivery */}
        <div className="w-full lg:py-20 py-5 bg-blue-800 rounded-md">
          <div className="flex flex-col lg:flex-row items-center  mb-12">
            <div className="lg:w-1/2  flex justify-center md:w-[600px] md:h-[400px] w-[300px] h-[200px] overflow-hidden">
              <Image
                src="/jadeorder/image.jpg"
                alt="Jade Media Delivery"
                width={600}
                height={500}
                className="rounded-lg ml-10 shadow-lg object-cover object-center overflow-hidden"
              />
            </div>
            <div className=" lg:w-1/2 lg:h-3/4 mx-10 my-5 lg:my-0 p-10 rounded-md bg-white ">
              <h2 className="text-3xl font-semibold text-gray-700  mb-6">
                {t.jadeMediaDelivery.title}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {t.jadeMediaDelivery.description.part1}
              </p>
              <p className="text-lg text-gray-700 mb-6">
                {t.jadeMediaDelivery.description.part2}
              </p>
              <a
                href="#"
                className="inline-block bg-blue-800 text-xl text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t.jadeMediaDelivery.button}
              </a>
            </div>
          </div>
        </div>
        {/* Section 2: Explore insights you can use */}
        <div className="max-w-7xl mx-auto mt-20">
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
            <div className="lg:w-1/2 order-2 lg:order-1 mt-6 lg:mt-0">
              <h2 className="text-3xl font-semibold text-gray-700 mb-6">
                {t.jadeMediaDelivery.explore}
              </h2>
              <p className="text-gray-700 mb-6">
                {t.jadeMediaDelivery.exploreText}
              </p>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <Image
                src="/jadeorder/dashboard.png"
                alt="Dashboard Insights"
                width={600}
                height={400}
                className="rounded-lg shadow-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JadeMediaDelivery;
