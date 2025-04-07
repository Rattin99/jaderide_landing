"use client";
import React from "react";
import { useContext } from "react";
import { LanguageContext } from "@/lib/LanguageContext";
import { translations } from "@/public/language/language";

const JadeOrdersComponent = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  return (
    <div className="max-w-6xl mx-auto px-4 py-24 ">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between mb-16">
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pr-8">
          {language === "en" && (
            <h2 className="text-2xl md:text-3xl text-gray-700 font-bold mb-2">
              Pick the <span className="text-blue-600">best plan</span> for your
              store
            </h2>
          )}
          {language === "fr" && (
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Choisissez le <span className="text-blue-600">meilleur plan</span>{" "}
              pour votre magasin
            </h2>
          )}
          <p className="text-gray-700 mb-6">{t.solutions.subtitle}</p>
          <a
            href="/jadeorder/"
            className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium"
          >
            {t.solutions.button}
          </a>
          <p className="text-gray-600 text-sm mt-3">{t.solutions.alreadyOn}</p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/jadeorder/solutionhero.png"
            alt="Coffee shop owner behind counter"
            className="rounded-lg w-full"
          />
        </div>
      </div>

      {/* Admin Panels Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-16">
        <div className="w-full mx-auto mr-20 md:w-1/2">
          <img
            src="/jadeorder/solution1.png"
            alt="Admin dashboard interface"
            className="w-full h-full mx-auto rounded-lg"
          />
        </div>
        <div className="w-full md:py-20 md:w-1/2 mt-8 md:mt-0 md:pl-8">
          <div className="">
            <h3 className="text-xl text-gray-700 font-bold ">
              {t.solutions.adminPanel.superAdminPanel}
            </h3>
            <div className="flex items-center mb-2">
              <div className="p-1 rounded mr-2">
                <img
                  src="/jadeorder/bag.png"
                  alt="Lock icon"
                  className="h-16 w-16"
                />
              </div>
              <p className="text-gray-600">
                {t.solutions.adminPanel.superAdminPanelDesc}
              </p>
            </div>
          </div>

          <div className="">
            <h3 className="text-xl text-gray-700 font-bold ">
              {t.solutions.adminPanel.adminPanelMerchants}
            </h3>
            <div className="flex items-center mb-2">
              <div className=" p-1 rounded mr-2">
                <img
                  src="/jadeorder/bag.png"
                  alt="Lock icon"
                  className="h-16 w-16"
                />
              </div>
              <p className="text-gray-700">
                {t.solutions.adminPanel.adminPanelMerchantsDesc}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl text-gray-700 font-bold">
              {t.solutions.adminPanel.customerWebsite}
            </h3>
            <div className="flex items-center mb-2">
              <div className="p-1 rounded mr-2">
                <img
                  src="/jadeorder/bag.png"
                  alt="Lock icon"
                  className="h-16 w-16"
                />{" "}
              </div>
              <p className="text-gray-600">
                {t.solutions.adminPanel.customerWebsiteDesc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Apps Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pr-8">
          <div className="">
            <h3 className="text-xl text-gray-700 font-bold ">
              Jade Orders Merchant
            </h3>
            <div className="flex items-center mb-2">
              <div className="p-1 rounded mr-2">
                <img
                  src="/jadeorder/bag.png"
                  alt="Lock icon"
                  className="h-16 w-16"
                />
              </div>
              <p className="text-gray-600">
                {t.solutions.adminPanel.merchantApp}
              </p>
            </div>
          </div>

          <div className="">
            <h3 className="text-xl text-gray-700 font-bold">
              Jade Orders Customer
            </h3>
            <div className="flex items-center mb-2">
              <div className="p-1 rounded mr-2">
                <img
                  src="/jadeorder/bag.png"
                  alt="Lock icon"
                  className="h-16 w-16"
                />
              </div>
              <p className="text-gray-700">
                {t.solutions.adminPanel.customerApp}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl text-gray-600 font-bold ">
              Jade Orders Rider
            </h3>
            <div className="flex items-center mb-2">
              <div className="p-1 rounded mr-2">
                <img
                  src="/jadeorder/bag.png"
                  alt="Lock icon"
                  className="h-16 w-16"
                />
              </div>
              <p className="text-gray-700">{t.solutions.adminPanel.riderApp}</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/jadeorder/solution2.png"
            alt="Mobile applications on different devices"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default JadeOrdersComponent;
