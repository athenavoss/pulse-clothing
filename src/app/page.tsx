import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/sections/hero";
import { CollectionSection } from "@/components/sections/collection";
import { StorySection } from "@/components/sections/story";
import { LookbookSection } from "@/components/sections/lookbook";
import { FooterSection } from "@/components/sections/footer";
import { CustomCursor } from "@/components/custom-cursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main>
        <HeroSection />
        <CollectionSection />
        <StorySection />
        <LookbookSection />
      </main>
      <FooterSection />
    </>
  );
}
