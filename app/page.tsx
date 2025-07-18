import HeroSection from "@/components/HeroSection";
import GuideSection from "@/components/GuideSection";
import ImageSlider from "@/components/ImageSlider";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black dark:bg-black items-center relative">
      <ThemeToggle />
      <HeroSection />
      <ImageSlider />
      <GuideSection />
    </main>
  );
}
