import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { NowSection } from "@/components/NowSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ResearchSection } from "@/components/ResearchSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  const px = "clamp(24px, 6vw, 80px)";

  return (
    <div style={{ minHeight: "100vh" }}>
      <Nav />
      <main style={{ maxWidth: "820px", margin: "0 auto", padding: `0 ${px}` }}>
        <Hero />
        <div id="now">
          <NowSection />
        </div>
        <div id="stack">
          <SkillsSection />
        </div>
        <div id="build">
          <ProjectsSection />
        </div>
        <div id="research">
          <ResearchSection />
        </div>
        <ContactForm />
        <Footer />
      </main>
    </div>
  );
}
