'use client';

import React, { useState } from 'react';
import { Shield, Eye, Headphones, CheckCircle2 } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { Text } from '@/components/ui/Typography';
import { homeContent } from '@/lib/homeContent';

const iconMap = [Shield, Eye, Headphones];

export const OperationsTabsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section variant="default" className="bg-white" id="trygg-drift">
      <div className="relative">
        <SectionHeader
          title="Trygg drift"
          subtitle="Sikkerhet, tilgjengelighet og support på høyt nivå"
        />
        
        <div className="mt-10 sm:mt-12">
          {/* Tabs */}
          <div className="flex justify-center mb-8 sm:mb-10 px-4 sm:px-0">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {homeContent.operationsTabs.map((tab, idx) => {
                const Icon = iconMap[idx] || Shield;
                const isActive = activeTab === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`
                      px-5 sm:px-6 py-3 sm:py-3.5 rounded-sm font-semibold flex items-center gap-2 
                      transition-all duration-300 ease-smooth min-h-[48px] focus-ring
                      ${isActive 
                        ? 'bg-cyan text-white shadow-lg' 
                        : 'bg-white text-navy border-2 border-gray-200/60 shadow-md hover:border-cyan/60 hover:shadow-xl hover:shadow-cyan/20'
                      }
                    `}
                    aria-pressed={isActive}
                    aria-label={`Vis ${tab.title}`}
                  >
                    <Icon size={18} aria-hidden="true" />
                    <span className="text-sm sm:text-base">{tab.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content - Single card with 2 columns */}
          <div className="max-w-5xl mx-auto px-4 sm:px-0">
            <div className="bg-white rounded-sm border-2 border-gray-200/60 shadow-md p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
                {homeContent.operationsTabs[activeTab]?.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle2 size={22} className="text-cyan mt-0.5 shrink-0 min-w-[22px]" strokeWidth={2.5} />
                    <Text variant="body" className="text-base sm:text-lg text-navy/80 leading-relaxed flex-1">
                      {point}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom dividing line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent mt-12 sm:mt-16" />
    </Section>
  );
};
