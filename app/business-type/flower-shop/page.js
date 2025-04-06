"use client";
import Image from "next/image";
import BusinessHero from "@/components/BusinessHero";
import { translations } from "@/public/language/language";
import { useContext } from "react";
import { LanguageContext } from "@/lib/LanguageContext";
const RestaurantDelivery = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  return (
    <div className=" min-h-screen py-10 ">
      <BusinessHero imgSrc={"/jadeorder/flowerhero.png"} />
      <div className="bg-blue-50 py-10 mb-20">
        <h1 className="text-3xl text-gray-700 sm:text-2xl lg:text-3xl font-bold text-center mb-12">
          {t.businessTypes.titles.restaurant}
        </h1>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl p-5 mx-auto">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <Image
                src="/jadeorder/Simplemenumanagement.png"
                alt="Setup Icon"
                width={64}
                height={64}
                className="w-24 h-24"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">
              {t.businessTypes.steps.title1}
            </h2>
            <p className="text-gray-600">
              {t.businessTypes.steps.description1}
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <Image
                src="/jadeorder/Trackliveorders.png"
                alt="Receive Icon"
                width={48}
                height={48}
                className="w-24 h-24"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">
              {t.businessTypes.steps.title2}
            </h2>
            <p className="text-gray-600">
              {t.businessTypes.steps.description2}
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <Image
                src="/jadeorder/Bagimage.png"
                alt="Partner Icon"
                width={48}
                height={48}
                className="w-24 h-24"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">
              {t.businessTypes.steps.title3}
            </h2>
            <p className="text-gray-600">
              {t.businessTypes.steps.description3}{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 p-5">
          <div className="w-full lg:w-1/2">
            <Image
              src="/jadeorder/flower1.png"
              alt="Delivery person handing over a bag"
              width={600}
              height={400}
              className="w-full h-auto md:rounded-lg shadow-md"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl text-gray-700 font-semibold mb-4">
              {t.businessTypes.copy.title1}
            </h3>
            <p className="text-gray-600">{t.businessTypes.copy.description1}</p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 p-5">
          <div className="w-full lg:w-1/2">
            <Image
              src="/jadeorder/flower2.png"
              alt="Restaurant staff working on a laptop"
              width={600}
              height={400}
              className="w-full h-auto md:rounded-lg shadow-md"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl text-gray-700 font-semibold mb-4">
              {t.businessTypes.copy.title2}
            </h3>
            <p className="text-gray-600">
              {t.businessTypes.copy.description2}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDelivery;
