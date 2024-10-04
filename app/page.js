import CardSection from "./components/CardSection";
import Hero from "./components/Hero";
import MobileNav from "./components/MobileNav";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen  flex flex-col justify-center items-center">
      <MobileNav />
      <div id="home">
        <Hero />
      </div>
      <div id="about" className="w-full flex justify-center md:my-16">
        <About />
      </div>
      <div id="projects" className="w-full flex justify-center md:my-16">
        <CardSection />
      </div>
      <Footer />
    </main>
  );
}
