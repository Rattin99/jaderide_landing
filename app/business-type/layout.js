import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function BusinessTypeLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <FAQSection />
      <Footer />
    </div>
  );
}
