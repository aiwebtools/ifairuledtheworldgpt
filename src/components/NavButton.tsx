
import { ReactNode } from 'react';

interface NavButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const NavButton = ({ href, children, className = "" }: NavButtonProps) => {
  return (
    <a 
      href={href} 
      className={`cyber-button relative inline-flex items-center justify-center px-4 py-2 bg-cyber-dark border border-cyber-blue text-cyber-blue hover:text-white transition-all duration-300 ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </a>
  );
};

export default NavButton;
