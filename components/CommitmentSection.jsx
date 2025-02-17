"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { LanguageContext } from "@/lib/LanguageContext";
import { translations } from "@/public/language/language";

export default function CommitmentSection() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  return (
    <div className="bg-white px-4 mb-20 md:px-12">
      <section className="bg-blue-800 py-10 text-white rounded-md">
        <div className="mx-auto max-w-7xl px-4 text-center">
          {/* Section heading */}
          <h2 className="mb-2 text-2xl font-bold sm:text-3xl">
            {t.commitmentSection.title}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-100">
            {t.commitmentSection.description}
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-lg bg-white p-6 text-black">
              <div className="relative mx-auto mb-4 h-16 w-16">
                <Image
                  src="/grocery.png"
                  alt="Grocery"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="mb-2 text-lg font-semibold">
                {t.commitmentSection.grocery.title}
              </h3>
              <p className="mb-4 text-sm">{t.commitmentSection.description}</p>
              <button className="rounded bg-blue-800 px-4 py-2 text-white hover:bg-blue-700">
                {t.commitmentSection.grocery.button}
              </button>
            </div>

            {/* Card 2 */}
            <div className="rounded-lg bg-white p-6 text-black">
              <div className="relative mx-auto mb-4 h-16 w-16">
                <Image
                  src="/convenience.png"
                  alt="Convenience"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="mb-2 text-lg font-semibold">
                {t.commitmentSection.convenience.title}
              </h3>
              <p className="mb-4 text-sm">
                {t.commitmentSection.convenience.description}
              </p>
              <button className="rounded bg-blue-800 px-4 py-2 text-white hover:bg-blue-700">
                {t.commitmentSection.convenience.button}
              </button>
            </div>

            {/* Card 3 */}
            <div className="rounded-lg bg-white p-6 text-black">
              <div className="relative mx-auto mb-4 h-16 w-16">
                <Image
                  src="/shopping-items.png"
                  alt="Retail Shops"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="mb-2 text-lg font-semibold">
                {t.commitmentSection.retail.title}
              </h3>
              <p className="mb-4 text-sm">
                {t.commitmentSection.retail.description}
              </p>
              <button className="rounded bg-blue-800 px-4 py-2 text-white hover:bg-blue-700">
                {t.commitmentSection.retail.button}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
