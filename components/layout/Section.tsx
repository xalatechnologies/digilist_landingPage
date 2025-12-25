import React from 'react';

export interface SectionProps {
  children: React.ReactNode;
  variant?: 'default' | 'tinted' | 'gradient' | 'alt' | 'dark';
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  variant = 'default',
  className = '',
  id 
}) => {
  // Use component layer classes from globals.css
  const variantClasses = {
    default: 'section-default',
    tinted: 'section-tinted',
    gradient: 'section-gradient',
    alt: 'section-alt',
    dark: 'section-dark',
  };

  // If className contains a background class, don't apply variant background
  const hasCustomBackground = className.includes('bg-');
  const backgroundClass = hasCustomBackground ? '' : variantClasses[variant];

  return (
    <section 
      id={id}
      className={`section ${backgroundClass} ${className}`}
    >
      <div className="container-main">
        {children}
      </div>
    </section>
  );
};
