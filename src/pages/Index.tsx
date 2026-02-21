import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedListings from "@/components/FeaturedListings";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <FeaturedListings />
      <Stats />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
