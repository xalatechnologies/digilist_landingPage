'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Handshake, CheckCircle2, Zap, GraduationCap, Headphones, Settings, ArrowRight, ExternalLink } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Heading } from '@/components/ui/Typography';
import { Text } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export default function BliUtleierPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-green-50 via-green-50/50 to-white pt-16 pb-24 md:pt-20 md:pb-32">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text Content */}
            <div>
              <Heading level={1} className="mb-6 text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900">
                Bli utleier
              </Heading>
              <Text variant="lead" className="mb-8 text-lg md:text-xl text-gray-700 leading-relaxed">
                Registrer deg som utleier på Digilist og få full kontroll over utleieobjektene dine. 
                Administrer bookinger, forenkle administrasjonen og gi leietakere en enkel og trygg 
                bookingopplevelse.
              </Text>
            </div>

            {/* Right Column: Icon */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-64 h-64 flex items-center justify-center">
                <Handshake size={120} className="text-green-600" strokeWidth={1.5} aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="bg-white">
        <div className="max-w-[1140px] mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl space-y-20">
            
            {/* Om Digilist */}
            <section>
              <Heading level={2} className="mb-6 text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                Om Digilist
              </Heading>
              <div className="space-y-4">
                <Text variant="body" className="text-base text-gray-800 leading-relaxed">
                  Digilist er en pålitelig og dokumentert løsning som har generert betydelig verdi for 
                  norske kommuner. Med over 150 millioner NOK i generert omsetning og over 776 000 
                  bookinger, har Digilist bidratt til bedre utnyttelse av utleieobjekter og forenklet 
                  administrasjonen for hundrevis av kommuner.
                </Text>
                <div>
                  <Link 
                    href="/om-oss" 
                    className="inline-flex items-center gap-2 text-action-blue hover:text-interaction-hover hover:underline underline-offset-4 decoration-2 transition-colors font-normal text-base"
                  >
                    Les mer her: Om oss
                    <ExternalLink size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </section>

            {/* Fleksibelt og raskt */}
            <section>
              <Heading level={2} className="mb-6 text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                Fleksibelt og raskt å sette opp for din organisasjon
              </Heading>
              <Text variant="body" className="text-base text-gray-800 leading-relaxed">
                Digilist tilbyr en komplett utleieplattform som dekker alle behov for utleie og 
                administrasjon. Løsningen er skybasert, alltid oppdatert, og lar deg enkelt importere 
                kalendertider via URL. Du kan komme i gang raskt og enkelt uten behov for omfattende 
                oppsett.
              </Text>
            </section>

            {/* E-lærings videoer */}
            <section>
              <Heading level={2} className="mb-6 text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                E-lærings videoer og kurs
              </Heading>
              <div className="space-y-4">
                <Text variant="body" className="text-base text-gray-800 leading-relaxed">
                  Som kunde får du tilgang til e-lærings videoer, regelmessige oppdateringer og all 
                  nødvendig informasjon. Vi tilbyr også kurs og workshops som kan arrangeres fysisk 
                  eller via videomøte, slik at du og teamet ditt får best mulig opplæring.
                </Text>
                <div>
                  <Link 
                    href="/kunnskapsbase" 
                    className="inline-flex items-center gap-2 text-action-blue hover:text-interaction-hover hover:underline underline-offset-4 decoration-2 transition-colors font-normal text-base"
                  >
                    Les mer her: Brukerveiledning
                    <ExternalLink size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </section>

            {/* Support */}
            <section>
              <Heading level={2} className="mb-6 text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                Support på både norsk og engelsk
              </Heading>
              <Text variant="body" className="text-base text-gray-800 leading-relaxed">
                Digilist har intern norsk- og engelskspråklig support tilgjengelig på hverdager 
                fra 08:00-16:00. Vi bruker moderne systemer for saksregistrering og oppfølging, 
                automatisk varsling av supportpersonell, og mange saker løses direkte av 
                førstelinjeskupport. For mer komplekse saker bistår våre utviklere.
              </Text>
            </section>

            {/* Et hav av funksjoner */}
            <section>
              <Heading level={2} className="mb-6 text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                Et hav av funksjoner
              </Heading>
              <div className="space-y-4">
                <Text variant="body" className="text-base text-gray-800 leading-relaxed">
                  Digilist er dedikert til å levere en forbedret brukeropplevelse og er forpliktet til 
                  kvalitet og innovasjon. Vi forsikrer deg om at Digilist vil fortsette å utvikle seg 
                  for å møte fremtidige behov og gi deg best mulig verktøy for utleieadministrasjon.
                </Text>
                <div>
                  <Link 
                    href="/funksjonalitet" 
                    className="inline-flex items-center gap-2 text-action-blue hover:text-interaction-hover hover:underline underline-offset-4 decoration-2 transition-colors font-normal text-base"
                  >
                    Les mer her: Funksjonalitet
                    <ExternalLink size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-green-50 py-16 md:py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-digdir overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                      <Headphones size={48} className="text-green-600" aria-hidden="true" />
                    </div>
                    <p className="text-gray-600 text-sm">Support og veiledning</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <Heading level={2} className="mb-6 text-3xl md:text-4xl font-bold text-gray-900">
                Gjør det enkelt!
              </Heading>
              <Text variant="body" className="mb-8 text-base md:text-lg text-gray-700 leading-relaxed">
                Spar tid og forbedre kvaliteten ved å digitalisere bookingforespørsler og bookinger. 
                Få et uforpliktende tilbud for å komme i gang med Digilist.
              </Text>
              <Button size="lg" variant="secondary" className="border-2 border-action-blue text-action-blue hover:bg-action-blue hover:text-white">
                Få tilbud
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gratis demo */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="bg-white rounded-digdir border-2 border-gray-200 p-8 md:p-12 shadow-sm">
            <div className="max-w-3xl">
              <Badge className="mb-4">Gratis demo</Badge>
              <Heading level={2} className="mb-6 text-3xl md:text-4xl font-bold text-gray-900">
                Vil du ha en presentasjon av Digilist før du bestemmer deg?
              </Heading>
              <Text variant="body" className="mb-8 text-base md:text-lg text-gray-700 leading-relaxed">
                Vi tilbyr en gratis gjennomgang av alle Digilists funksjoner. Book en demo og se 
                hvordan Digilist kan forenkle utleieadministrasjonen din.
              </Text>
              <Link href="/demo">
                <Button size="lg" showArrow className="bg-action-blue hover:bg-interaction-hover">
                  Book demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Artikler Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <Heading level={2} className="mb-12 text-3xl font-bold text-gray-900">
            Artikler
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <Link href="/artikler/sikkerhetsrutiner" className="group">
              <div className="bg-green-50 hover:bg-green-100 rounded-digdir overflow-hidden border-2 border-gray-200 hover:border-action-blue hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop"
                    alt="Sikkerhetsrutiner for utleielokaler"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-white/90 backdrop-blur-sm text-gray-800 border border-gray-200">
                      Sikkerhet
                    </Badge>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <Heading level={3} className="text-xl font-bold text-gray-900 mb-3 group-hover:text-action-blue transition-colors">
                    Sikkerhetsrutiner for utleielokaler: Ny modul gjør det enklere.
                  </Heading>
                </div>
              </div>
            </Link>

            {/* Article 2 */}
            <Link href="/artikler/100-kommuner" className="group">
              <div className="bg-green-50 hover:bg-green-100 rounded-digdir overflow-hidden border-2 border-gray-200 hover:border-action-blue hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 bg-gradient-to-br from-green-500 via-green-600 to-green-700 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
                    alt="Over 100 kommuner har tatt i bruk Digilist"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-white mb-2 drop-shadow-lg group-hover:scale-110 transition-transform">100</div>
                      <p className="text-white text-sm font-semibold drop-shadow">kommuner!</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <Heading level={3} className="text-xl font-bold text-gray-900 mb-3 group-hover:text-action-blue transition-colors">
                    Over 100 kommuner har tatt i bruk Digilist!
                  </Heading>
                  <Text variant="body" className="text-sm text-gray-600 leading-relaxed">
                    Norges ledende utleieplattform fortsetter veksten. Ved inngangen til 2025 har 
                    over 100 kommuner tatt i bruk Digilist som sin foretrukne bookingløsning...
                  </Text>
                </div>
              </div>
            </Link>

            {/* Article 3 */}
            <Link href="/artikler/brukerforum" className="group">
              <div className="bg-green-50 hover:bg-green-100 rounded-digdir overflow-hidden border-2 border-gray-200 hover:border-action-blue hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop"
                    alt="Årets brukerforum for utleiere"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-white/90 backdrop-blur-sm text-gray-800 border border-gray-200">
                      Brukerforum
                    </Badge>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <Heading level={3} className="text-xl font-bold text-gray-900 mb-3 group-hover:text-action-blue transition-colors">
                    Årets brukerforum for utleiere ble gjennomført
                  </Heading>
                  <Text variant="body" className="text-sm text-gray-600 leading-relaxed">
                    Den 27. november 2024 samlet vi både digitale og fysiske deltakere til årets 
                    brukerforum for Digilist-kunder! Dette er en viktig møteplass for å styrke...
                  </Text>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

