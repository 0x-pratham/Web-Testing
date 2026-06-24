import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutCapabilities from "@/components/about/AboutCapabilities";
import AboutStats from "@/components/about/AboutStats";
import AboutLeadership from "@/components/about/AboutLeadership";
import AboutPhilosophy from "@/components/about/AboutPhilosophy";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <main className="bg-[#FCFAF8] overflow-hidden">
      <AboutHero />
      <AboutStory />
      <AboutCapabilities />
      <AboutStats />
      <AboutLeadership />
      <AboutPhilosophy />
      <AboutCTA />
    </main>
  );
}