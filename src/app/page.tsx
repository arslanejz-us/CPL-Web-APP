import HeroPanel from "@/components/HeroPanel";
import Hero from "@/components/Hero";
import TopPackagingStyles from "@/components/TopPackagingStyles";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurProcess from "@/components/OurProcess";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <HeroPanel />
      <Hero />
      <TopPackagingStyles />
      <WhyChooseUs />
      <OurProcess />
      <Testimonials />
    </>
  );
}
