import CTA from "@/components/homepage/CTA";
import Hero from "@/components/homepage/Hero";
import Portfolio from "@/components/homepage/Portfolio";
import Products from "@/components/homepage/Products";
import Qualities from "@/components/homepage/Qualities";
import Testimonials from "@/components/homepage/Testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <CTA />
      <Products />
      <Qualities />
      <Portfolio />
      <Testimonials />
    </main>
  );
}
