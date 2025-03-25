"use client";

import Image from "next/image";
import { useContext } from "react";
import { LanguageContext } from "@/lib/LanguageContext";
import { translations } from "@/public/language/language";
const LearningCenter = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  return (
    <section className="w-full h-full z-10 py-28  ">
      {/* Intro Section */}
      <div className="max-w-7xl  h-full mx-auto text-center md:text-left md:flex md:items-center md:gap-10">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold">
            {t.learningCenter.welcome}
            <span className="text-blue-600">
              {t.learningCenter.learningCenter}
            </span>
          </h2>
          <p className="text-gray-600 mt-3">
            {t.learningCenter.welcomeSubtitle}{" "}
          </p>
        </div>
        <div className="md:w-1/2 flex items-center justify-center mt-6 md:mt-0">
          <Image
            src="/jadeorder/biker.png"
            alt="Delivery Person on Bike"
            width={500}
            height={200}
            className="rounded-lg object-cover h-[500px] overflow-hidden"
          />
        </div>
      </div>
      {/* Navigation Tabs */}
      <div className="w-full   mt-8 overflow-x-auto no-scrollbar">
        <div className="bg-blue-50  pr-96 flex flex-nowrap justify-start whitespace-nowrap max-w-7xl mx-auto rounded-lg no-scrollbar ">
          <button className="px-4  bg-blue-800  text-white rounded-l-sm rounded-r-full ">
            {t.learningCenter.learningCenter}
          </button>
          <button className="px-4 py-2 text-gray-700">
            {t.learningCenter.buttons.getStarted}
          </button>
          <button className="px-4 py-2 text-gray-700">
            {t.learningCenter.menuSetup}
          </button>
          <button className="px-4 py-2 text-gray-700">
            {t.learningCenter.buttons.manageOrders}
          </button>
          <button className="px-4 py-2 text-gray-700">
            {t.learningCenter.buttons.storeManagement}
          </button>
          <button className="px-4 py-2 text-gray-700">
            {t.learningCenter.buttons.waysToGrow}
          </button>
        </div>
      </div>{" "}
      {/* Tablet Setup Section */}
      <div className="w-full bg-blue-50 p-5 mt-20">
        {" "}
        <div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row md:items-center md:gap-10">
          <div className="md:w-1/2 order-2 md:order-1">
            <h3 className="text-xl md:text-3xl font-bold">
              {t.learningCenter.tablet}
            </h3>
            <p className="text-gray-600 mt-3">
              {t.learningCenter.tabletDescription}
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <Image
              src="/jadeorder/cheftablet.png"
              alt="Chef using tablet"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningCenter;
