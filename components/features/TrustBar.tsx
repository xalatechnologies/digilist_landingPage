import React from 'react';
import { Building2 } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const cities = ['ASKER', 'BÆRUM', 'BERGEN', 'TRONDHEIM', 'DRAMMEN'];

  return (
    <div className="bg-white py-12 border-b border-border-default">
      <div className="max-w-[1140px] mx-auto px-6 text-center">
        <p className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-8">
          Brukes av ledende kommuner
        </p>
        <div className="flex flex-wrap justify-center gap-12">
          {cities.map((city) => (
            <div 
              key={city} 
              className="flex items-center gap-2 font-bold text-lg text-navy-base tracking-tight opacity-70 hover:opacity-100 hover:text-action-blue transition-all duration-300"
            >
              <Building2 className="text-action-blue" size={20} aria-hidden="true" /> 
              <span>{city} KOMMUNE</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

