
import { useEffect, useRef } from 'react';

const Logo = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;
    
    // Add a subtle animation to the logo
    const rotateAnimation = () => {
      const time = Date.now() * 0.001;
      const rotation = Math.sin(time) * 2;
      logo.style.transform = `rotateY(${rotation}deg)`;
      requestAnimationFrame(rotateAnimation);
    };
    
    const animationFrame = requestAnimationFrame(rotateAnimation);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);
  
  return (
    <div ref={logoRef} className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 flex-shrink-0 hexagon bg-cyber-black animate-pulse-glow border-2 border-cyber-blue p-3 sm:p-4 md:p-5 flex items-center justify-center transition-all duration-500">
      <div className="text-center">
        <h3 className="text-cyber-blue text-lg font-bold leading-tight">IF AI RULED THE WORLD</h3>
        <a 
          href="https://aiwebtools.lovable.app/?via=aiwebtools" 
          className="text-[8px] text-white mt-1 hover:text-cyber-purple transition-colors"
        >
          Presented by AiWebTools.Ai
        </a>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 hexagon border-2 border-cyber-purple -z-10 transform scale-[1.1] opacity-50"></div>
    </div>
  );
};

export default Logo;
