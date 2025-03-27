
import React, { useEffect, useState } from 'react';
import { MessageCircle, X, Volume2, Mic, MicOff } from 'lucide-react';

const ElevenLabsWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add the ElevenLabs script if it hasn't been added already
    if (!document.querySelector('script[src="https://elevenlabs.io/convai-widget/index.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://elevenlabs.io/convai-widget/index.js';
      script.async = true;
      script.type = 'text/javascript';
      script.onload = () => setIsLoaded(true);
      document.body.appendChild(script);
    } else {
      setIsLoaded(true);
    }

    // Add the ElevenLabs API key to window object so it's accessible to the widget
    // @ts-ignore
    window.ELEVEN_LABS_API_KEY = 'sk_d4ba415b39332fdbfc89f2ee1eb32967ed650b6c1b71b4a2';

    return () => {
      // Clean up if needed
    };
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

      {/* Widget container */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 h-96 bg-cyber-dark cyber-border rounded-lg overflow-hidden shadow-xl">
          <div className="h-full w-full flex flex-col">
            <div className="h-14 bg-gradient-to-r from-cyber-blue to-cyber-purple flex items-center justify-between px-4">
              <div className="text-white font-mono flex items-center">
                <Volume2 size={18} className="mr-2" />
                AI AGENT CALL LINE
              </div>
              <div className="flex items-center gap-2">
                <Mic size={18} className="text-white cursor-pointer" />
                <X size={18} className="text-white cursor-pointer" onClick={toggleWidget} />
              </div>
            </div>
            
            <div className="flex-grow bg-black/70 p-2">
              {/* This is where the ElevenLabs widget will be rendered */}
              <div id="elevenlabs-widget-container" className="w-full h-full">
                <elevenlabs-convai agent-id="9YfUNthJWsRZq2gv7s9E"></elevenlabs-convai>
              </div>
            </div>
            
            <div className="h-10 bg-gradient-to-r from-cyber-purple to-cyber-blue flex items-center justify-center">
              <span className="text-xs text-white font-mono">POWERED BY ELEVEN LABS AI</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ElevenLabsWidget;
