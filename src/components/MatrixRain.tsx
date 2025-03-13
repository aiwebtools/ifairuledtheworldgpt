
import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const width = window.innerWidth;
    const numberOfColumns = Math.floor(width / 20);
    
    // Clear any existing columns
    container.innerHTML = '';
    
    // Create matrix columns
    for (let i = 0; i < numberOfColumns; i++) {
      const column = document.createElement('div');
      column.className = 'matrix-column';
      column.style.left = `${i * 20}px`;
      
      // Randomize animation duration and delay
      const duration = 10 + Math.random() * 20;
      const delay = Math.random() * 5;
      column.style.animationDuration = `${duration}s`;
      column.style.animationDelay = `${delay}s`;
      
      // Fill with random characters
      const columnHeight = Math.floor(Math.random() * 25) + 10;
      for (let j = 0; j < columnHeight; j++) {
        const char = document.createElement('div');
        char.textContent = String.fromCharCode(0x30A0 + Math.random() * 96);
        column.appendChild(char);
      }
      
      container.appendChild(column);
    }
    
    // Handle window resize
    const handleResize = () => {
      if (container) {
        const newWidth = window.innerWidth;
        const newNumberOfColumns = Math.floor(newWidth / 20);
        
        // Only rebuild if the column count changes
        if (container.childElementCount !== newNumberOfColumns) {
          // Clear and rebuild
          container.innerHTML = '';
          for (let i = 0; i < newNumberOfColumns; i++) {
            const column = document.createElement('div');
            column.className = 'matrix-column';
            column.style.left = `${i * 20}px`;
            
            const duration = 10 + Math.random() * 20;
            const delay = Math.random() * 5;
            column.style.animationDuration = `${duration}s`;
            column.style.animationDelay = `${delay}s`;
            
            const columnHeight = Math.floor(Math.random() * 25) + 10;
            for (let j = 0; j < columnHeight; j++) {
              const char = document.createElement('div');
              char.textContent = String.fromCharCode(0x30A0 + Math.random() * 96);
              column.appendChild(char);
            }
            
            container.appendChild(column);
          }
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return <div ref={containerRef} className="matrix-bg"></div>;
};

export default MatrixRain;
