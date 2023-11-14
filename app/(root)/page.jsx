import CTA from "@/components/homepage/CTA";
import Hero from "@/components/homepage/Hero";
import Portfolio from "@/components/homepage/Portfolio";
import Products from "@/components/homepage/Products";
import Services from "@/components/homepage/Services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <CTA />
      <Services />
      <Products />
      <Portfolio />
    </main>
  );
}
