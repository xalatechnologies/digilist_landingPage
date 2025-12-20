import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'PRODUKT',
      links: [
        { href: '#features', label: 'Funksjoner' },
        { href: '#integrations', label: 'Integrasjoner' },
        { href: '#security', label: 'Sikkerhet' },
      ],
    },
    {
      title: 'SELSKAP',
      links: [
        { href: '#about', label: 'Om oss' },
        { href: '#careers', label: 'Karriere' },
        { href: '#contact', label: 'Kontakt' },
      ],
    },
    {
      title: 'JURIDISK',
      links: [
        { href: '#privacy', label: 'Personvern' },
        { href: '#terms', label: 'Vilkår' },
      ],
    },
  ];

  return (
    <footer className="bg-navy-base text-white mt-auto" role="contentinfo">
      <div className="max-w-[1140px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 font-bold text-xl mb-6">
              <CheckCircle2 className="text-action-blue" size={24} aria-hidden="true" /> 
              <span>Digilist</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              En digital tjeneste utviklet for å forenkle hverdagen i offentlig sektor.
            </p>
          </div>
          
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-6 text-white uppercase text-xs tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-4 text-sm">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white hover:underline transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom section with border */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Digilist. Alle rettigheter forbeholdt.
            </p>
            <div className="text-sm text-gray-400">
              <span className="mr-2">Developed by</span>
              <a 
                href="https://xala.no" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-400 font-medium inline-flex items-center gap-1 transition-colors duration-200"
              >
                Xala technologies
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

