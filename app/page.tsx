import HeroSection from "@/components/HeroSection";
import GuideSection from "@/components/GuideSection";
import ImageSlider from "@/components/ImageSlider";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black dark:bg-black items-center relative">
      <HeroSection />
      <ImageSlider />
      <GuideSection />
    </main>
  );
}
