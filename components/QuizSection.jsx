"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const options = [
  {
    id: 1,
    image: "/gain.png",
    title: "Gain the most new customers and new orders.",
  },
  {
    id: 2,
    image: "/piggybank.png",
    title:
      "Get Jade Media Delivery solutions at a lower cost, even if it means fewer sales or customers",
  },
];

const QuizSection = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Take our short quiz to identify the right solution for you
        </h1>
        <p className="text-lg text-gray-700 mb-2">
          Which of these is more important to you?
        </p>
        <p className="text-sm text-gray-500 mb-8">Select one</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {options.map((option) => (
            <Card
              key={option.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                selectedOption === option.id
                  ? "border-2 border-blue-600"
                  : "border border-gray-200"
              }`}
              onClick={() => setSelectedOption(option.id)}
            >
              <CardContent className="p-6">
                <div className="relative">
                  {selectedOption === option.id && (
                    <div className="absolute -top-1 -left-1 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-white rounded-full" />
                    </div>
                  )}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                      <img
                        src={option.image}
                        alt={option.title}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <p className="text-gray-800 text-sm md:text-base">
                      {option.title}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizSection;
