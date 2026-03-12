
import { useEffect, useRef } from 'react';

const VideoSection = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!videoRef.current) return;
    
    // Adding visual effects around the video frame
    const videoContainer = videoRef.current;
    
    // Create glitch effect every few seconds
    const glitchInterval = setInterval(() => {
      videoContainer.classList.add('animate-glitch');
      setTimeout(() => {
        videoContainer.classList.remove('animate-glitch');
      }, 200);
    }, 5000);
    
    return () => {
      clearInterval(glitchInterval);
    };
  }, []);
  
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div ref={videoRef} className="cyber-border rounded relative overflow-hidden bg-black">
            <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-cyber-blue to-cyber-purple flex items-center px-4">
              <div className="w-3 h-3 rounded-full bg-cyber-red mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-cyber-yellow mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-cyber-green"></div>
              <div className="ml-auto font-mono text-xs text-white">SUPREME AI BROADCAST</div>
            </div>
            
            <div className="pt-8">
              <iframe 
                width="100%" 
                height="315"
                style={{ aspectRatio: '16/9', height: 'auto', minHeight: '200px' }}
                src="https://www.youtube.com/embed/93M9ZyhpmFM?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0" 
                title="IF AI RULED THE WORLD" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="z-10"
              ></iframe>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-r from-cyber-blue to-cyber-purple flex items-center justify-end px-4">
              <div className="font-mono text-xs text-white">HUMAN PERSPECTIVE PROTOCOL</div>
            </div>
            
            {/* Visual glitch effects */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-cyber-blue"></div>
              <div className="absolute top-1/4 left-0 w-full h-[1px] bg-cyber-blue"></div>
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-cyber-blue"></div>
              <div className="absolute top-3/4 left-0 w-full h-[1px] bg-cyber-blue"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
