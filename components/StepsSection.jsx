"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { LanguageContext } from "@/lib/LanguageContext";
import { translations } from "@/public/language/language";

export default function StepsSection() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const steps = [
    {
      title: "Submit the form",
      description:
        "Fill out the brief form and someone from our team will reach out to you within 1-2 business days.",
      title_fr: "Soumettre le formulaire",
      description_fr:
        "Remplissez le formulaire bref et quelqu'un de notre équipe vous contactera dans les 1-2 jours ouvrables.",
      image: "jadeorder/image1.png",
    },
    {
      title: "Chat with our team",
      description:
        "Our team of experts will discuss the best option to join the JMD network.",
      title_fr: "Discutez avec notre équipe",
      description_fr:
        "Notre équipe d'experts discutera de la meilleure option pour rejoindre le réseau JMD.",
      image: "jadeorder/image2.png",
    },
    {
      title: "Onboarding",
      description:
        "Set up your tablet and banking details with our step-by-step instructions and interactive onboarding journey.",
      title_fr: "Intégration",
      description_fr:
        "Configurez votre tablette et vos coordonnées bancaires avec nos instructions étape par étape et un parcours d'intégration interactif.",
      image: "jadeorder/image3.png",
    },
    {
      title: "Build your product catalogue",
      description:
        "Our intuitive merchant platform makes getting your product offering live in the app quick and easy.",
      title_fr: "Créez votre catalogue de produits",
      description_fr:
        "Notre plateforme marchande intuitive rend la mise en ligne de votre offre de produits rapide et facile.",
      image: "jadeorder/image4.png",
    },
    {
      title: "Start making money",
      description:
        "Tap into untapped revenue from hundreds of customers looking for the convenience of delivery across Canada.",
      title_fr: "Commencez à gagner de l'argent",
      description_fr:
        "Accédez à des revenus inexploités provenant de centaines de clients à la recherche de la commodité de la livraison à travers le Canada.",
      image: "jadeorder/image5.png",
    },
  ];
  // Keen-slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      {/* Section Heading */}
      <h2 className="mb-8 text-center text-2xl text-gray-700 font-semibold sm:text-3xl">
        {t.stepsSection.title}
      </h2>

      {/* Desktop Layout (hidden on mobile) */}
      <div className="hidden md:grid md:grid-cols-5 md:gap-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center space-y-3"
          >
            <div className="relative mb-2 h-32 w-32">
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg ">
              {language == "en" ? step.title : step.title_fr}
            </h3>
            <p className="text-sm text-muted-foreground">
              {language == "en" ? step.description : step.description_fr}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile Carousel (hidden on desktop) */}
      <div className="md:hidden">
        <div ref={sliderRef} className="keen-slider">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="keen-slider__slide flex flex-col items-center px-8 py-6 text-center"
            >
              <div className="relative mb-3 h-32 w-32">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold">
                {language == "en" ? step.title : step.title_fr}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language == "en" ? step.description : step.description_fr}
              </p>
            </div>
          ))}
        </div>

        {/* Dots (carousel indicators) */}
        <div className="mt-4 flex justify-center gap-2">
          {steps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === idx ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
