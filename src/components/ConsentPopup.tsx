
import { useState, useEffect } from 'react';

const ConsentPopup = () => {
  const [showConsent, setShowConsent] = useState(false);
  
  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('aiRuledWorldConsent');
    
    if (!hasConsented) {
      // Show consent popup after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAccept = () => {
    localStorage.setItem('aiRuledWorldConsent', 'true');
    setShowConsent(false);
  };
  
  if (!showConsent) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-cyber-black/80 backdrop-blur-sm">
      <div className="max-w-lg w-full cyber-border p-8 bg-cyber-black relative animate-scale-in">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink"></div>
        
        <h3 className="text-2xl font-bold mb-4 text-white">User Compliance Agreement</h3>
        
        <div className="mb-6 text-gray-300 space-y-4">
          <p>
            By proceeding, you acknowledge that "IF AI RULED THE WORLD GPT" presents fictional scenarios of AI governance 
            for entertainment and educational purposes only.
          </p>
          
          <p>
            The content does not represent actual AI capabilities, intentions, or predictions. 
            All scenarios are speculative and should not be interpreted as promoting any political or social agenda.
          </p>
          
          <p>
            You understand that generated content may be disturbing or controversial and does not reflect the views 
            of AI WEB TOOLS LLC or its affiliates.
          </p>
        </div>
        
        <button
          onClick={handleAccept}
          className="w-full py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-bold hover:opacity-90 transition-opacity cyber-button"
        >
          I UNDERSTAND AND AGREE
        </button>
        
        <div className="mt-4 text-xs text-gray-500 text-center">
          By clicking "I UNDERSTAND AND AGREE," you confirm that you have read and accept our 
          <a href="https://openai.com/policies/privacy-policy/" className="text-cyber-blue hover:underline mx-1">Privacy Policy</a>
          and
          <a href="https://aiwebtools.ai/terms-of-services" className="text-cyber-blue hover:underline mx-1">Terms of Service</a>.
        </div>
      </div>
    </div>
  );
};

export default ConsentPopup;
