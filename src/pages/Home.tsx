import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

const Home: React.FC = () => {

  return (
    <div>
      <Navbar />
      <Hero />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
