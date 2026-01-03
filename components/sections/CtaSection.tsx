'use client';

import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/layout/Section';
import { Heading, Text } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';

export interface CtaSectionProps {
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta?: string;
  variant?: 'default' | 'tinted' | 'gradient' | 'rich-primary' | 'rich-cyan' | 'rich-sky';
  className?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  primaryHref?: string;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = 'default',
  className = '',
  onPrimaryClick,
  onSecondaryClick,
  primaryHref,
}) => {
  return (
    <Section variant={variant} className={className}>
      <div className="text-center px-4 sm:px-0">
        <Heading level={2} className="mb-4 sm:mb-6">
          {title}
        </Heading>
        <Text variant="lead" className="max-w-2xl mx-auto mb-8 sm:mb-10 text-base sm:text-xl">
          {description}
        </Text>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryHref ? (
            <Link href={primaryHref}>
              <button 
                onClick={onPrimaryClick} 
                className="btn text-white font-bold shadow-soft btn-lg w-full sm:w-auto bg-cyan hover:bg-cyan/90 hover:shadow-lift focus-visible:ring-4 focus-visible:ring-cyan/35 transition-all duration-180 ease-smooth"
              >
                {primaryCta}
              </button>
            </Link>
          ) : (
          <button 
            onClick={onPrimaryClick} 
            className="btn text-white font-bold shadow-soft btn-lg w-full sm:w-auto bg-cyan hover:bg-cyan/90 hover:shadow-lift focus-visible:ring-4 focus-visible:ring-cyan/35 transition-all duration-180 ease-smooth"
          >
            {primaryCta}
          </button>
          )}
          {secondaryCta && (
          <Button 
            variant="secondary" 
            size="lg" 
            onClick={onSecondaryClick} 
            className="w-full sm:w-auto"
          >
            {secondaryCta}
          </Button>
          )}
        </div>
      </div>
    </Section>
  );
};
