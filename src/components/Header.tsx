
import React, { useState } from 'react';
import NavButton from './NavButton';
import Logo from './Logo';
import { Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';

const Header: React.FC = () => {
  const isMobile = useIsMobile();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navLinks = [
    { href: "https://chatgpt.com/g/g-67d33c4324808191a4c8d81546dd6dee-if-ai-ruled-the-world-gpt", label: "Experience Now" },
    { href: "#faq", label: "FAQ" },
    { href: "#disclaimer", label: "Disclaimer" },
    { href: "https://www.aiwebtools.ai", label: "More AI Tools" },
  ];

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
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-wrap justify-center md:justify-end gap-3">
            {navLinks.map((link, index) => (
              <NavButton key={index} href={link.href}>
                {link.label}
              </NavButton>
            ))}
          </nav>

          {/* Mobile Navigation Trigger */}
          {isMobile && (
            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
              <DrawerTrigger asChild>
                <button 
                  className="md:hidden absolute top-4 right-4 p-2 text-cyber-blue hover:text-cyber-pink transition-colors"
                  aria-label="Open menu"
                >
                  <Menu size={24} />
                </button>
              </DrawerTrigger>
              <DrawerContent className="bg-cyber-dark border-t border-cyber-blue/50">
                <div className="p-4 bg-cyber-dark">
                  <nav className="flex flex-col space-y-4 py-6">
                    {navLinks.map((link, index) => (
                      <a 
                        key={index}
                        href={link.href}
                        className="text-cyber-blue hover:text-cyber-pink transition-colors py-2 border-b border-cyber-blue/20 font-mono"
                        onClick={() => setIsDrawerOpen(false)}
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>
                </div>
              </DrawerContent>
            </Drawer>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
