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
      
      <div className="relative container-main py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
          {/* Logo and Contact */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <Logo size={48} variant="default" className="invert brightness-0 saturate-100" />
            </div>
            <p className="text-gray-300 text-sm mb-6 max-w-xs leading-relaxed">
              Norges smarteste bookingsystem for lokaler, ressurser og arrangementer.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <a 
                href="mailto:kontakt@digilist.no"
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-cyan transition-colors duration-180 group"
              >
                <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center group-hover:bg-cyan/20 transition-colors duration-180">
                  <Mail size={16} className="text-cyan" />
                </div>
                kontakt@digilist.no
              </a>
              <a 
                href="tel:+4722000000"
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-cyan transition-colors duration-180 group"
              >
                <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center group-hover:bg-cyan/20 transition-colors duration-180">
                  <Phone size={16} className="text-cyan" />
                </div>
                +47 22 00 00 00
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center">
                  <MapPin size={16} className="text-cyan" />
                </div>
                Oslo, Norge
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h4 className="font-semibold mb-4 text-white uppercase text-xs tracking-wider flex items-center gap-2">
                    <span className="w-1 h-4 bg-gradient-accent rounded-full" />
                    {section.title}
                  </h4>
                  <ul className="space-y-2.5">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link 
                          href={link.href}
                          className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-180"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Digilist
              </p>
              <div className="hidden md:flex items-center gap-1">
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
                className="text-cyan hover:text-sky1 font-medium inline-flex items-center gap-1.5 transition-colors duration-180 group"
              >
                <span className="group-hover:underline underline-offset-2">Xala Technologies</span>
                <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-180" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
