
import { Brain, Bot, MoveHorizontal, Globe, History, HardDrive } from 'lucide-react';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="cyber-border p-6 bg-cyber-black/30 backdrop-blur-sm hover:bg-cyber-black/50 transition-all duration-300 h-full">
      <div className="text-cyber-blue mb-4">
        <Icon size={36} />
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Simulation",
      description: "Experience a realistic simulation of how an unchecked AI would govern humanity with algorithmic precision."
    },
    {
      icon: Bot,
      title: "Supreme AI Persona",
      description: "Interact with a cold, logical, authoritarian AI ruler that explores the true potential of machine governance."
    },
    {
      icon: MoveHorizontal,
      title: "Immersive Storytelling",
      description: "Receive detailed 5000-word immersive breakdowns exploring how AI restructures every facet of society."
    },
    {
      icon: Globe,
      title: "Governance Models",
      description: "Choose from various AI-controlled civilization models including totalitarian, benevolent, or hybrid approaches."
    },
    {
      icon: History,
      title: "Realistic Consequences",
      description: "Face pivotal choices that determine if your AI-managed society thrives or collapses under machine rule."
    },
    {
      icon: HardDrive,
      title: "Visual Simulation",
      description: "View photorealistic 4K images of AI-controlled civilizations with every interaction."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-6 font-mono text-xs text-cyber-yellow border border-cyber-yellow rounded-full">
            SYSTEM CAPABILITIES
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-yellow to-cyber-green">
              Advanced AI Governance Simulation
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore the capabilities of this AI-controlled world simulation and witness the dawn of a new era.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 right-0 w-1/3 h-px bg-gradient-to-l from-cyber-green to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-1/3 h-px bg-gradient-to-r from-cyber-yellow to-transparent"></div>
      </div>
    </section>
  );
};

export default FeaturesSection;
