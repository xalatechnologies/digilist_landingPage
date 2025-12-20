import React from 'react';

export interface SectionProps {
  children: React.ReactNode;
  variant?: 'default' | 'zebra' | 'dark';
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  variant = 'default',
  className = '',
  id 
}) => {
  const baseStyles = "py-section";
  
  const variantStyles = {
    default: "bg-white",
    zebra: "bg-zebra-tint border-t border-border-default",
    dark: "bg-navy-base text-white",
  };

  // If className contains a background class, don't apply variant background
  const hasCustomBackground = className.includes('bg-');
  const backgroundStyle = hasCustomBackground ? '' : variantStyles[variant];

  return (
    <section 
      id={id}
      className={`${baseStyles} ${backgroundStyle} ${className}`}
    >
      <div className="max-w-[1140px] mx-auto px-6">
        {children}
      </div>
    </section>
  );
};

