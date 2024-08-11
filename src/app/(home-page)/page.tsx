import DiscoverTitle from "@/components/home-page/dicover-title-secction";
import HeroSection from "@/components/home-page/hero-section";
import OurCollection from "@/components/home-page/our-collection";
import ProductListSection from "@/components/home-page/Products-list-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <DiscoverTitle />
      <ProductListSection />
      <OurCollection />
    </main>
  );
}
