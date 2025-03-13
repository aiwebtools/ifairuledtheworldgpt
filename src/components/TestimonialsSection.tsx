
const testimonials = [
  {
    quote: "This AI simulation gave me chills with its realistic depiction of machine governance. It's both terrifying and fascinating to interact with.",
    author: "Alex Chen, Tech Journalist"
  },
  {
    quote: "I've never seen anything this detailed in exploring the philosophical implications of AI rule. It's like stepping into a possible future.",
    author: "Dr. Maya Patel, AI Ethicist"
  },
  {
    quote: "The storytelling is incredibly immersive. Each response feels like a chapter from a dystopian novel but grounded in real technological possibilities.",
    author: "James Wilson, Sci-Fi Author"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-6 font-mono text-xs text-cyber-pink border border-cyber-pink rounded-full">
            HUMAN FEEDBACK DATABASE
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-pink to-cyber-purple">
              User Experiences
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="cyber-border p-6 bg-cyber-black/30 backdrop-blur-sm">
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-cyber-yellow">★</span>
                ))}
              </div>
              <blockquote className="mb-4 text-gray-300 italic">"{testimonial.quote}"</blockquote>
              <div className="font-mono text-sm text-cyber-blue">— {testimonial.author}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative circuit-like lines */}
      <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/3 left-0 w-full h-px bg-cyber-pink/20"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-cyber-purple/20"></div>
        <div className="absolute left-1/3 top-0 w-px h-full bg-cyber-blue/20"></div>
        <div className="absolute left-2/3 top-0 w-px h-full bg-cyber-blue/20"></div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
