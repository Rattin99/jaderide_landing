"use client";
import React, { useContext } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"; // Import shadcn/ui Accordion components
import { LanguageContext } from "@/lib/LanguageContext";
import { translations } from "@/public/language/language";

const FAQSection = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const faqs = [
    {
      question: {
        en: "As I sign up for Jode Media Delivery as a merchant, what can I expect?",
        fr: "Lorsque je m'inscris à Jode Media Delivery en tant que commerçant, à quoi puis-je m'attendre ?",
      },
      answer: {
        en: "When you sign up, you can expect a seamless onboarding process, access to our merchant dashboard, and tools to manage your deliveries efficiently.",
        fr: "Lorsque vous vous inscrivez, vous pouvez vous attendre à un processus d'intégration fluide, un accès à notre tableau de bord marchand et des outils pour gérer vos livraisons efficacement.",
      },
    },
    {
      question: {
        en: "What are the pricing plan differences?",
        fr: "Quelles sont les différences entre les plans tarifaires ?",
      },
      answer: {
        en: "Our pricing plans vary based on the volume of deliveries and additional features. Please check our pricing page for detailed information.",
        fr: "Nos plans tarifaires varient en fonction du volume des livraisons et des fonctionnalités supplémentaires. Veuillez consulter notre page de tarification pour des informations détaillées.",
      },
    },
    {
      question: {
        en: "Does Jode Media Delivery charge any other fees?",
        fr: "Jode Media Delivery facture-t-il d'autres frais ?",
      },
      answer: {
        en: "Apart from the subscription fee, there may be additional charges for premium services or features. These will be clearly outlined in your plan.",
        fr: "En plus de la cotisation d'abonnement, des frais supplémentaires peuvent être appliqués pour des services ou fonctionnalités premium. Ceux-ci seront clairement indiqués dans votre plan.",
      },
    },
    {
      question: {
        en: "What do commissions and fees cover?",
        fr: "Que couvrent les commissions et frais ?",
      },
      answer: {
        en: "Commissions and fees cover the cost of delivery services, platform maintenance, and customer support.",
        fr: "Les commissions et frais couvrent le coût des services de livraison, de la maintenance de la plateforme et du support client.",
      },
    },
    {
      question: {
        en: "Can I change my pricing plan?",
        fr: "Puis-je changer mon plan tarifaire ?",
      },
      answer: {
        en: "Yes, you can upgrade or downgrade your pricing plan at any time through your merchant dashboard.",
        fr: "Oui, vous pouvez améliorer ou réduire votre plan tarifaire à tout moment via votre tableau de bord marchand.",
      },
    },
    {
      question: {
        en: "How quickly will I get paid?",
        fr: "À quelle vitesse serai-je payé ?",
      },
      answer: {
        en: "Payments are processed weekly, and you can expect to receive your earnings within 5-7 business days.",
        fr: "Les paiements sont traités chaque semaine, et vous pouvez vous attendre à recevoir vos gains dans un délai de 5 à 7 jours ouvrables.",
      },
    },
    {
      question: {
        en: "How does the free trial work?",
        fr: "Comment fonctionne l'essai gratuit ?",
      },
      answer: {
        en: "The free trial allows you to explore all features of Jode Media Delivery for 14 days without any charges.",
        fr: "L'essai gratuit vous permet d'explorer toutes les fonctionnalités de Jode Media Delivery pendant 14 jours sans frais.",
      },
    },
    {
      question: {
        en: "What happens if I switch plans while on a free trial?",
        fr: "Que se passe-t-il si je change de plan pendant un essai gratuit ?",
      },
      answer: {
        en: "Switching plans during the free trial will not affect your trial period. You can continue to explore the new plan features.",
        fr: "Changer de plan pendant l'essai gratuit n'affectera pas votre période d'essai. Vous pouvez continuer à explorer les fonctionnalités du nouveau plan.",
      },
    },
    {
      question: {
        en: "Can I opt out before my free trial ends?",
        fr: "Puis-je me désinscrire avant la fin de mon essai gratuit ?",
      },
      answer: {
        en: "Yes, you can cancel your subscription at any time before the trial ends to avoid being charged.",
        fr: "Oui, vous pouvez annuler votre abonnement à tout moment avant la fin de l'essai pour éviter d'être facturé.",
      },
    },
    {
      question: {
        en: "Where can I go if I have more questions?",
        fr: "Où puis-je aller si j'ai d'autres questions ?",
      },
      answer: {
        en: "You can visit our Help Center or contact our support team for further assistance.",
        fr: "Vous pouvez visiter notre Centre d'aide ou contacter notre équipe de support pour toute assistance supplémentaire.",
      },
    },
  ];
  return (
    <div className="bg-white p-8">
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
        {t.faqSection.title}
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
                {language == "en" ? faq.question.en : faq.question.fr}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 p-4">
                {language == "en" ? faq.answer.en : faq.answer.fr}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQSection;
