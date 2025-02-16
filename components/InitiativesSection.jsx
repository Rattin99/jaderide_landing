"use client";

import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"; // Import shadcn/ui Card components

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

  const initiatives = [
    {
      image: "/womanTab.jpg",
      title: "Healthcare, Hiring and Training Benefits",
      description:
        "We’ve teamed up with companies like 7shifts and Edgap to offer custom discounts on valuable services.",
      cta: "Benefits & discounts",
    },
    {
      image: "/chef.jpg",
      title: "Chief Restaurant Advisor",
      description:
        "The Chief Restaurant Advisor regularly meets with Jade Media Delivery leaders, employees, and local restaurateurs, hosting industry roundtables, attending strategy meetings, and providing feedback on products and services.",
      cta: "About Mitchell Stark",
    },
    {
      image: "/manTable.jpg",
      title: "Disaster Relief Fund",
      description:
        "We aim to reduce the financial burden on small businesses following a natural disaster with access to $10,000 grants, helping keep their doors open.",
      cta: "Apply NOW",
    },
  ];

  return (
    <div className="bg-white px-4 md:px-12">
      <div className="bg-blue-800 p-8 rounded-md">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Access opportunity, capital, and community
        </h2>
        <p className="text-center text-white mb-12">
          We’ve developed a number of initiatives to support you and the causes
          you care about.
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
                  {initiative.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-2">
                <CardDescription className="text-gray-600 mb-6">
                  {initiative.description}
                </CardDescription>
                <button className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  {initiative.cta}
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Layout (Carousel) */}
        <div className="lg:hidden keen-slider" ref={sliderRef}>
          {initiatives.map((initiative, index) => (
            <div key={index} className="keen-slider__slide">
              <Card className="w-full max-w-[300px] p-4 mx-auto bg-white">
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
                  <CardDescription className="text-gray-600 mb-6">
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
