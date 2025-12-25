'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

export const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'PRODUKT',
      links: [
        { href: '/funksjonalitet', label: 'Funksjonalitet' },
        { href: '/bli-utleier', label: 'Bli utleier' },
        { href: '/demo', label: 'Book demo' },
      ],
    },
    {
      title: 'SELSKAP',
      links: [
        { href: '/om-oss', label: 'Om oss' },
        { href: '/partnere', label: 'Partnere' },
        { href: '/karriere', label: 'Karriere' },
      ],
    },
    {
      title: 'RESSURSER',
      links: [
        { href: '/kunnskapsbase', label: 'Kunnskapsbase' },
        { href: '/artikler', label: 'Artikler' },
        { href: '/hjelp', label: 'Hjelp og veiledning' },
      ],
    },
    {
      title: 'JURIDISK',
      links: [
        { href: '/personvern', label: 'Personvern' },
        { href: '/sikkerhet', label: 'Sikkerhet' },
        { href: '/vilkår', label: 'Vilkår' },
      ],
    },
  ];

  return (
    <footer className="relative bg-gradient-navy text-white mt-auto overflow-hidden" role="contentinfo">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-button" />
      
      <div className="relative container-main py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Logo size={48} variant="default" className="invert brightness-0 saturate-100" />
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Norges smarteste bookingsystem for lokaler, ressurser og arrangementer.
            </p>
            
            {/* Contact info */}
            <div className="space-y-2.5">
              <a 
                href="mailto:kontakt@digilist.no"
                className="flex items-center gap-2.5 text-sm text-gray-300 hover:text-cyan transition-colors duration-180"
              >
                <Mail size={16} className="text-cyan" />
                <span>kontakt@digilist.no</span>
              </a>
              <a 
                href="tel:+4722000000"
                className="flex items-center gap-2.5 text-sm text-gray-300 hover:text-cyan transition-colors duration-180"
              >
                <Phone size={16} className="text-cyan" />
                <span>+47 22 00 00 00</span>
              </a>
              <div className="flex items-center gap-2.5 text-sm text-gray-300">
                <MapPin size={16} className="text-cyan" />
                <span>Oslo, Norge</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4 text-white uppercase text-xs tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-180"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-white/10 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Digilist
              </p>
              <div className="hidden md:flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
                <span className="w-1.5 h-1.5 rounded-full bg-success" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Utviklet av</span>
              <a 
                href="https://xala.no" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan hover:text-sky1 font-medium inline-flex items-center gap-1.5 transition-colors duration-180"
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
