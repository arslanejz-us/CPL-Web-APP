import HeroPanel from "@/components/HeroPanel";
import BrandLogos from "@/components/BrandLogos";
import PackagingCategories from "@/components/PackagingCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurProcess from "@/components/OurProcess";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <HeroPanel />
      <BrandLogos />
      <PackagingCategories />
      <WhyChooseUs />
      <OurProcess />
      <Testimonials />
      <CTABanner />
    </>
  );
}
