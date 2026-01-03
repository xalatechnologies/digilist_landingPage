'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

export const Footer: React.FC = () => {

  return (
    <footer className="relative bg-gradient-to-br from-cyan to-cyan/80 text-white mt-auto overflow-hidden" role="contentinfo">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-transparent via-cyan to-transparent" />
      
      <div className="relative max-w-[1400px] mx-auto px-6 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Logo and Description */}
          <div>
            <Link 
              href="/"
              className="flex items-center cursor-pointer group relative focus-ring rounded-lg mb-3"
              aria-label="Digilist - Gå til forsiden"
            >
              <Logo size={52} variant="text-only" className="group-hover:opacity-90 transition-all duration-180 [&_span]:!text-white" />
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 bg-cyan/0 group-hover:bg-cyan/5 rounded-lg transition-colors duration-180" />
            </Link>
            <p className="text-white text-sm mb-4 leading-relaxed font-medium">
              Norges smarteste bookingsystem for lokaler, ressurser og arrangementer.
            </p>
            
            {/* Contact info */}
            <div className="space-y-2">
              <a 
                href="mailto:kontakt@digilist.no"
                className="flex items-center gap-2 text-sm text-white hover:text-white/80 transition-colors duration-180 font-medium"
              >
                <Mail size={16} className="text-white" />
                <span>kontakt@digilist.no</span>
              </a>
              <a 
                href="tel:+4722000000"
                className="flex items-center gap-2 text-sm text-white hover:text-white/80 transition-colors duration-180 font-medium"
              >
                <Phone size={16} className="text-white" />
                <span>+47 22 00 00 00</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-bold mb-3 text-white uppercase text-sm tracking-wider">
              Navigasjon
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/om-oss"
                  className="text-base text-white hover:text-white/80 font-semibold transition-colors duration-180"
                >
                  Om oss
                </Link>
              </li>
              <li>
                <Link 
                  href="/funksjonalitet"
                  className="text-base text-white hover:text-white/80 font-semibold transition-colors duration-180"
                >
                  Funksjonalitet
                </Link>
              </li>
              <li>
                <Link 
                  href="/demo"
                  className="text-base text-white hover:text-white/80 font-semibold transition-colors duration-180"
                >
                  Book demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold mb-3 text-white uppercase text-sm tracking-wider">
              Juridisk
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/personvern"
                  className="text-base text-white hover:text-white/80 font-semibold transition-colors duration-180"
                >
                  Personvern
                </Link>
              </li>
              <li>
                <Link 
                  href="/vilkår"
                  className="text-base text-white hover:text-white/80 font-semibold transition-colors duration-180"
                >
                  Vilkår
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-white/20 pt-4 md:pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-base text-white font-semibold">
              © {new Date().getFullYear()} Xala Technologies. Alle rettigheter reservert.
            </p>
            <div className="flex items-center gap-2 text-sm text-white">
              <span>Utviklet av</span>
              <a 
                href="https://xala.no" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 font-bold inline-flex items-center gap-1 transition-colors duration-180 underline"
              >
                <span>Xala Technologies</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
