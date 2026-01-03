'use client';

import React from 'react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { Heading, Text } from '@/components/ui/Typography';
import { 
  Calendar, 
  FileText, 
  Folder, 
  Ticket, 
  Lock, 
  Globe,
} from 'lucide-react';
import { StaggerAnimation } from '@/components/ui/ScrollAnimation';

const integrations = [
  {
    icon: Calendar,
    title: 'Outlook-kalender',
    description: 'Synkronisering med Outlook for automatisk kalenderoppdatering',
  },
  {
    icon: FileText,
    title: 'Visma',
    description: 'Direkte integrasjon eller filoverføring for fakturering',
  },
  {
    icon: Folder,
    title: 'Acos Websak',
    description: 'Integrasjon med Acos for dokumenthåndtering',
  },
  {
    icon: Ticket,
    title: 'Billettsystem',
    description: 'Kobling til billettsystemer for arrangementer',
  },
  {
    icon: Lock,
    title: 'Låssystem (RCO)',
    description: 'Integrasjon med låssystemer for automatisk adgang',
  },
  {
    icon: Globe,
    title: 'Nettside-modul',
    description: 'Embed eller widget for booking på kommunens nettside',
  },
];

export const IntegrationShowcase: React.FC = () => {
  return (
    <Section variant="default" className="bg-white" id="integrasjoner">
      <div className="relative">
            <SectionHeader 
              title="Integrasjoner" 
          subtitle="Integrer med de systemene du allerede bruker for en sømløs arbeidsflyt"
            />
            
        {/* Call-to-action buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 px-4 sm:px-0">
              {[
                'Ingen dobbeltføring',
                'Automatisk dataflyt',
                'Enkelt å sette opp',
              ].map((item, idx) => (
            <div
              key={idx}
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-sm bg-cyan text-white text-sm sm:text-base font-semibold min-h-[44px] flex items-center"
            >
              {item}
            </div>
          ))}
        </div>
        
        {/* Integration cards grid - 2x3 */}
        <StaggerAnimation staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {integrations.map((integration, idx) => {
              const Icon = integration.icon;
              
              return (
                <div
                  key={idx}
                className="
                  flex flex-col gap-4 p-6 sm:p-7 rounded-sm
                  bg-white border-2 border-gray-200/60 shadow-md
                  hover:border-cyan/60 hover:shadow-xl hover:shadow-cyan/20
                    transition-all duration-300 ease-smooth cursor-pointer group
                  h-full
                "
                >
                <div className="flex items-start gap-4">
                  <div className="
                    w-12 h-12 sm:w-14 sm:h-14 rounded-sm bg-cyan/10
                    flex items-center justify-center shrink-0 min-w-[48px] min-h-[48px]
                    group-hover:bg-cyan/20 transition-all duration-300
                  ">
                    <Icon size={24} className="text-cyan sm:w-6 sm:h-6" strokeWidth={2} />
                  </div>
                  <div className="flex-1 pt-1 min-w-0">
                    <Heading level={4} className="text-lg sm:text-xl font-bold text-navy mb-2 group-hover:text-cyan transition-colors">
                      {integration.title}
                    </Heading>
                  </div>
                </div>
                <div className="pl-0 sm:pl-[64px]">
                  <Text variant="body" className="text-base sm:text-lg text-navy/70 leading-relaxed">
                      {integration.description}
                    </Text>
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

