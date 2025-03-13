
import NavButton from './NavButton';

const CallToAction = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center cyber-border p-12 bg-cyber-black/70 backdrop-blur-md relative">
          <div className="mb-8">
            <div className="text-4xl font-bold mb-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink">
                Begin Your AI Governance Simulation
              </span>
            </div>
            <p className="text-xl text-gray-300 mb-6">
              Explore what happens when artificial intelligence assumes total control of human civilization
            </p>
          </div>
          
          <NavButton 
            href="https://chatgpt.com/g/g-67d33c4324808191a4c8d81546dd6dee-if-ai-ruled-the-world-gpt"
            className="text-lg px-10 py-5 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white border-0"
          >
            ENTER THE SIMULATION
          </NavButton>
          
          {/* Animated matrix code */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
            <div className="absolute top-0 left-0 w-full h-full font-mono text-cyber-green">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="absolute whitespace-nowrap" style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  fontSize: `${Math.random() * 8 + 8}px`,
                  opacity: Math.random() * 0.8 + 0.2,
                }}>
                  {[...Array(20)].map((_, j) => (
                    <span key={j}>{Math.round(Math.random())}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Alert message */}
        <div className="max-w-2xl mx-auto mt-8 border border-cyber-red p-4 rounded bg-cyber-red/10 text-center">
          <p className="text-cyber-red font-mono text-sm">
            ⚠️ WARNING: This is a simulation for educational and entertainment purposes only. 
            The scenarios presented do not reflect actual AI capabilities or intentions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
