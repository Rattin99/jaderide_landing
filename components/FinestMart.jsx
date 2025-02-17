"use client";
import React, { useContext, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Users,
  Clock,
  Megaphone,
  HeadphonesIcon,
  Settings,
} from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { LanguageContext } from "@/lib/LanguageContext";
import { translations } from "@/public/language/language";

const features = [
  {
    icon: Shield,
    title: "A trusted delivery partner.",
    titleFr: "Un partenaire de livraison de confiance.",
    description:
      "Over 10 years of experience delivering goods to Canadians across the country.",
    descriptionFr:
      "Plus de 10 ans d'expérience dans la livraison de marchandises aux Canadiens à travers le pays.",
  },
  {
    icon: Users,
    title: "1 in 4 Canadians order with JMD",
    titleFr: "1 Canadien sur 4 commande avec JMD",
    description:
      "Over 10 years of experience delivering goods to Canadians across the country.",
    descriptionFr:
      "Plus de 10 ans d'expérience dans la livraison de marchandises aux Canadiens à travers le pays.",
  },
  {
    icon: Clock,
    title: "30-minute average delivery time.",
    titleFr: "Temps de livraison moyen de 30 minutes.",
    description:
      "Seamless delivery of your product to a customer's door in their moment of need.",
    descriptionFr:
      "Livraison fluide de votre produit à la porte d'un client au moment où il en a besoin.",
  },
  {
    icon: Megaphone,
    title: "Amplify your reach.",
    titleFr: "Amplifiez votre portée.",
    description:
      "Join over 50k other JMD partners attracting new customers from a pool of 5.3+ million Canadians in more than 190 delivery zones across the country.",
    descriptionFr:
      "Rejoignez plus de 50 000 autres partenaires JMD attirant de nouveaux clients parmi plus de 5,3 millions de Canadiens dans plus de 190 zones de livraison à travers le pays.",
  },
  {
    icon: HeadphonesIcon,
    title: "Account support when you need it",
    titleFr: "Support de compte quand vous en avez besoin.",
    description: "A dedicated team of experts to support all your needs.",
    descriptionFr:
      "Une équipe dédiée d'experts pour répondre à tous vos besoins.",
  },
  {
    icon: Settings,
    title: "Self-serve management tools.",
    titleFr: "Outils de gestion en libre-service.",
    description:
      "Confidently manage and grow your business with a wide range of powerful marketing tools and customer insights at your disposal.",
    descriptionFr:
      "Gérez et développez votre entreprise en toute confiance avec une large gamme d'outils marketing puissants et d'analyses clients à votre disposition.",
  },
];
const FinestMart = () => {
  // Keen Slider for mobile carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    slides: { perView: 1 },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div className="w-full h-full   p-10 md:p-40">
      <div className="flex flex-col md:flex-row items-center">
        {/* Hero Image Section */}
        <div className="w-full md:w-1/3 mb-16 flex flex-col justify-center items-center">
          <h2 className="text-2xl md:text-xl w-full font-bold  md:text-start text-center">
            {t.finestMart.title}
          </h2>
          {/* Flex container for images */}
          <div className="">
            <img
              src="merged.png"
              alt="Delivery Service Interface"
              className="rounded-lg md:w-full md:block hidden h-auto shadow-none"
            />
            <img
              src="merged_1.png"
              alt="Delivery Service Interface"
              className="rounded-lg md:w-full md:hidden h-auto"
            />
          </div>
        </div>

        {/* Features Grid - Desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:w-2/3">
          {features.map((feature, index) => (
            <Card key={index} className="w-15 h-15 border-none shadow-none">
              <CardContent className="p-6">
                <feature.icon className="w-8 h-8 text-blue-800 mb-4" />
                <h3 className="font-semibold mb-2">
                  {language == "en" ? feature.title : feature.titleFr}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language == "en"
                    ? feature.description
                    : feature.descriptionFr}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Features Carousel - Mobile */}
      <div className="md:hidden">
        <div ref={sliderRef} className="keen-slider">
          {features.map((feature, index) => (
            <div key={index} className="keen-slider__slide">
              <Card className="border-none shadow-none">
                <CardContent className="p-6 flex flex-col justify-center items-center text-center">
                  {React.createElement(feature.icon, {
                    className: "w-6 h-6  text-blue-800 mb-4",
                  })}
                  <h3 className="font-semibold mb-2">
                    {language == "en" ? feature.title : feature.titleFr}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language == "en"
                      ? feature.description
                      : feature.descriptionFr}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => slider.current?.moveToSlide(index)}
              className={`w-8 h-1 rounded-full transition-colors ${
                currentSlide === index ? "bg-blue-800" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinestMart;
