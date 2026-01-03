'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from './SectionHeader';
import { Heading, Text } from '@/components/ui/Typography';
import { Shield, FileText, Headphones, CheckCircle2 } from 'lucide-react';
import type { CategoryItem } from './CategoryCardGrid';
import { CategoryCardGrid } from './CategoryCardGrid';

export interface CategorySectionProps {
  id: string;
  title: string;
  subtitle: string;
  categories: CategoryItem[];
  variant?: 'default' | 'tinted' | 'gradient' | 'dark' | 'rich-sky';
  columns?: 1 | 2 | 3;
  className?: string;
  image?: string;
  imageAlt?: string;
}

const tabConfig = [
  { 
    id: 0, 
    icon: Shield, 
    label: 'Autentisering',
    bgColor: 'bg-cyan/10',
    iconColor: 'text-cyan',
    activeBg: 'bg-cyan',
    preview: 'ID-porten, SSO, MFA',
    image: '/images/utleieobjekter/kipo-kultursal.jpg',
  },
  { 
    id: 1, 
    icon: FileText, 
    label: 'Dokumentasjon',
    bgColor: 'bg-cyan/10',
    iconColor: 'text-cyan',
    activeBg: 'bg-cyan',
    preview: 'WCAG, GDPR, DPA',
    image: '/images/utleieobjekter/gyllenborg-idrettshall.jpg',
  },
  { 
    id: 2, 
    icon: Headphones, 
    label: 'Drift',
    bgColor: 'bg-cyan/10',
    iconColor: 'text-cyan',
    activeBg: 'bg-cyan',
    preview: 'Support, vedlikehold',
    image: '/images/utleieobjekter/flytende-badstua-ulefoss.jpg',
  },
];

export const CategorySection: React.FC<CategorySectionProps> = ({
  id,
  title,
  subtitle,
  categories,
  variant = 'default',
  columns = 3,
  className = '',
  image,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  // If no image flag, use simple grid layout
  if (!image) {
    return (
      <Section variant={variant} id={id} className={className}>
        <div className="bg-success/5 rounded-sm p-6 sm:p-8 md:p-10">
          <SectionHeader title={title} subtitle={subtitle} />
          <CategoryCardGrid categories={categories} columns={columns} />
        </div>
      </Section>
    );
  }

  const activeCategory = categories[activeTab];
  const activeConfig = tabConfig[activeTab];
  const Icon = activeConfig.icon;

  return (
    <Section variant="default" className={`bg-white ${className}`} id={id}>
      <div className="relative">
        <SectionHeader title={title} subtitle={subtitle} />
        
        {/* Modern Category tabs - Horizontal pill design */}
        <div className="mb-10 sm:mb-14 px-4 sm:px-0">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {tabConfig.map((tab, idx) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === idx;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`
                    relative flex items-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-sm
                    transition-all duration-300 cursor-pointer group min-h-[48px]
                    ${isActive 
                      ? 'bg-gradient-to-r from-cyan to-cyan/90 text-white shadow-xl shadow-cyan/30' 
                      : 'bg-white text-navy border-2 border-gray-200/60 shadow-md hover:border-cyan/60 hover:shadow-xl hover:shadow-cyan/20 hover:bg-cyan/5'
                    }
                  `}
                  aria-pressed={isActive}
                  aria-label={`Velg ${tab.label}`}
                >
                  <div className={`w-9 h-9 rounded-sm flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isActive 
                      ? 'bg-white/20 backdrop-blur-sm' 
                      : 'bg-cyan/10 group-hover:bg-cyan/20'
                  }`}>
                    <TabIcon 
                      size={18} 
                      className={`transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-cyan'
                      }`} 
                      strokeWidth={2.5} 
                    />
                  </div>
                  <div className="text-left">
                    <div className={`text-sm font-semibold transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-navy group-hover:text-cyan'
                    }`}>
                      {tab.label}
                    </div>
                    <div className={`text-xs mt-0.5 transition-colors duration-300 ${
                      isActive ? 'text-white/90' : 'text-navy/60 group-hover:text-cyan/80'
                    }`}>
                      {tab.preview}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      
        {/* Modern Content Card with Image Split Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-white via-cyan/5 to-white rounded-sm border-2 border-gray-200/60 shadow-md hover:border-cyan/60 hover:shadow-xl hover:shadow-cyan/20 transition-all duration-300 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-64 sm:h-80 lg:h-auto min-h-[400px] overflow-hidden order-2 lg:order-1">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 via-transparent to-navy/10 z-10" />
                <Image
                  src={activeConfig.image}
                  alt={activeCategory.category}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Gradient overlay for text */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy/70 via-navy/30 to-transparent z-10" />
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <Heading level={3} className="text-2xl sm:text-3xl text-white font-bold drop-shadow-lg">
                    {activeCategory.category}
                  </Heading>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center bg-white order-1 lg:order-2">
                <div className="space-y-4 sm:space-y-5">
                  {activeCategory.items.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-4 group/item hover:bg-cyan/5 rounded-sm p-3 -m-3 transition-colors duration-300"
                    >
                      <div className="w-6 h-6 rounded-sm bg-cyan/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-cyan/20 transition-colors duration-300">
                        <CheckCircle2 
                          size={18} 
                          className="text-cyan" 
                          strokeWidth={2.5} 
                        />
                      </div>
                      <Text variant="body" className="text-base text-navy/80 leading-relaxed group-hover/item:text-navy transition-colors duration-300">
                        {item}
                      </Text>
                    </div>
                  ))}
                </div>
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

