'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Dumbbell, Theater, Shield, Sparkles } from 'lucide-react';
import { Heading, Text } from '@/components/ui/Typography';
import { homeContent } from '@/lib/homeContent';

/**
 * Hero Section with brand-consistent design tokens
 * Uses CSS variables from tokens.css via Tailwind utilities
 */
export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white min-h-[600px] sm:min-h-[650px] md:min-h-[700px] lg:min-h-[800px]">

      {/* Background Image - Right Side - Hidden on mobile, shown on desktop */}
      <div className="hidden lg:block absolute inset-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-white">
        <div className="absolute right-0 top-[-5%] bottom-0 w-[70%] xl:w-[65%] h-full bg-white hero-image-container">
          <Image
            src="/images/hero-devices.png"
            alt="Digilist platform on laptop and mobile devices"
            fill
            className="object-contain object-right scale-110 hero-device-image"
            priority
            unoptimized
            style={{ 
              backgroundColor: 'transparent', 
              background: 'none',
              backgroundImage: 'none'
            }}
          />
        </div>
      </div>

      {/* Mobile Image - Shown only on mobile */}
      <div className="lg:hidden relative w-full h-[250px] sm:h-[350px] mb-6 sm:mb-8 mx-auto px-4">
        <div className="relative w-full h-full max-w-md mx-auto">
          <Image
            src="/images/hero-devices.png"
            alt="Digilist platform on laptop and mobile devices"
            fill
            className="object-contain object-center hero-device-image"
            priority
            unoptimized
            style={{ 
              backgroundColor: 'transparent', 
              background: 'none',
              backgroundImage: 'none'
            }}
          />
        </div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-12 md:pb-20 lg:pb-28 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left relative z-20 w-full">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-surface/80 backdrop-blur-sm ring-1 ring-cyan/20 shadow-sm mb-4 sm:mb-6"
            >
              <Sparkles size={14} className="sm:w-4 sm:h-4 text-cyan" />
              <span className="text-xs sm:text-sm font-medium text-navy">Smart booking. Enkelt for alle.</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <Heading level={1} className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] px-2 sm:px-0">
                {homeContent.hero.subtitle}
              </Heading>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <Text variant="body" className="mb-6 sm:mb-8 text-sm sm:text-base text-navy/70 max-w-xl mx-auto lg:mx-0 px-2 sm:px-0">
                {homeContent.hero.description}
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8"
            >
              <Link href="/demo" className="w-full sm:w-auto">
                <button className="btn text-white font-bold shadow-soft btn-lg w-full sm:w-auto group bg-cyan hover:bg-cyan/90 hover:shadow-lift focus-visible:ring-4 focus-visible:ring-cyan/35 transition-all duration-180 ease-smooth">
                  Mer om DigiList
                </button>
              </Link>
            </motion.div>

            {/* Trust & Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              className="pt-6 sm:pt-8 border-t border-border"
            >
              <p className="text-xs sm:text-sm font-semibold text-navy mb-4 sm:mb-6 flex items-center gap-2 justify-center lg:justify-start">
                <Shield size={14} className="sm:w-4 sm:h-4 text-cyan" />
                Sikkerhet & Sertifisering
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-nowrap justify-center lg:justify-start gap-1.5 sm:gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide"
              >
                {/* Vipps - uses brand color */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="group flex items-center gap-1.5 px-2 py-1.5 bg-white rounded-md border border-sky2/50 shadow-sm hover:shadow-md hover:border-cyan hover:-translate-y-0.5 transition-all duration-300 ease-smooth cursor-pointer shrink-0"
                >
                  <div className="w-5 h-5 rounded bg-vipps/10 flex items-center justify-center shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" className="fill-vipps"/>
                    </svg>
                  </div>
                  <span className="text-[11px] font-semibold text-vipps group-hover:text-vipps/80 transition-colors duration-180">Vipps</span>
                </motion.div>
                
                {/* BankID */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.65 }}
                  className="group flex items-center gap-1.5 px-2 py-1.5 bg-white rounded-md border border-sky2/50 shadow-sm hover:shadow-md hover:border-cyan hover:-translate-y-0.5 transition-all duration-300 ease-smooth cursor-pointer shrink-0"
                >
                  <div className="w-5 h-5 rounded bg-navy/10 flex items-center justify-center shrink-0">
                    <svg width="14" height="11" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="4" width="32" height="16" rx="2" className="fill-navy"/>
                      <rect x="4" y="6" width="8" height="6" rx="1" fill="white" opacity="0.3"/>
                      <rect x="4" y="14" width="12" height="2" rx="1" fill="white" opacity="0.5"/>
                      <rect x="4" y="17" width="8" height="2" rx="1" fill="white" opacity="0.5"/>
                      <circle cx="28" cy="10" r="3" className="fill-success"/>
                    </svg>
                  </div>
                  <span className="text-[11px] font-semibold text-navy group-hover:text-primary transition-colors duration-180">BankID</span>
                </motion.div>
                
                {/* GDPR */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="group flex items-center gap-1.5 px-2 py-1.5 bg-white rounded-md border border-sky2/50 shadow-sm hover:shadow-md hover:border-cyan hover:-translate-y-0.5 transition-all duration-300 ease-smooth cursor-pointer shrink-0"
                >
                  <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center shrink-0">
                    <Shield size={12} className="text-primary" strokeWidth={2.5} />
                  </div>
                  <span className="text-[11px] font-semibold text-primary group-hover:text-primary/80 transition-colors duration-180">GDPR</span>
                </motion.div>
                
                {/* ISO 27001 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.75 }}
                  className="group flex items-center gap-1.5 px-2 py-1.5 bg-white rounded-md border border-sky2/50 shadow-sm hover:shadow-md hover:border-cyan hover:-translate-y-0.5 transition-all duration-300 ease-smooth cursor-pointer shrink-0"
                >
                  <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center shrink-0">
                    <svg width="14" height="14" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="14" cy="14" r="14" className="fill-primary"/>
                      <text x="14" y="18" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="900" fill="white" textAnchor="middle" letterSpacing="0.5">ISO</text>
                    </svg>
                  </div>
                  <div className="flex flex-col shrink-0">
                    <span className="text-[11px] font-semibold text-navy leading-tight group-hover:text-primary transition-colors duration-180 whitespace-nowrap">27001</span>
                    <span className="text-[9px] text-navy/60 whitespace-nowrap">Sertifisert</span>
                  </div>
                </motion.div>
                
                {/* ISO 27701 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  className="group flex items-center gap-1.5 px-2 py-1.5 bg-white rounded-md border border-sky2/50 shadow-sm hover:shadow-md hover:border-cyan hover:-translate-y-0.5 transition-all duration-300 ease-smooth cursor-pointer shrink-0"
                >
                  <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center shrink-0">
                    <svg width="14" height="14" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="14" cy="14" r="14" className="fill-primary"/>
                      <text x="14" y="18" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="900" fill="white" textAnchor="middle" letterSpacing="0.5">ISO</text>
                    </svg>
                  </div>
                  <div className="flex flex-col shrink-0">
                    <span className="text-[11px] font-semibold text-navy leading-tight group-hover:text-primary transition-colors duration-180 whitespace-nowrap">27701</span>
                    <span className="text-[9px] text-navy/60 whitespace-nowrap">Sertifisert</span>
                  </div>
                </motion.div>
                
                {/* Microsoft - uses their brand colors */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.85 }}
                  className="group flex items-center gap-1.5 px-2 py-1.5 bg-white rounded-md border border-sky2/50 shadow-sm hover:shadow-md hover:border-cyan hover:-translate-y-0.5 transition-all duration-300 ease-smooth cursor-pointer shrink-0"
                >
                  <div className="w-5 h-5 rounded bg-surface-2 flex items-center justify-center shrink-0">
                    <svg width="11" height="11" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0" y="0" width="9" height="9" fill="#F25022"/>
                      <rect x="11" y="0" width="9" height="9" fill="#7FBA00"/>
                      <rect x="0" y="11" width="9" height="9" fill="#00A4EF"/>
                      <rect x="11" y="11" width="9" height="9" fill="#FFB900"/>
                    </svg>
                  </div>
                  <div className="flex flex-col shrink-0">
                    <span className="text-[11px] font-semibold text-navy leading-tight group-hover:text-primary transition-colors duration-180 whitespace-nowrap">Microsoft</span>
                    <span className="text-[9px] text-navy/60 whitespace-nowrap">Sertifisert</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Spacer for background image - Only on desktop */}
          <div className="hidden lg:block relative lg:pl-8 min-h-[600px]">
            {/* This space is for the background image to show through */}
            </div>
        </div>
      </div>
      
    </section>
  );
};
