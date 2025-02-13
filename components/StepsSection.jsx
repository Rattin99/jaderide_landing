"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function StepsSection() {
  // Example data for each step
  const steps = [
    {
      title: "Submit the form",
      description:
        "Fill out the brief form and someone from our team will reach out to you within 1-2 business days.",
      image: "/girl.png",
    },
    {
      title: "Chat with our team",
      description:
        "Our team of experts will discuss the best option to join the JMD network.",
      image: "/boy.png",
    },
    {
      title: "Onboarding",
      description:
        "Set up your tablet and banking details with our step-by-step instructions and interactive onboarding journey.",
      image: "/bank.png",
    },
    {
      title: "Build your product catalogue",
      description:
        "Our intuitive merchant platform makes getting your product offering live in the app quick and easy.",
      image: "/clipboard.png",
    },
    {
      title: "Start making money",
      description:
        "Tap into untapped revenue from hundreds of customers looking for the convenience of delivery across Canada.",
      image: "/Earn.png",
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
      <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">
        Starting with Jade Media Delivery is easy
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
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.description}</p>
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
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
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
