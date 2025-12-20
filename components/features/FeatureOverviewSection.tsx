'use client';

import React from 'react';
import { CreditCard, FileText, Lightbulb, Settings, LucideIcon } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { FeatureBlobCard } from './FeatureBlobCard';

export const FeatureOverviewSection: React.FC = () => {
  const features: Array<{
    icon: LucideIcon;
    title: string;
    description: string;
    blobColor: string;
  }> = [
    {
      icon: CreditCard,
      title: 'Enkel betaling',
      description: 'Leietaker betaler enkelt med kort, Vipps eller faktura',
      blobColor: '#0EA5E9',
    },
    {
      icon: FileText,
      title: 'Bedre kontroll',
      description: 'Utleier får oversikt over alle leietakere og bookinger',
      blobColor: '#10B981',
    },
    {
      icon: Lightbulb,
      title: 'Brukes til hva som helst',
      description: 'Det er bare fantasien som setter begrensninger',
      blobColor: '#8B5CF6',
    },
    {
      icon: Settings,
      title: 'Automatiserte prosesser',
      description: 'Alle prosesser kan gjøres 100% automatisert',
      blobColor: '#F59E0B',
    },
  ];

  return (
    <Section variant="zebra" id="feature-overview">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {features.map((feature, idx) => (
          <FeatureBlobCard
            key={idx}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            blobColor={feature.blobColor}
          />
        ))}
      </div>
    </Section>
  );
};

