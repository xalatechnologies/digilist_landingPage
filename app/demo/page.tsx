'use client';

import React from 'react';
import { ArrowRight, PlayCircle, FileText, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Typography';
import { Text } from '@/components/ui/Typography';
import { Section } from '@/components/layout/Section';
import { LearningPlatform } from '@/components/features/LearningPlatform';

export default function DemoPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-background-light via-white to-white pt-12 pb-16 md:pt-16 md:pb-20 border-b border-border-default">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Text Content */}
            <div className="text-center lg:text-left">
              <Badge className="mb-4">Læringsplattform</Badge>
              
              <Heading level={1} className="mb-4 text-3xl md:text-4xl lg:text-5xl leading-[1.1]">
                Lær å bruke{' '}
                <span className="text-green-600">Digilist</span>
              </Heading>
              
              <Text variant="lead" className="mb-6 text-base md:text-lg max-w-xl mx-auto lg:mx-0">
                Utforsk våre omfattende læringsressurser og lær hvordan du bruker hver funksjon. 
                Fra grunnleggende oppsett til avanserte funksjoner.
              </Text>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button size="lg" showArrow className="!bg-green-600 !hover:bg-green-700 text-white">
                  Kom i gang
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                >
                  Se alle moduler
                </Button>
              </div>

              {/* Quick Stats/Features */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border-default">
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                    <PlayCircle className="text-green-600" size={18} aria-hidden="true" />
                    <span className="text-xl font-bold text-navy-base">20+</span>
                  </div>
                  <p className="text-xs text-text-secondary">Videoer</p>
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                    <FileText className="text-green-600" size={18} aria-hidden="true" />
                    <span className="text-xl font-bold text-navy-base">6</span>
                  </div>
                  <p className="text-xs text-text-secondary">Moduler</p>
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                    <Clock className="text-green-600" size={18} aria-hidden="true" />
                    <span className="text-xl font-bold text-navy-base">2t</span>
                  </div>
                  <p className="text-xs text-text-secondary">Totalt</p>
                </div>
              </div>
            </div>

            {/* Right Column: iPad Design */}
            <div className="relative lg:pl-8 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md group">
                {/* iPad Frame */}
                <div className="relative bg-gray-800 rounded-[20px] p-2 shadow-2xl">
                  {/* iPad Screen */}
                  <div className="bg-white rounded-[12px] overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-white px-4 pt-2 pb-1.5 flex items-center justify-between border-b border-gray-200">
                      <div className="text-[10px] font-semibold text-navy-base">9:41</div>
                      <div className="flex gap-1">
                        <div className="w-1 h-1 rounded-full bg-navy-base" aria-hidden="true"></div>
                        <div className="w-1 h-1 rounded-full bg-navy-base" aria-hidden="true"></div>
                        <div className="w-1 h-1 rounded-full bg-navy-base" aria-hidden="true"></div>
                      </div>
                    </div>
                    
                    {/* App Header */}
                    <div className="bg-green-600 px-4 py-3">
                      <h3 className="text-white font-bold text-sm tracking-tight mb-0.5">Læringsmoduler</h3>
                      <p className="text-white/80 text-[8px] font-medium">developed by Xala tech</p>
                    </div>
                    
                    {/* Content */}
                    <div className="px-4 py-4 space-y-3">
                      {[
                        { title: 'Felles Kalender', icon: '📅', color: 'bg-blue-100' },
                        { title: 'Automatisk Faktura', icon: '💳', color: 'bg-green-100' },
                        { title: 'Adgangskontroll', icon: '🔒', color: 'bg-purple-100' }
                      ].map((item, idx) => (
                        <div key={idx} className="bg-white border-2 border-gray-200 rounded-lg p-3 hover:border-green-500 transition-all cursor-pointer group/item">
                          <div className="flex items-center gap-3">
                            <div className={`${item.color} p-2 rounded-lg shrink-0`}>
                              <span className="text-lg">{item.icon}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-navy-base text-sm tracking-tight mb-0.5 group-hover/item:text-green-600 transition-colors">
                                {item.title}
                              </h4>
                              <p className="text-xs text-text-secondary">3 leksjoner • 15 min</p>
                            </div>
                            <ArrowRight className="text-green-600 group-hover/item:translate-x-1 transition-transform shrink-0" size={16} aria-hidden="true" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-100 rounded-full blur-2xl -z-10" aria-hidden="true"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-background-light rounded-full blur-2xl -z-10" aria-hidden="true"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEARNING PLATFORM SECTION */}
      <section className="py-section bg-gradient-to-b from-gray-50/30 via-white to-white">
        <div className="max-w-[1140px] mx-auto px-6">
          <LearningPlatform />
        </div>
      </section>
    </div>
  );
}

