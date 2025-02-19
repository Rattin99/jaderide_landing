"use client";
import React, { useContext, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Currency,
  Trophy,
  TrendingUp,
  Calendar,
  Database,
  Megaphone,
} from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { LanguageContext } from "@/lib/LanguageContext";
import { translations } from "@/public/language/language";

const features = [
  {
    icon: Currency,
    title: "Cost Efficiency",
    titleFr: "Efficacité des coûts",
    description:
      "Avoid high commissions charged by third-party delivery services. Set your own service or delivery fees.",
    descriptionFr:
      "Évitez les commissions élevées des services de livraison tiers. Définissez vos propres frais de service ou de livraison.",
  },
  {
    icon: Trophy,
    title: "Competitive Advantage",
    titleFr: "Avantage concurrentiel",
    description:
      "You do not compete with all these other businesses that are on these third-party services.",
    descriptionFr:
      "Vous ne rivalisez pas avec toutes les autres entreprises présentes sur ces services tiers.",
  },
  {
    icon: TrendingUp,
    title: "Increased Revenue",
    titleFr: "Augmentation des revenus",
    description:
      "Promote additional items during the ordering process. Receive payments directly without waiting for third-party settlements.",
    descriptionFr:
      "Promouvez des articles supplémentaires lors du processus de commande. Recevez les paiements directement sans attendre les règlements des tiers.",
  },
  {
    icon: Calendar,
    title: "Operational Flexibility",
    titleFr: "Flexibilité opérationnelle",
    description:
      "Define your own delivery areas and times. Better manage delivery staff schedules and performance.",
    descriptionFr:
      "Définissez vos propres zones et horaires de livraison. Gérez mieux les plannings et la performance de votre personnel de livraison.",
  },
  {
    icon: Megaphone,
    title: "Marketing Opportunities",
    titleFr: "Opportunités marketing",
    description:
      "Use push notifications to inform customers about new dishes, menu changes, or promotions.",
    descriptionFr:
      "Utilisez les notifications push pour informer les clients des nouveaux plats, des changements de menu ou des promotions.",
  },
  {
    icon: Database,
    title: "Data Ownership",
    titleFr: "Propriété des données",
    description:
      "Access valuable customer data to implement loyalty programs that will encourage repeat business.",
    descriptionFr:
      "Accédez à des données clients précieuses pour mettre en place des programmes de fidélité qui encouragent la récurrence des achats.",
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
        <div className="w-full lg:w-1/3 mb-16 flex flex-col justify-center items-center">
          {language == "en" && (
            <h2 className="text-2xl lg:text-3xl w-full text-gray-700 font-semibold  lg:text-start text-center">
              {t.finestMart.title}
            </h2>
          )}
          {language == "fr" && (
            <h2 className="text-2xl lg:text-xl w-full text-gray-700 font-semibold  lg:text-start text-center">
              {t.finestMart.title}
            </h2>
          )}
          {/* Flex container for images */}
          <div className="">
            <img
              src="imgs.png"
              alt="Delivery Service Interface"
              className=" md:w-full md:block hidden h-auto shadow-none"
            />
            <img
              src="imgs.png"
              alt="Delivery Service Interface"
              className="rounded-lg md:w-full md:hidden h-auto"
            />
          </div>
        </div>

        {/* Features Grid - Desktop */}
        <div className="hidden lg:grid w-2/3 grid-cols-1  lg:grid-cols-3 gap-6 ">
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
      <div className="lg:hidden">
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
