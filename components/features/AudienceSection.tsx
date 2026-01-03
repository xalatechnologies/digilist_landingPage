'use client';

import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/layout/Section';
import { StaggerAnimation } from '@/components/ui/ScrollAnimation';
import { homeContent } from '@/lib/homeContent';

const imageMap = {
  'Kommuner': '/images/utleieobjekter/kipo-kultursal.jpg',
  'Kulturhus': '/images/utleieobjekter/kipo-kultursal.jpg',
  'Idrettslag': '/images/utleieobjekter/gyllenborg-idrettshall.jpg',
  'Bedrifter': '/images/utleieobjekter/flytende-badstua-ulefoss.jpg',
};

export const AudienceSection: React.FC = () => {
  return (
    <Section variant="default" className="bg-white py-8 sm:py-12 md:py-16" id="hvem-passer-det-for">
      <div className="relative">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-3 sm:mb-4">
            En plattform. Mange bruksområder
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-navy/70 max-w-3xl mx-auto px-4">
            Tilpasset kommuner, kulturhus, skoler, idrett og bedrifter
          </p>
        </div>
        
        <StaggerAnimation 
          staggerDelay={0.1} 
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6"
        >
          {homeContent.audienceCards.map((card) => {
            const imageSrc = imageMap[card.title as keyof typeof imageMap] || '/images/utleieobjekter/kipo-kultursal.jpg';
            
            return (
              <div 
                key={card.title} 
                className="
                  relative rounded-md overflow-hidden
                  bg-white border border-sky2/20
                  hover:border-cyan/50 hover:shadow-xl
                  transition-all duration-300 ease-smooth group cursor-pointer
                  flex flex-col
                "
              >
                {/* Image */}
                <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                
                {/* Title */}
                <div className="p-4 sm:p-5 md:p-6 bg-white">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-navy text-center group-hover:text-cyan transition-colors duration-300">
                    {card.title}
                  </h3>
                </div>
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
