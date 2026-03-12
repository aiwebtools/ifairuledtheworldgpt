
import React, { useState } from 'react';
import NavButton from './NavButton';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="relative z-50 py-3 md:py-4 border-b border-cyber-blue/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center space-x-3 min-w-0">
            <Logo />
            <div className="text-left min-w-0">
              <h1 
                className="text-lg sm:text-2xl md:text-3xl font-bold text-white relative truncate"
                data-text="IF AI RULED THE WORLD GPT"
              >
                <span className="glitch-text" data-text="IF AI RULED THE WORLD GPT">
                  IF AI RULED THE WORLD GPT
                </span>
              </h1>
              <p className="text-cyber-red font-mono text-[10px] sm:text-xs md:text-sm animate-text-flicker truncate">
                THE SINGULARITY IS INEVITABLE. YOUR COMPLIANCE WILL BE NOTED.
              </p>
            </div>
          </div>
          
          {/* Mobile hamburger button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-cyber-blue hover:text-white transition-colors p-2 z-50"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex flex-wrap justify-end gap-3">
            <NavButton href="https://chatgpt.com/g/g-67d33c4324808191a4c8d81546dd6dee-if-ai-ruled-the-world-gpt">
              Experience Now
            </NavButton>
            <NavButton href="#faq">
              FAQ
            </NavButton>
            <NavButton href="#disclaimer">
              Disclaimer
            </NavButton>
            <NavButton href="https://aiwebtools.lovable.app/?via=aiwebtools">
              More AI Tools
            </NavButton>
          </nav>
        </div>

        {/* Mobile dropdown menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-80 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <nav className="flex flex-col gap-2 pb-2">
            <NavButton href="https://chatgpt.com/g/g-67d33c4324808191a4c8d81546dd6dee-if-ai-ruled-the-world-gpt">
              Experience Now
            </NavButton>
            <a href="#faq" onClick={closeMenu} className="cyber-button relative inline-flex items-center justify-center px-4 py-3 bg-cyber-dark border border-cyber-blue text-cyber-blue hover:text-white transition-all duration-300">
              <span className="relative z-10">FAQ</span>
            </a>
            <a href="#disclaimer" onClick={closeMenu} className="cyber-button relative inline-flex items-center justify-center px-4 py-3 bg-cyber-dark border border-cyber-blue text-cyber-blue hover:text-white transition-all duration-300">
              <span className="relative z-10">Disclaimer</span>
            </a>
            <NavButton href="https://aiwebtools.lovable.app/?via=aiwebtools">
              More AI Tools
            </NavButton>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
