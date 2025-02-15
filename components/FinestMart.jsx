"use client";
import React, { useState } from "react";
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

const features = [
  {
    icon: Shield,
    title: "A trusted delivery partner.",
    description:
      "Over 10 years of experience delivering goods to Canadians across the country",
  },
  {
    icon: Users,
    title: "1 in 4 Canadians order with JMD",
    description:
      "Over 10 years of experience delivering goods to Canadians across the country",
  },
  {
    icon: Clock,
    title: "30-minute average delivery time.",
    description:
      "Seamless delivery of your product to a customer's door in their moment of need.",
  },
  {
    icon: Megaphone,
    title: "Amplify your reach.",
    description:
      "Join over 50k other JMD partners attracting new customers from a pool of 5.3+ million Canadians in more than 190 delivery zones across the country.",
  },
  {
    icon: HeadphonesIcon,
    title: "Account support when your need it",
    description: "A dedicated team of experts to support all your needs.",
  },
  {
    icon: Settings,
    title: "Self-serve management tools.",
    description:
      "Confidently manage and grow your business with wide range of powerful marketing tools and customer insights at your disposal.",
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

  return (
    <div className="w-full h-full   p-10 md:p-40">
      <div className="flex flex-col md:flex-row items-center">
        {/* Hero Image Section */}
        <div className="w-full md:w-1/3 mb-16 flex flex-col justify-center items-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:text-start text-center">
            "Why having your own pick up and{" "}
            <span className="text-blue-600">delivery app</span>?"
          </h2>
          {/* Flex container for images */}
          <div className="flex items-center justify-center gap-4">
            <img
              src="merged.png"
              alt="Delivery Service Interface"
              className="rounded-lg md:w-3/4 h-auto"
            />
          </div>
        </div>

        {/* Features Grid - Desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:w-2/3">
          {features.map((feature, index) => (
            <Card key={index} className="w-15 h-15 border-none shadow-none">
              <CardContent className="p-6">
                <feature.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
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
                    className: "w-6 h-6  text-blue-600 mb-4",
                  })}
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
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
                currentSlide === index ? "bg-blue-600" : "bg-gray-300"
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
