"use client";

import React, { useContext, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LanguageContext } from "@/lib/LanguageContext";
import { translations } from "@/public/language/language";

const options = [
  {
    id: 1,
    image: "/gain.png",
    title: "Gain the most new customers and new orders.",
    title_fr: "Gagnez le plus de nouveaux clients et de nouvelles commandes.",
  },
  {
    id: 2,
    image: "/piggybank.png",
    title:
      "Get Jade Media Delivery solutions at a lower cost, even if it means fewer sales or customers",
    title_fr:
      "Obtenez les solutions Jade Media Delivery à un coût réduit, même si cela signifie moins de ventes ou de clients.",
  },
];

const QuizSection = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:gap-12 lg:gap-24">
        {/* Text Section */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h1 className="text-2xl md:text-3xl text-gray-700 font-semibold  mb-4">
            {t.quizSection.title}
          </h1>
          <p className="text-lg text-gray-700 mb-2">{t.quizSection.subtitle}</p>
          <p className="text-sm text-gray-500">{t.quizSection.select}</p>
        </div>

        {/* Options Section */}
        <div className="md:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {options.map((option) => (
              <Card
                key={option.id}
                className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                  selectedOption === option.id
                    ? "border-2 border-blue-600"
                    : "border border-gray-200"
                }`}
                onClick={() => setSelectedOption(option.id)}
              >
                <CardContent className="p-6">
                  <div className="relative">
                    {selectedOption === option.id && (
                      <div className="absolute -top-1 -left-1 w-5 h-5 bg-blue-800 rounded-full flex items-center justify-center">
                        <div className="w-2.5 h-2.5 bg-white rounded-full" />
                      </div>
                    )}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                        <img
                          src={option.image}
                          alt={option.title}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <p className="text-gray-800 text-sm md:text-base">
                        {language == "en" ? option.title : option.title_fr}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizSection;
