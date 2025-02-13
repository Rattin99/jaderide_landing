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
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          "Why having your own pick up and{" "}
          <span className="text-blue-600">delivery app</span>?"
        </h2>

        {/* Hero Image Section */}
        <div className="relative w-full mb-16">
          <div className="flex items-center gap-8">
            <div className="flex-1">
              <img
                src="finestMart.png"
                alt="Delivery Service Interface"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="hidden md:block w-1/3">
              <img
                src="app.png"
                alt="Mobile App Interface"
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Features Grid - Desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200">
              <CardContent className="p-6">
                <feature.icon className="w-6 h-6 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Carousel - Mobile */}
        <div className="md:hidden">
          <Card className="border border-gray-200">
            <CardContent className="p-6">
              {/* Fixed: Using the current feature's icon component correctly */}
              {React.createElement(features[activeSlide].icon, {
                className: "w-6 h-6 text-blue-600 mb-4",
              })}
              <h3 className="font-semibold mb-2">
                {features[activeSlide].title}
              </h3>
              <p className="text-gray-600 text-sm">
                {features[activeSlide].description}
              </p>
            </CardContent>
          </Card>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-8 h-1 rounded-full transition-colors ${
                  index === activeSlide ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinestMart;
