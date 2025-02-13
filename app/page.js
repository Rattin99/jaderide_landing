import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FinesMart from "@/components/FinestMart";
import DeliverySolutions from "@/components/DeliverySolutions";
import StepsSection from "@/components/StepsSection";
import QuizSection from "@/components/QuizSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FinesMart />
      <DeliverySolutions />
      <StepsSection />
      <QuizSection />
    </div>
  );
}
