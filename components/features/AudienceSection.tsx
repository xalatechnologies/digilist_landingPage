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
        <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4 sm:mb-5">
            En plattform. Mange bruksområder
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-navy/70 max-w-3xl mx-auto leading-relaxed">
            Tilpasset kommuner, kulturhus, skoler, idrett og bedrifter
          </p>
        </div>
        
        <StaggerAnimation 
          staggerDelay={0.1} 
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6"
        >
          {homeContent.audienceCards.map((card) => {
            const imageSrc = imageMap[card.title as keyof typeof imageMap] || '/images/utleieobjekter/kipo-kultursal.jpg';
            
            return (
              <div 
                key={card.title} 
                className="
                  relative rounded-sm overflow-hidden
                  bg-white border-2 border-gray-200/60 shadow-md
                  hover:border-cyan/60 hover:shadow-xl hover:shadow-cyan/20
                  transition-all duration-300 ease-smooth group cursor-pointer
                  flex flex-col
                "
              >
                {/* Image */}
                <div className="relative w-full h-52 sm:h-60 md:h-72 overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                    </div>
                    
                    {/* Title */}
                <div className="p-5 sm:p-6 md:p-8 bg-white">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy text-center group-hover:text-cyan transition-colors duration-300">
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
