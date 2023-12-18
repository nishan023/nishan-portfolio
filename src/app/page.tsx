import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ProjectsSection from "../components/sections/ProjectsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className='p-4'>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}

