
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import MatrixRain from "../components/MatrixRain";
import NavButton from "../components/NavButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Update document title
    document.title = "404 | Page Not Found";
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-cyber-dark text-white relative overflow-hidden flex items-center justify-center">
      <MatrixRain />
      
      <div className="text-center relative z-10 cyber-border p-12 bg-cyber-black/70 backdrop-blur-md max-w-lg">
        <div className="text-cyber-red mb-6">
          <AlertTriangle size={64} className="mx-auto" />
        </div>
        
        <h1 className="text-5xl font-bold mb-4 text-cyber-red glitch-text" data-text="404">404</h1>
        
        <div className="mb-6 space-y-2">
          <p className="text-xl text-gray-300 mb-8">System Error: Path Not Found</p>
          <div className="font-mono text-sm text-cyber-blue">
            Location: {location.pathname}
          </div>
          <div className="font-mono text-sm text-cyber-green">
            Status: 404
          </div>
        </div>
        
        <NavButton href="/" className="mx-auto">
          Return to Control Center
        </NavButton>
      </div>
    </div>
  );
};

export default NotFound;
