"use client";

import React, { useContext } from "react";
import { LanguageContext } from "@/lib/LanguageContext";
import { translations } from "@/public/language/language";

export default function DeliverSections() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section className="w-full bg-blue-50 py-24">
      <div className="w-full mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl w-full text-gray-700 font-semibold tracking-tight lg:text-4xl">
            {t.deliverSection.title}
          </h2>
          <p className="mt-4 text-gray-600 w-full mx-auto">
            {t.deliverSection.description}
          </p>
        </div>

        <div className="flex flex-col items-center w-full gap-8 lg:flex-row">
          <div className="lg:w-1/2 w-full h-full">
            <div className="lg:max-w-xl w-full px-4 mx-auto">
              <h3 className="text-3xl text-gray-700 font-semibold mb-4">
                {t.deliverSection.growth.title}
              </h3>
              <p className="text-gray-600 text-xl leading-relaxed">
                {t.deliverSection.growth.description}
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/increase.png"
              alt="Increase"
              className="max-w-full h-auto rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
