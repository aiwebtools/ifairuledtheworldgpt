
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
    // Update document title
    document.title = "IF AI RULED THE WORLD GPT | AI Governance Simulation";
    
    // Scroll to top on initial load
    window.scrollTo(0, 0);
    
    // Create divine particle effects
    const createDivineParticles = () => {
      const particleContainer = document.createElement('div');
      particleContainer.className = 'divine-particles';
      document.body.appendChild(particleContainer);
      
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'divine-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        particleContainer.appendChild(particle);
      }
    };
    
    createDivineParticles();
    
    // Add scroll reveal animation for sections with enhanced divine effects
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100');
          entry.target.classList.remove('opacity-0', 'translate-y-16', 'scale-95');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    sections.forEach(section => {
      section.classList.add('transition-all', 'duration-1000', 'ease-out', 'opacity-0', 'translate-y-16', 'scale-95');
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
      // Clean up particles
      document.querySelectorAll('.divine-particles').forEach(el => el.remove());
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-blue-950 text-white relative overflow-hidden">
      {/* Divine Background Effects */}
      <div className="divine-background"></div>
      
      {/* Enhanced Matrix-style background */}
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
      
      {/* Eleven Labs AI Chat Widget */}
      <ElevenLabsWidget />
    </div>
  );
};

export default Index;
