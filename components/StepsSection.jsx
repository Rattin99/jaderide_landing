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
      image: "/jadeorder/image1.png",
    },
    {
      title: "Chat with our expert",
      description:
        "A member of our team will contact you to answer all your questions and to help you choose the best solution for your business.",
      title_fr: "Discutez avec notre expert",
      description_fr:
        "Un membre de notre équipe vous contactera pour répondre à toutes vos questions et vous aider à choisir la meilleure solution pour votre entreprise.",
      image: "/jadeorder/image2.png",
    },
    {
      title: "Set up your account",
      description:
        "Get your images, banners, and logo ready to set up your account within minutes. We have step-by-step guides for you to follow easily.",
      title_fr: "Configurez votre compte",
      description_fr:
        "Préparez vos images, bannières et logo pour configurer votre compte en quelques minutes. Nous avons des guides étape par étape faciles à suivre.",
      image: "/jadeorder/image3.png",
    },
    {
      title: "Add your products",
      description:
        "Through your personalized admin panel, you can create your product catalogue. They will be instantly available once your app is live.",
      title_fr: "Ajoutez vos produits",
      description_fr:
        "Grâce à votre panneau d'administration personnalisé, vous pouvez créer votre catalogue de produits. Ils seront instantanément disponibles une fois votre application en ligne.",
      image: "/jadeorder/image4.png",
    },
    {
      title: "Promote your app",
      description:
        "Display your app everywhere in your store and online. Invite your customers to download it and start seeing results.",
      title_fr: "Faites la promotion de votre application",
      description_fr:
        "Affichez votre application partout dans votre magasin et en ligne. Invitez vos clients à la télécharger et commencez à voir des résultats.",
      image: "/jadeorder/image5.png",
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
