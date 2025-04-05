"use client";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PartnershipPlans from "@/components/PartnershipPlans";
export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <PartnershipPlans />
      <FAQSection />
      <Footer />
    </div>
  );
}
