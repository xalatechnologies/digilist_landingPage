import React from 'react';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({ level, children, className = '', ...props }) => {
  const baseStyles = "font-bold text-navy-base tracking-tighter";
  
  const levelStyles = {
    1: "text-5xl md:text-[4rem] leading-[1.1]",
    2: "text-3xl md:text-[2.5rem] mb-4",
    3: "text-2xl mb-3",
    4: "text-xl mb-2",
    5: "text-lg mb-2",
    6: "text-base mb-2",
  };

  const combinedClassName = `${baseStyles} ${levelStyles[level]} ${className}`;
  
  switch (level) {
    case 1:
      return <h1 className={combinedClassName} {...(props as React.HTMLAttributes<HTMLHeadingElement>)}>{children}</h1>;
    case 2:
      return <h2 className={combinedClassName} {...(props as React.HTMLAttributes<HTMLHeadingElement>)}>{children}</h2>;
    case 3:
      return <h3 className={combinedClassName} {...(props as React.HTMLAttributes<HTMLHeadingElement>)}>{children}</h3>;
    case 4:
      return <h4 className={combinedClassName} {...(props as React.HTMLAttributes<HTMLHeadingElement>)}>{children}</h4>;
    case 5:
      return <h5 className={combinedClassName} {...(props as React.HTMLAttributes<HTMLHeadingElement>)}>{children}</h5>;
    case 6:
      return <h6 className={combinedClassName} {...(props as React.HTMLAttributes<HTMLHeadingElement>)}>{children}</h6>;
  }
};

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'body' | 'lead' | 'small' | 'muted';
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({ 
  variant = 'body', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "tracking-tight";
  
  const variantStyles = {
    body: "text-base text-navy-base leading-relaxed",
    lead: "text-xl text-text-secondary leading-relaxed",
    small: "text-sm text-text-secondary",
    muted: "text-sm text-text-muted",
  };

  return (
    <p className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </p>
  );
};

