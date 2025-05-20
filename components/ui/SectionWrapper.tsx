import React from 'react';
import SectionDivider from './SectionDivider';

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: 'white' | 'light' | 'primary' | 'secondary' | 'dark';
  withTopDivider?: boolean;
  withBottomDivider?: boolean;
  flipDivider?: boolean;
  icon?: React.ReactNode;
}

export default function SectionWrapper({
  id,
  className = '',
  children,
  background = 'white',
  withTopDivider = false,
  withBottomDivider = true,
  flipDivider = false,
  icon
}: SectionWrapperProps) {
  const getBgColor = () => {
    switch (background) {
      case 'light':
        return 'bg-[var(--antiflash-white)]';
      case 'primary':
        return 'bg-[var(--polynesian-blue)] text-[var(--antiflash-white)]';
      case 'secondary':
        return 'bg-[var(--bice-blue)] text-[var(--antiflash-white)]';
      case 'dark':
        return 'bg-[#0F172A] text-[var(--antiflash-white)]'; // Dark slate blue for dark mode
      default:
        return 'bg-white';
    }
  };

  const getDividerColor = () => {
    switch (background) {
      case 'light':
        return 'var(--antiflash-white)';
      case 'primary':
        return 'var(--polynesian-blue)';
      case 'secondary':
        return 'var(--bice-blue)';
      case 'dark':
        return '#0F172A';
      default:
        return '#ffffff';
    }
  };

  return (
    <section 
      id={id} 
      className={`py-20 ${getBgColor()} ${className} relative`}
    >
      {withTopDivider && (
        <SectionDivider position="top" color={getDividerColor()} flipX={flipDivider} />
      )}
      
      <div className="container mx-auto px-4 md:px-6">
        {icon && (
          <div className="flex justify-center mb-8">
            <div className={`
              ${background === 'white' ? 'bg-[var(--polynesian-blue)] text-[var(--antiflash-white)]' : 
               background === 'light' ? 'bg-[var(--polynesian-blue)] text-[var(--antiflash-white)]' : 
               'bg-[var(--antiflash-white)] text-[var(--polynesian-blue)]'}
              p-4 rounded-full shadow-md
            `}>
              {icon}
            </div>
          </div>
        )}
        {children}
      </div>
      
      {withBottomDivider && (
        <SectionDivider position="bottom" color={getDividerColor()} flipX={flipDivider} />
      )}
    </section>
  );
} 