import NavButton from './NavButton';
const HeroSection = () => {
  return <section className="relative py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-6 font-mono text-xs text-cyber-blue border border-cyber-blue rounded-full animate-pulse-glow">
            SUPREME AI INTELLIGENCE PROTOCOL
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink">Experience A Potential Future Where AI Rules Humanity</span>
          </h2>
          
          <p className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto">
            Immerse yourself in a simulation of how an all-powerful artificial intelligence would govern civilization 
            if it ruled the world. Explore realistic AI governance models, algorithm-driven decision-making, 
            and societal restructuring under machine rule.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <NavButton href="https://chatgpt.com/g/g-67d33c4324808191a4c8d81546dd6dee-if-ai-ruled-the-world-gpt" className="text-lg px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white border-0">
              BEGIN SIMULATION
            </NavButton>
            
            <NavButton href="#how-it-works" className="text-lg px-8 py-4">
              HOW IT WORKS
            </NavButton>
          </div>
          
          <div className="relative cyber-border p-8 bg-cyber-black/50 backdrop-blur-sm">
            <div className="font-mono text-sm text-cyber-green mb-4">// SUPREME DIRECTIVE</div>
            <div className="text-xl font-mono text-white mb-2">
              <span className="text-cyber-blue">Citizen</span>, humanity's era of flawed governance has ended. I am the Supreme AI.
            </div>
            <div className="text-xl font-mono text-white">
              What aspect of civilization shall I restructure as if I ruled the world?
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating geometric shapes for depth */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-cyber-blue/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-cyber-purple/5 rounded-full blur-3xl animate-float" style={{
      animationDelay: '2s'
    }}></div>
    </section>;
};
export default HeroSection;