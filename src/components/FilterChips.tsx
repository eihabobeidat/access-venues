import React from 'react';
import { VenueCategory, DisabilityType } from '../types/venue';

interface FilterChipsProps {
  selectedCategory: VenueCategory;
  selectedDisability: DisabilityType;
  onCategoryChange: (category: VenueCategory) => void;
  onDisabilityChange: (type: DisabilityType) => void;
}

export const FilterChips: React.FC<FilterChipsProps> = ({
  selectedCategory, selectedDisability, onCategoryChange, onDisabilityChange
}) => {
  const categories: { value: VenueCategory; label: string; icon: string }[] = [
    { value: 'all', label: 'All', icon: '🏢' },
    { value: 'restaurant', label: 'Restaurants', icon: '🍽️' },
    { value: 'hotel', label: 'Hotels', icon: '🏨' },
    { value: 'healthcare', label: 'Healthcare', icon: '🏥' },
    { value: 'shopping', label: 'Shopping', icon: '🛍️' },
    { value: 'cultural', label: 'Cultural', icon: '🎭' },
  ];

  const disabilities: { value: DisabilityType; label: string; icon: string }[] = [
    { value: 'all', label: 'All', icon: '♿' },
    { value: 'mobility', label: 'Mobility', icon: '🦽' },
    { value: 'visual', label: 'Visual', icon: '👁️' },
    { value: 'hearing', label: 'Hearing', icon: '👂' },
    { value: 'cognitive', label: 'Cognitive', icon: '🧠' },
  ];

  return (
    <div className="space-y-3">
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map(cat => (
          <button
            key={cat.value}
            onClick={() => onCategoryChange(cat.value)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
              selectedCategory === cat.value
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            aria-label={`Filter by ${cat.label}`}
            aria-pressed={selectedCategory === cat.value}
          >
            <span>{cat.icon}</span>
            <span className="font-medium">{cat.label}</span>
          </button>
        ))}
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {disabilities.map(dis => (
          <button
            key={dis.value}
            onClick={() => onDisabilityChange(dis.value)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
              selectedDisability === dis.value
                ? 'bg-green-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            aria-label={`Filter by ${dis.label} accessibility`}
            aria-pressed={selectedDisability === dis.value}
          >
            <span>{dis.icon}</span>
            <span className="font-medium">{dis.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
