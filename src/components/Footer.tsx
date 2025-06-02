
import NavButton from './NavButton';

const Footer = () => {
  return (
    <footer className="relative z-10 pt-16 pb-8 border-t border-cyber-blue/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-cyber-blue">IF AI RULED THE WORLD GPT</h2>
            <p className="text-gray-400 mb-6 max-w-md">
              A simulation exploring how artificial intelligence might govern human civilization, 
              offering detailed responses about AI-controlled laws, economics, ethics, and societies.
            </p>
            <p className="text-xs text-gray-500 mb-6 max-w-md">
              This website is for informational, educational, and research purposes only.
            </p>
            <div className="flex items-center space-x-4">
              <NavButton href="https://chatgpt.com/g/g-67d33c4324808191a4c8d81546dd6dee-if-ai-ruled-the-world-gpt">
                Experience Simulation
              </NavButton>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-cyber-blue transition-colors">Home</a></li>
              <li><a href="#how-it-works" className="hover:text-cyber-blue transition-colors">How It Works</a></li>
              <li><a href="#faq" className="hover:text-cyber-blue transition-colors">FAQ</a></li>
              <li><a href="#disclaimer" className="hover:text-cyber-blue transition-colors">Disclaimer</a></li>
              <li><a href="https://www.aiwebtools.ai" className="hover:text-cyber-blue transition-colors">More AI Tools</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="tel:+14758008096" className="hover:text-cyber-blue transition-colors">
                  Phone: (475) 800-8096
                </a>
              </li>
              <li>
                <a href="mailto:Contact@ai-webtools.com" className="hover:text-cyber-blue transition-colors">
                  Email: Contact@ai-webtools.com
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h3 className="text-lg font-bold mb-4 text-white">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="https://openai.com/policies/privacy-policy/" className="hover:text-cyber-blue transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="https://aiwebtools.lovable.app/disclaimers" className="hover:text-cyber-blue transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cyber-blue/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 <a href="https://www.aiwebtools.ai" className="hover:text-cyber-blue transition-colors">AI WEB TOOLS LLC</a> All rights reserved.
          </div>
          
          <div>
            <a 
              href="https://www.aiwebtools.ai" 
              className="cyber-button px-4 py-2 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-purple text-white border-0"
            >
              More AI Tools
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
