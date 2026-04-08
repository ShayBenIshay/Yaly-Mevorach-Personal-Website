import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Studies from "@/components/Studies/Studies";
import Vision from "@/components/Vision/Vision";
import JoinVision from "@/components/JoinVision/JoinVision";
import Footer from "@/components/Footer/Footer";
import "./page.css";

export default function Home() {
  return (
    <main className="page">
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* Studies and qualifications */}
      <Studies />

      {/* Vision */}
      <Vision />

      {/* Want to join my vision? */}
      <JoinVision />

      <Footer />
    </main>
  );
}
