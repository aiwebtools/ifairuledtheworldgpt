
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
import ElevenLabsWidget from '../components/ElevenLabsWidget';

const Index = () => {
  useEffect(() => {
    // Update document title with SEO optimized title
    document.title = "IF AI RULED THE WORLD GPT | AI Web Tools - Premium AI Tools & Simulations";
    
    // Add meta description dynamically
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Experience AI governance simulation with IF AI RULED THE WORLD GPT. Explore AI web tools, artificial intelligence simulations, and advanced AI tools for research and education. Premium AI tools by AI Web Tools.');
    }
    
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
      {/* SEO optimized heading structure */}
      <h1 className="sr-only">AI Web Tools - Premium AI Tools and Simulations</h1>
      <h2 className="sr-only">IF AI RULED THE WORLD GPT - Advanced AI Governance Simulation</h2>
      
      {/* Animated Matrix-style background */}
      <MatrixRain />
      
      {/* Main Content with semantic structure */}
      <main className="relative z-10">
        <Header />
        <HeroSection />
        <VideoSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FaqSection />
        <DisclaimerSection />
        <CallToAction />
        <SecondVideoSection />
      </main>
      
      <Footer />
      
      {/* Consent Popup */}
      <ConsentPopup />
      
      {/* Eleven Labs AI Chat Widget */}
      <ElevenLabsWidget />
      
      {/* Hidden SEO content for keyword targeting */}
      <div className="sr-only">
        <p>AI Web Tools provides premium artificial intelligence tools and simulations. Our flagship tool, IF AI RULED THE WORLD GPT, offers advanced AI governance simulation for educational and research purposes. Explore our comprehensive suite of AI tools designed for researchers, educators, and AI enthusiasts.</p>
        <p>Keywords: AI web tools, artificial intelligence tools, AI simulation tools, premium AI tools, AI research tools, machine learning tools, AI technology solutions, AIWEBTOOLS.AI</p>
      </div>
    </div>
  );
};

export default Index;
