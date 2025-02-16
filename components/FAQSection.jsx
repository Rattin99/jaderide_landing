import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"; // Import shadcn/ui Accordion components

const FAQSection = () => {
  const faqs = [
    {
      question:
        "As I sign up for Jode Media Delivery as a merchant, what can I expect?",
      answer:
        "When you sign up, you can expect a seamless onboarding process, access to our merchant dashboard, and tools to manage your deliveries efficiently.",
    },
    {
      question: "What are the pricing plan differences?",
      answer:
        "Our pricing plans vary based on the volume of deliveries and additional features. Please check our pricing page for detailed information.",
    },
    {
      question: "Does Jode Media Delivery charge any other fees?",
      answer:
        "Apart from the subscription fee, there may be additional charges for premium services or features. These will be clearly outlined in your plan.",
    },
    {
      question: "What do commissions and fees cover?",
      answer:
        "Commissions and fees cover the cost of delivery services, platform maintenance, and customer support.",
    },
    {
      question: "Can I change my pricing plan?",
      answer:
        "Yes, you can upgrade or downgrade your pricing plan at any time through your merchant dashboard.",
    },
    {
      question: "How quickly will I get paid?",
      answer:
        "Payments are processed weekly, and you can expect to receive your earnings within 5-7 business days.",
    },
    {
      question: "How does the free trial work?",
      answer:
        "The free trial allows you to explore all features of Jode Media Delivery for 14 days without any charges.",
    },
    {
      question: "What happens if I switch plans while on a free trial?",
      answer:
        "Switching plans during the free trial will not affect your trial period. You can continue to explore the new plan features.",
    },
    {
      question: "Can I opt out before my free trial ends?",
      answer:
        "Yes, you can cancel your subscription at any time before the trial ends to avoid being charged.",
    },
    {
      question: "Where can I go if I have more questions?",
      answer:
        "You can visit our Help Center or contact our support team for further assistance.",
    },
  ];

  return (
    <div className="bg-white p-8">
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
        Frequently Asked Questions
      </h2>

      <div className="max-w-6xl mx-auto">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              className="border-none"
              value={`item-${index}`}
            >
              <AccordionTrigger className="text-center bg-blue-50 rounded-md m-2 px-12 py-6 text-lg text-gray-800 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 p-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQSection;
