import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useContext } from "react";
import { LanguageContext } from "@/lib/LanguageContext";

const translations = {
  en: {
    title: "Partnership plans made to work for you",
    subtitle:
      "Enjoy all our partnership plans* with zero payment processing fees. Change or cancel your plan at any time.",
    features: ["Admin Panel", "Customer Website", "3 Apps"],
    categories: ["Merchant", "Customers", "Rider"],
    products: "Products",
    buttons: {
      basic: "Continue with Basic",
      plus: "Continue with Plus",
      premium: "Continue with Premium",
      custom: "Contact Sales",
    },
  },
  fr: {
    title: "Des formules de partenariat pensées pour vous",
    subtitle:
      "Profitez de toutes nos formules de partenariat* sans frais de traitement. Changez ou annulez votre formule à tout moment.",
    features: ["Panneau d'administration", "Site client", "3 applications"],
    categories: ["Commerçant", "Clients", "Livreur"],
    products: "Produits",
    buttons: {
      basic: "Continuer avec Basic",
      plus: "Continuer avec Plus",
      premium: "Continuer avec Premium",
      custom: "Contacter les ventes",
    },
  },
};

const PricingCards = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const plans = [
    {
      name: "Basic",
      features: t.features,
      categories: t.categories,
      products: 100,
      buttonText: t.buttons.basic,
    },
    {
      name: "Plus",
      features: t.features,
      categories: t.categories,
      products: 300,
      buttonText: t.buttons.plus,
    },
    {
      name: "Premium",
      features: t.features,
      categories: t.categories,
      products: 500,
      buttonText: t.buttons.premium,
    },
    {
      name: "Custom",
      features: [
        t.features[0],
        t.features[1],
        language === "fr" ? "Applications illimitées" : "Unlimited Apps",
      ],
      categories: t.categories,
      products: language === "fr" ? "Illimité" : "Unlimited",
      buttonText: t.buttons.custom,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl text-left md:text-center font-bold text-gray-800">
          {t.title}
        </h2>
        <p className="text-gray-600 text-left md:text-center mt-2">
          {t.subtitle}
        </p>
      </div>

      {/* Mobile view */}
      <div className="md:hidden space-y-6">
        {plans.map((plan, index) => (
          <Card key={index} className="w-full">
            <CardHeader className="pb-2">
              <CardTitle>{plan.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="py-2 text-sm text-gray-500">
                {plan.categories.map((category, idx) => (
                  <div key={idx} className="mb-1">
                    {category}
                  </div>
                ))}
              </div>
              <div className="font-medium">
                {t.products} — {plan.products}
              </div>
            </CardContent>
            <CardFooter>
              <button className="w-full py-2 bg-blue-600 text-white rounded font-medium text-sm">
                {plan.buttonText}
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Desktop view */}
      <div className="hidden md:block">
        <Carousel className="w-full">
          <CarouselContent>
            {plans.map((plan, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
                <div className="p-1">
                  <Card className="w-full h-full">
                    <CardHeader className="pb-2">
                      <CardTitle>{plan.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="py-2 text-sm text-gray-500">
                        {plan.categories.map((category, idx) => (
                          <div key={idx} className="mb-1">
                            {category}
                          </div>
                        ))}
                      </div>
                      <div className="font-medium">
                        {t.products} — {plan.products}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <button className="w-full py-2 bg-blue-600 text-white rounded font-medium text-sm">
                        {plan.buttonText}
                      </button>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="mr-2" />
            <CarouselNext />
          </div>
        </Carousel>
        <div className="flex justify-center mt-4">
          <div className="flex space-x-2">
            {[0, 1].map((dot) => (
              <div
                key={dot}
                className={`h-2 w-2 rounded-full ${
                  dot === 0 ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
