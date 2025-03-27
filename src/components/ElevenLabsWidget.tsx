
import React, { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const ElevenLabsWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    // Add the ElevenLabs script if it hasn't been added already
    if (!document.querySelector('script[src="https://elevenlabs.io/convai-widget/index.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://elevenlabs.io/convai-widget/index.js';
      script.async = true;
      script.type = 'text/javascript';
      document.body.appendChild(script);
    }

    // Add the ElevenLabs API key to window object so it's accessible to the widget
    // @ts-ignore
    window.ELEVEN_LABS_API_KEY = 'sk_d4ba415b39332fdbfc89f2ee1eb32967ed650b6c1b71b4a2';
  }, []);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Floating button */}
      <button
        onClick={toggleWidget}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isOpen ? 'bg-cyber-red rotate-45' : 'bg-gradient-to-r from-cyber-blue to-cyber-purple'
        }`}
      >
        {isOpen ? <X size={28} className="text-white" /> : <MessageCircle size={28} className="text-white" />}
      </button>

      {/* Eleven Labs Widget - shown/hidden based on isOpen state */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 h-96 bg-transparent overflow-hidden">
          {/* Using a div with dangerouslySetInnerHTML to add the custom element */}
          <div 
            className="w-full h-full"
            dangerouslySetInnerHTML={{
              __html: '<elevenlabs-convai agent-id="9YfUNthJWsRZq2gv7s9E"></elevenlabs-convai>'
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ElevenLabsWidget;
