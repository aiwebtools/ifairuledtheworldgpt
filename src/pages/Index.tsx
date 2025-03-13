
import { useEffect } from 'react';
import MatrixRain from '../components/MatrixRain';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import VideoSection from '../components/VideoSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FaqSection from '../components/FaqSection';
import DisclaimerSection from '../components/DisclaimerSection';
import CallToAction from '../components/CallToAction';
import SecondVideoSection from '../components/SecondVideoSection';
import Footer from '../components/Footer';
import ConsentPopup from '../components/ConsentPopup';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "IF AI RULED THE WORLD GPT | AI Governance Simulation";
    
    // Scroll to top on initial load
    window.scrollTo(0, 0);
    
    // Add scroll reveal animation for sections
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    sections.forEach(section => {
      section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-cyber-dark text-white relative overflow-hidden">
      {/* Animated Matrix-style background */}
      <MatrixRain />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <VideoSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FaqSection />
        <DisclaimerSection />
        <CallToAction />
        <SecondVideoSection />
        <Footer />
      </div>
      
      {/* Consent Popup */}
      <ConsentPopup />
    </div>
  );
};

export default Index;
