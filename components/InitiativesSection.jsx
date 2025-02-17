"use client";

import React, { useContext, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"; // Import shadcn/ui Card components
import { translations } from "@/public/language/language";
import { LanguageContext } from "@/lib/LanguageContext";

const InitiativesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    loop: true,
    breakpoints: {
      "(min-width: 1024px)": {
        disabled: true, // Disable slider on larger screens
      },
    },
  });

  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const initiatives = [
    {
      image: "/womanTab.jpg",
      title: "Healthcare, Hiring and Training Benefits",
      description:
        "We’ve teamed up with companies like 7shifts and Edgap to offer custom discounts on valuable services.",
      cta: "Benefits & discounts",
      title_fr:
        "Avantages en matière de soins de santé, de recrutement et de formation",
      description_fr:
        "Nous nous sommes associés à des entreprises comme 7shifts et Edgap pour offrir des réductions personnalisées sur des services précieux.",
      cta_fr: "Avantages & réductions",
    },
    {
      image: "/chef.jpg",
      title: "Chief Restaurant Advisor",
      description:
        "The Chief Restaurant Advisor regularly meets with Jade Media Delivery leaders, employees, and local restaurateurs, hosting industry roundtables, attending strategy meetings, and providing feedback on products and services.",
      cta: "About Mitchell Stark",
      title_fr: "Conseiller principal en restauration",
      description_fr:
        "Le Conseiller principal en restauration rencontre régulièrement les leaders de Jade Media Delivery, les employés et les restaurateurs locaux, organisant des tables rondes industrielles, assistant à des réunions stratégiques et fournissant des retours sur les produits et services.",
      cta_fr: "À propos de Mitchell Stark",
    },
    {
      image: "/manTable.jpg",
      title: "Disaster Relief Fund",
      description:
        "We aim to reduce the financial burden on small businesses following a natural disaster with access to $10,000 grants, helping keep their doors open.",
      cta: "Apply NOW",
      title_fr: "Fonds de secours en cas de catastrophe",
      description_fr:
        "Nous visons à réduire le fardeau financier des petites entreprises après une catastrophe naturelle en offrant un accès à des subventions de 10 000 $, les aidant à maintenir leurs portes ouvertes.",
      cta_fr: "Postuler MAINTENANT",
    },
  ];
  return (
    <div className="bg-white px-4 md:px-12">
      <div className="bg-blue-800 p-8 rounded-md">
        <h2 className="text-3xl  font-semibold text-center text-white mb-8">
          {t.initiativeSection.mainTitle}
        </h2>
        <p className="text-center text-white mb-12">
          {t.initiativeSection.mainDescription}
        </p>

        {/* Desktop Layout (Grid) */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6 lg:max-w-7xl lg:mx-auto">
          {initiatives.map((initiative, index) => (
            <Card
              key={index}
              className="w-full p-4 max-w-[400px] mx-auto bg-white"
            >
              <img
                src={initiative.image}
                alt={initiative.title}
                className="w-full h-48 rounded object-cover"
              />
              <CardHeader className="p-2">
                <CardTitle className="text-xl font-semibold">
                  {language == "en" ? initiative.title : initiative.title_fr}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-2">
                <CardDescription className="text-gray-600 mb-6">
                  {language == "en"
                    ? initiative.description
                    : initiative.description_fr}
                </CardDescription>
                <button className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  {language == "en" ? initiative.cta : initiative.cta_fr}
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Layout (Carousel) */}
        <div className="lg:hidden keen-slider" ref={sliderRef}>
          {initiatives.map((initiative, index) => (
            <div key={index} className="keen-slider__slide">
              <Card className="w-full  max-w-lg p-4 mx-auto bg-white">
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <CardHeader className="p-2">
                  <CardTitle className="text-xl font-semibold">
                    {initiative.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-2">
                  <CardDescription className="text-gray-600 pb-10 mb-6">
                    {initiative.description}
                  </CardDescription>
                  <button className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    {initiative.cta}
                  </button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Carousel Dots (Mobile Only) */}
        <div className="lg:hidden flex justify-center mt-6 space-x-2">
          {initiatives.map((_, idx) => (
            <button
              key={idx}
              onClick={() => slider.moveToSlideRelative(idx)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === idx ? "bg-blue-800" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InitiativesSection;
