'use client';

import React from 'react';
import { FileText, CheckCircle2, Mail, BarChart3 } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { StaggerAnimation } from '@/components/ui/ScrollAnimation';
import { homeContent } from '@/lib/homeContent';

const iconMap = [FileText, CheckCircle2, Mail, BarChart3];

export const HowItWorksSection: React.FC = () => {
  return (
    <Section variant="default" className="bg-white" id="slik-fungerer-det">
      <div className="relative">
        <SectionHeader
          title="Slik fungerer det"
          subtitle="Fire enkle steg fra søknad til oppfølging"
          badge="Prosessen"
        />
        
        <StaggerAnimation staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-12">
          {homeContent.howItWorks.map((step, idx) => {
            const Icon = iconMap[idx] || FileText;
            return (
              <div key={idx} className="flex flex-col items-center text-center group cursor-pointer">
                {/* Step label */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan/20 text-cyan text-sm font-semibold mb-4 group-hover:bg-cyan/30 transition-colors duration-300">
                  Steg {idx + 1}
                </div>
                
                {/* Icon */}
                <div className="w-20 h-20 rounded-lg bg-cyan flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                  <Icon size={40} className="text-white" strokeWidth={2} aria-hidden="true" />
                    </div>
                
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-navy mb-4 group-hover:text-cyan transition-colors duration-300">{step.title}</h3>
                
                {/* Description */}
                <p className="text-base text-navy/70 leading-relaxed">{step.description}</p>
                  </div>
            );
          })}
        </StaggerAnimation>
      </div>
      {/* Bottom dividing line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent mt-12 sm:mt-16" />
    </Section>
  );
};
