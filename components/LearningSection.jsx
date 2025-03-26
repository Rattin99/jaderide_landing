"use client";
import { LanguageContext } from "@/lib/LanguageContext";
import { translations } from "@/public/language/language";
import Image from "next/image";
import { useContext } from "react";

const LearningSection = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  return (
    <div className="w-full">
      {/* Starter Guide Section */}
      <section className="text-center px-4 md:py-12">
        <h2 className="text-xl md:text-2xl font-semibold">
          {t.learningCenter.starterGuideTitle}
        </h2>
        <p className="text-gray-600 mt-2">
          {t.learningCenter.starterguidesubtitle}
        </p>
        <div className="mt-6 w-full flex flex-col md:flex-row items-stretch justify-center gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg max-w-sm flex-1 flex flex-col">
            <Image
              src="/jadeorder/learn1.jpg"
              alt="Guide 1"
              width={300}
              height={200}
              className="rounded-md rounded-b-none w-full h-2/3 object-cover"
            />
            <div className="p-4 text-left flex-1 flex flex-col">
              <h3 className="text-lg font-semibold mt-3">
                {t.learningCenter.card1Title}
              </h3>
              <p className="text-gray-600 text-sm mt-2 flex-1">
                {t.learningCenter.card1description}
              </p>
              <div className="text-blue-600 mt-3 text-sm font-medium">
                <a href="https://drive.google.com/file/d/1OZhcjszY1D0KL2AsLhrRnxSeH3uWrvHX/view?usp=sharing">
                  {t.learningCenter.readmore} →
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg max-w-sm flex-1 flex flex-col">
            <Image
              src="/jadeorder/learn2.png"
              alt="Guide 2"
              width={300}
              height={200}
              className="rounded-md rounded-b-none w-full overflow-hidden object-cover"
            />
            <div className="p-4 text-left flex-1 flex flex-col">
              <h3 className="text-lg font-semibold mt-3">
                {t.learningCenter.card2Title}
              </h3>
              <p className="text-gray-600 text-sm mt-2 flex-1">
                {t.learningCenter.card2description}{" "}
              </p>
              <div className="text-blue-600 mt-3 text-sm font-medium">
                <a href="https://drive.google.com/file/d/1OZhcjszY1D0KL2AsLhrRnxSeH3uWrvHX/view?usp=sharing">
                  {t.learningCenter.readmore} →
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg max-w-sm flex-1 flex flex-col">
            <Image
              src="/jadeorder/learn3.png"
              alt="Guide 3"
              width={300}
              height={200}
              className="rounded-md rounded-b-none w-full object-cover overflow-hidden"
            />
            <div className="p-4 text-left flex-1 flex flex-col">
              <h3 className="text-lg font-semibold mt-3">
                {t.learningCenter.card3Title}
              </h3>
              <p className="text-gray-600 text-sm mt-2 flex-1">
                {t.learningCenter.card3description}{" "}
              </p>
              <div className="text-blue-600 mt-3 text-sm font-medium">
                <a href="https://drive.google.com/file/d/1OZhcjszY1D0KL2AsLhrRnxSeH3uWrvHX/view?usp=sharing">
                  {t.learningCenter.readmore} →
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="bg-blue-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/jadeorder/train.png"
            alt="Training"
            width={600}
            height={450}
            className="rounded-lg"
          />
          <div>
            <h3 className="text-4xl font-semibold">
              {t.learningCenter.trainTitle}
            </h3>
            <p className="mt-2 text-xl text-gray-200">
              {t.learningCenter.trainDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Jade Media Roots Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-8">
          <Image
            src="/jadeorder/employee.jpg"
            alt="Roots"
            width={600}
            height={450}
            className="rounded-lg"
          />
          <div>
            <h3 className="text-4xl font-semibold">
              {t.learningCenter.rootsTitle}
            </h3>
            <p className="mt-2 text-xl text-gray-600">
              {t.learningCenter.rootsDescription}{" "}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningSection;
