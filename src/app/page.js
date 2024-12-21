import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import ExperienceSection from "./components/ExperienceSection";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Analytics />
      <SpeedInsights />
      <Navbar />
      <div class="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
} 