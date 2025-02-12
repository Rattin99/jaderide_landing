"use client"; // Required for interactivity in Next.js 13+

import { useState } from "react";
import Image from "next/image";

export default function DeliveryAppBenefits() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "A trusted delivery partner",
      description:
        "Over 10 years of experience delivering goods to Canadians across the country",
    },
    {
      title: "Account support when you need it",
      description: "A dedicated team of experts to support all your needs",
    },
    {
      title: "30-minute average delivery time",
      description:
        "Seamless delivery of your product to a customer’s door in their moment of need",
    },
    {
      title: "Self-serve management tools",
      description:
        "Confidently manage and grow your business with a wide range of powerful marketing tools and customer insights at your disposal",
    },
    {
      title: "Amplify your reach",
      description:
        "Join over 50k other JMD partners attracting new customers from a pool of 53+ million Canadians in more than 190 delivery zones across the country",
    },
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Why having your own pick up and delivery app?
          </h1>
          <p className="text-xl text-gray-600">
            Let your groceries come to you
          </p>
        </div>

        {/* Grid Layout for Larger Screens */}
        <div className="hidden lg:grid grid-cols-2 gap-8">
          {/* Left Column: Images */}
          <div className="flex flex-col space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">
                A trusted delivery partner
              </h2>
              <p className="text-gray-600">
                Over 10 years of experience delivering goods to Canadians across
                the country
              </p>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <Image
                  src="/finestMart.png"
                  alt="Finest Mart"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <div className="w-1/2">
                <Image
                  src="/app.png"
                  alt="App"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Cards */}
          <div className="grid grid-cols-1 gap-8">
            {slides.slice(1).map((slide, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">{slide.title}</h2>
                <p className="text-gray-600">{slide.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel for Smaller Screens */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 p-4">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">{slide.title}</h2>
                    <p className="text-gray-600">{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            &lt;
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            &gt;
          </button>

          {/* Dots for Slide Indicators */}
          <div className="flex justify-center mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
