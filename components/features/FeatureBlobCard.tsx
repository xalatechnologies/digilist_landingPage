'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Heading } from '@/components/ui/Typography';
import { Text } from '@/components/ui/Typography';

export interface FeatureBlobCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  blobColor?: string;
}

export const FeatureBlobCard: React.FC<FeatureBlobCardProps> = ({
  icon: Icon,
  title,
  description,
  blobColor = '#0EA5E9',
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Icon with organic blob background */}
      <div className="relative mb-6">
        <div 
          className="w-24 h-24 rounded-full flex items-center justify-center relative"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${blobColor}40, ${blobColor}20)`,
          }}
        >
          <div 
            className="absolute inset-0 rounded-full blur-xl opacity-30"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${blobColor}, transparent)`,
            }}
          ></div>
          <Icon 
            size={40} 
            className="text-action-blue relative z-10" 
            aria-hidden="true" 
          />
        </div>
      </div>
      
      <Heading level={3} className="mb-3">
        {title}
      </Heading>
      <Text variant="body" className="text-text-secondary max-w-sm">
        {description}
      </Text>
    </div>
  );
};

