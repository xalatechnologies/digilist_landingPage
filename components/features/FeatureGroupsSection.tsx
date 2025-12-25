'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, CreditCard, Shield, Palette, Check, ArrowRight, Sparkles } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { homeContent } from '@/lib/homeContent';

const groupIcons = [Calendar, CreditCard, Shield, Palette];

export const FeatureGroupsSection: React.FC = () => {
  return (
    <Section variant="default" id="funksjoner" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative">
        <SectionHeader
          title="Funksjoner"
          subtitle="Alt du trenger for å administrere bookinger, ressurser og arrangementer"
          badge="Komplett løsning"
        />
        
        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-8 sm:mt-12">
          {homeContent.featureGroups.map((group, groupIdx) => {
            const Icon = groupIcons[groupIdx] || Calendar;
            
            return (
              <div 
                key={group.title} 
                className="
                  bg-white
                  rounded-xl border border-border p-6 sm:p-8 
                  shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-primary/30
                  transition-all duration-300 ease-smooth group
                "
              >
                {/* Header with icon and title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center shadow-sm">
                    <Icon className="text-white" size={28} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-navy group-hover:text-primary transition-colors duration-180">
                      {group.title}
                    </h3>
                    <p className="text-sm text-navy/60 mt-1 flex items-center gap-1.5">
                      <Sparkles size={14} className="text-cyan" />
                      {group.items.length} funksjoner
                    </p>
                  </div>
                </div>
                
                {/* Feature list */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.items.map((item, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-center gap-2.5 text-navy group/item"
                    >
                      <div className="w-5 h-5 rounded-full bg-cyan/20 flex items-center justify-center shrink-0">
                        <Check 
                          className="text-cyan" 
                          size={14} 
                          strokeWidth={3}
                          aria-hidden="true"
                        />
                      </div>
                      <span className="text-sm sm:text-base font-medium group-hover/item:text-primary transition-colors duration-180">
                        {item.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        
        {/* CTA */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link 
            href="/funksjonalitet"
            className="btn-gradient rounded-lg group"
          >
            Se alle funksjoner i detalj
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-180" aria-hidden="true" />
          </Link>
        </div>
        
        {/* Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { number: '12+', label: 'Booking-funksjoner', color: 'text-primary' },
            { number: '100%', label: 'Norsk support', color: 'text-cyan' },
            { number: '24/7', label: 'Tilgjengelig', color: 'text-success' },
            { number: 'GDPR', label: 'Kompatibel', color: 'text-purple-600' },
          ].map((stat, idx) => (
            <div 
              key={idx}
              className="
                text-center p-4 sm:p-6 rounded-lg 
                bg-surface/80 backdrop-blur-sm ring-1 ring-border-light 
                shadow-sm hover:shadow-soft hover:-translate-y-1
                transition-all duration-180 ease-smooth
              "
            >
              <div className={`text-2xl sm:text-3xl font-bold ${stat.color} mb-1`}>{stat.number}</div>
              <div className="text-xs sm:text-sm text-text-secondary font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
