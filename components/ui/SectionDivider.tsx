import React from 'react';

interface SectionDividerProps {
  position: 'top' | 'bottom';
  color?: string;
  flipX?: boolean;
}

export default function SectionDivider({ 
  position = 'bottom', 
  color = 'var(--antiflash-white)',
  flipX = false
}: SectionDividerProps) {
  // Utilisation de la couleur bleue claire pour tous les dividers
  const dividerColor = 'var(--polynesian-blue)';
  
  return (
    <div 
      className={`absolute left-0 w-full overflow-hidden ${
        position === 'top' ? 'top-0' : 'bottom-0 rotate-180'
      } ${flipX ? 'scale-x-[-1]' : ''}`}
      style={{ height: '50px' }}
    >
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
        style={{ 
          width: '100%', 
          height: '50px',
          display: 'block'
        }}
      >
        {/* Utilisation d'une seule vague simplifiée */}
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          fill={dividerColor}
        />
      </svg>
    </div>
  );
} 