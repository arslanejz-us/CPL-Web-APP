import HeroPanel from "@/components/HeroPanel";
import ProductShowcase from "@/components/ProductShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurProcess from "@/components/OurProcess";
import CustomerReviews from "@/components/CustomerReviews";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <HeroPanel />
      <ProductShowcase />
      <WhyChooseUs />
      <OurProcess />
      <CustomerReviews />
      <CTASection />
    </>
  );
}
