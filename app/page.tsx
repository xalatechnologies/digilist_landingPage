import React from 'react';
import { HeroSection } from '@/components/features/HeroSection';
import { TrustBar } from '@/components/features/TrustBar';
import { AudienceSection } from '@/components/features/AudienceSection';
import { FeatureGroupsSection } from '@/components/features/FeatureGroupsSection';
import { HowItWorksSection } from '@/components/features/HowItWorksSection';
import { OperationsTabsSection } from '@/components/features/OperationsTabsSection';
import { ImageShowcase } from '@/components/features/ImageShowcase';
import { IntegrationShowcase } from '@/components/features/IntegrationShowcase';
import { 
  CategorySection, 
  CtaSection 
} from '@/components/sections';
import { homeContent } from '@/lib/homeContent';

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. TRUST BAR */}
      <TrustBar />

      {/* 3. HVEM PASSER DET FOR */}
      <AudienceSection />

      {/* 4. FUNKSJONER - 4 grupper */}
      <FeatureGroupsSection />

      {/* 5. KRAVDEKNING PÅ 60 SEKUNDER */}
      <CategorySection
        id="kravdekning"
        title={homeContent.publicSectorRequirements.title}
        subtitle={homeContent.publicSectorRequirements.subtitle}
        categories={homeContent.publicSectorRequirements.categories}
        variant="default"
        columns={3}
        image="/images/utleieobjekter/flytende-badstua-ulefoss.jpg"
        imageAlt="Offentlig sektor løsning"
      />

      {/* 6. SLIK FUNGERER DET - 4 steg */}
      <HowItWorksSection />

      {/* 6.5. IMAGE SHOWCASE */}
      <ImageShowcase
        variant="left"
        sectionVariant="default"
        badge="Se det i praksis"
        title="Fra kultursal til idrettshall"
        description="Digilist gir deg full oversikt over alle utleieobjekter. Se tilgjengelighet i sanntid, administrer bookinger enkelt, og la brukerne selv finne og booke ledige lokaler."
        features={[
          'Visuell kalender med drag-and-drop',
          'Automatiske bekreftelser og påminnelser',
          'Integrert betalingsløsning',
          'Rapporter og statistikk',
        ]}
        image="/images/utleieobjekter/kipo-kultursal.jpg"
        imageAlt="Kultursal booking eksempel"
        ctaText="Se demo"
        ctaHref="/demo"
      />

      {/* 7. INTEGRASJONER */}
      <IntegrationShowcase />

      {/* 7.5. IMAGE SHOWCASE - Right variant */}
      <ImageShowcase
        variant="right"
        sectionVariant="default"
        badge="Fleksibel løsning"
        title="Tilpasset dine behov"
        description="Enten du driver et kulturhus, idrettsanlegg eller konferansesenter – Digilist skalerer med dine behov og tilpasses din organisasjon."
        features={[
          'Egen branding og profil',
          'Tilpassbare bookingskjemaer',
          'Flerspråklig støtte',
          'Rollebasert tilgangsstyring',
        ]}
        image="/images/utleieobjekter/gyllenborg-idrettshall.jpg"
        imageAlt="Idrettshall booking eksempel"
        ctaText="Les mer om funksjonalitet"
        ctaHref="/funksjonalitet"
      />

      {/* 8. TRYGG DRIFT - Tabs */}
      <OperationsTabsSection />

      {/* 9. SLUTT-CTA */}
      <CtaSection
        title={homeContent.cta.final.title}
        description={homeContent.cta.final.description}
        primaryCta={homeContent.cta.final.primary}
        secondaryCta={homeContent.cta.final.secondary}
        variant="default"
      />
    </div>
  );
}
