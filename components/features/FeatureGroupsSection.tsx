'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { StaggerAnimation } from '@/components/ui/ScrollAnimation';
import { homeContent } from '@/lib/homeContent';

// Image mapping for each feature group
const featureImages = [
  '/images/utleieobjekter/kipo-kultursal.jpg',
  '/images/utleieobjekter/gyllenborg-idrettshall.jpg',
  '/images/utleieobjekter/flytende-badstua-ulefoss.jpg',
  '/images/utleieobjekter/kipo-kultursal.jpg',
];

export const FeatureGroupsSection: React.FC = () => {
  return (
    <Section variant="default" className="bg-white" id="funksjoner">
      <div className="relative">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-0 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan/20 ring-1 ring-cyan/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
            <span className="text-sm font-medium text-cyan">Komplett løsning</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-3 sm:mb-4">
            Funksjoner
          </h2>
          <p className="text-base sm:text-xl text-navy/70 max-w-2xl mx-auto">
            Alt du trenger for å administrere bookinger, ressurser og arrangementer
          </p>
        </div>
        
        {/* Alternating Image + Content Layout */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {homeContent.featureGroups.map((group, groupIdx) => {
            const imageSrc = featureImages[groupIdx] || featureImages[0];
            const isEven = groupIdx % 2 === 0;
            
            return (
              <StaggerAnimation 
                key={group.title}
                staggerDelay={0.1}
                className="w-full"
              >
                <div className={`
                  relative rounded-md overflow-hidden
                  bg-gradient-to-br from-white via-cyan/5 to-white
                  border border-sky2/20 shadow-xl hover:shadow-2xl
                  transition-all duration-500 ease-smooth group
                  ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}
                  flex flex-col lg:flex
                `}>
                  {/* Image Section - 50% width on large screens */}
                  <div className="relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto min-h-[400px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 via-transparent to-navy/10 z-10" />
                    <Image
                      src={imageSrc}
                      alt={group.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={groupIdx < 2}
                    />
                    {/* Gradient overlay for text readability */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy/60 via-navy/20 to-transparent z-10" />
                    <div className="absolute bottom-6 left-6 right-6 z-20">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
                        {group.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Content Section - 50% width on large screens */}
                  <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center bg-white">
                    {/* Feature list */}
                    <ul className="space-y-4">
                      {group.items.map((item, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-start gap-4 group/item"
                        >
                          <div className="w-6 h-6 rounded-lg bg-cyan/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-cyan/20 transition-colors duration-300">
                            <Check 
                              className="text-cyan" 
                              size={16} 
                              strokeWidth={2.5}
                              aria-hidden="true"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-navy mb-1 group-hover/item:text-cyan transition-colors duration-300">
                              {item.title}
                            </h4>
                            <p className="text-base text-navy/60 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerAnimation>
            );
          })}
        </div>
        
        {/* CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link 
            href="/funksjonalitet"
            className="inline-flex items-center gap-2 px-8 py-4 bg-cyan text-white hover:text-white rounded-lg font-semibold hover:bg-cyan/90 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Se alle funksjoner i detalj
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-180" aria-hidden="true" />
          </Link>
        </div>
      </div>
      {/* Bottom dividing line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent mt-12 sm:mt-16" />
    </Section>
  );
};
