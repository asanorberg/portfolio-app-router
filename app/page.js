import CardSection from "./components/CardSection";
import Hero from "./components/Hero";
import MobileNav from "./components/MobileNav";
import About from "./components/About";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen min-w-screen flex flex-col items-center justify-center">
      <MobileNav />
      <Hero />
      <About />
      <CardSection />
      <Footer />
    </main>
  );
}
