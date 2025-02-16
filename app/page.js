import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FinesMart from "@/components/FinestMart";
import DeliverySolutions from "@/components/DeliverySolutions";
import StepsSection from "@/components/StepsSection";
import QuizSection from "@/components/QuizSection";
import CommitmentSection from "@/components/CommitmentSection";
import JadeMediaDelivery from "@/components/JadeMediaDelivery";
import InitiativesSection from "@/components/InitiativesSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import DeliverSections from "@/components/DeliverSection";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FinesMart />
      <DeliverySolutions />
      <DeliverSections />
      <StepsSection />
      <QuizSection />
      <CommitmentSection />
      <JadeMediaDelivery />
      <InitiativesSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
