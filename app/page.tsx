import Navbar from "@/components/Navbar";
import ProductHero from "@/components/ProductHero";
import HomeContent from "@/components/HomeContent";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow w-full relative pt-8 pb-16">
        <ProductHero />
        <HomeContent />
      </main>
    </>
  );
}
