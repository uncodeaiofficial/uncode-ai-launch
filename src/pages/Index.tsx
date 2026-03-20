import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import Services from "@/components/Services";
import TechPartners from "@/components/TechPartners";
import WhyUs from "@/components/WhyUs";
import HowWeWork from "@/components/HowWeWork";
import ROICalculator from "@/components/ROICalculator";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import StickyBookCall from "@/components/StickyBookCall";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <ScrollProgress />
      <CursorGlow />
      <StickyBookCall />
      <CookieConsent />
      <Navbar />
      <Hero />
      <ClientLogos />
      <Services />
      <TechPartners />
      <WhyUs />
      <HowWeWork />
      <ROICalculator />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <About />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Index;
