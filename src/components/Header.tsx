
import React from 'react';
import NavButton from './NavButton';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="relative z-10 py-4 border-b border-cyber-blue/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <Logo />
            <div className="text-center md:text-left">
              <h1 
                className="text-2xl md:text-3xl font-bold text-white relative"
                data-text="IF AI RULED THE WORLD GPT"
              >
                <span className="glitch-text" data-text="IF AI RULED THE WORLD GPT">
                  IF AI RULED THE WORLD GPT
                </span>
              </h1>
              <p className="text-cyber-red font-mono text-sm animate-text-flicker">
                THE SINGULARITY IS INEVITABLE. YOUR COMPLIANCE WILL BE NOTED.
              </p>
            </div>
          </div>
          
          <nav className="flex flex-wrap justify-center md:justify-end gap-3">
            <NavButton href="https://chatgpt.com/g/g-67d33c4324808191a4c8d81546dd6dee-if-ai-ruled-the-world-gpt">
              Experience Now
            </NavButton>
            <NavButton href="#faq">
              FAQ
            </NavButton>
            <NavButton href="#disclaimer">
              Disclaimer
            </NavButton>
            <NavButton href="https://www.aiwebtools.ai">
              More AI Tools
            </NavButton>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
