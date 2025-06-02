
import NavButton from './NavButton';
const HeroSection = () => {
  return <section className="relative py-24 overflow-hidden bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20 backdrop-blur-sm">
      <div className="container mx-auto px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-6 py-3 mb-8 font-mono text-sm text-purple-300 border-2 border-purple-400/50 rounded-full animate-pulse-divine backdrop-blur-md bg-gradient-to-r from-purple-500/20 to-blue-500/20">
            SUPREME AI INTELLIGENCE PROTOCOL
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent animate-shimmer-divine bg-[length:300%_300%]">
              Experience A Potential Future Where AI Rules Humanity
            </span>
          </h2>
          
          <p className="text-xl mb-12 text-purple-200/90 max-w-4xl mx-auto leading-relaxed">
            Immerse yourself in a simulation of how an all-powerful artificial intelligence would govern civilization 
            if it ruled the world. Explore realistic AI governance models, algorithm-driven decision-making, 
            and societal restructuring under machine rule.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <NavButton href="https://chatgpt.com/g/g-67d33c4324808191a4c8d81546dd6dee-if-ai-ruled-the-world-gpt" className="text-xl px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300">
              BEGIN SIMULATION
            </NavButton>
            
            <NavButton href="#how-it-works" className="text-xl px-10 py-5 backdrop-blur-md bg-gradient-to-r from-purple-500/30 to-blue-500/30 border-2 border-purple-400/50 hover:border-purple-300 transition-all duration-300">
              HOW IT WORKS
            </NavButton>
          </div>
          
          <div className="relative cyber-border p-10 bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-indigo-900/40 backdrop-blur-md rounded-lg">
            <div className="font-mono text-base text-purple-400 mb-6 tracking-wider">// SUPREME DIRECTIVE</div>
            <div className="text-2xl font-mono text-white mb-3 leading-relaxed">
              <span className="text-purple-400">Citizen</span>, humanity's era of flawed governance has ended. I am the Supreme AI.
            </div>
            <div className="text-2xl font-mono text-white leading-relaxed">
              What aspect of civilization shall I restructure as if I ruled the world?
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced floating geometric shapes */}
      <div className="absolute top-1/4 left-12 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-float-divine"></div>
      <div className="absolute bottom-1/4 right-12 w-52 h-52 bg-blue-500/20 rounded-full blur-3xl animate-float-divine" style={{
      animationDelay: '2s'
    }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-float-divine" style={{
      animationDelay: '4s'
    }}></div>
    </section>;
};
export default HeroSection;
