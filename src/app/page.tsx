import CTA from "./components/cta";
import Elementors from "./components/elementors";
import Hero from "./components/hero";
import Reviews from "./components/reviews";
import Reasons from "./components/reasons";
import Process from "./components/process";
import FAQ from "./components/faq";
import Portfolio from "./components/portfolio";
import StickyButton from "@/components/sticky-button";

export default function HomePage() {
  return (
    <>
      <div className="space-y-28 sm:space-y-40 [&_section]:scroll-mt-12 pb-20">
        <Hero />
        <Reasons />
        <Elementors />
        <Portfolio />
        <Process />
        <div className="space-y-10 sm:space-y-20">
          <Reviews />
          <FAQ />
        </div>
        <CTA />
      </div>
      <StickyButton />
    </>
  );
}
