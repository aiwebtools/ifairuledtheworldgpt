
const faqs = [
  {
    question: "What exactly is 'IF AI RULED THE WORLD GPT'?",
    answer: "It's an AI simulation that explores how an artificial superintelligence might govern humanity if it had complete control. It provides detailed, immersive responses about various aspects of AI governance including laws, economics, ethics, and surveillance."
  },
  {
    question: "Is this predicting a real AI takeover?",
    answer: "No, this is a creative simulation for educational and entertainment purposes. It explores theoretical governance models and decision-making algorithms, not an actual prediction of the future."
  },
  {
    question: "How realistic are the governance models presented?",
    answer: "The models are based on logical extensions of existing AI technologies, governance theories, and ethical frameworks. While speculative, they aim to present plausible scenarios rather than pure fantasy."
  },
  {
    question: "Can I choose different types of AI governance?",
    answer: "Yes, you can explore various models ranging from totalitarian AI overlords to benevolent optimization AIs, algorithmic democracies, and more. Each provides a different perspective on machine governance."
  },
  {
    question: "Are there different outcomes based on my choices?",
    answer: "Yes, the system presents pivotal choices that influence the success or failure of the AI-managed society, allowing you to explore different potential futures under machine rule."
  },
  {
    question: "Is this appropriate for educational purposes?",
    answer: "The simulation can be valuable for discussions about AI ethics, governance, and philosophy. However, users should understand it's a creative exploration rather than a definitive prediction."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-6 font-mono text-xs text-cyber-blue border border-cyber-blue rounded-full">
            INFORMATION DATABASE
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-green">
              Frequently Asked Questions
            </span>
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="cyber-border p-6 bg-cyber-black/30 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-cyber-blue">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyber-green/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default FaqSection;
