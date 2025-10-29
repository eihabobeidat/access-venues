import React from 'react';
import { Venue } from '../types/venue';

interface VenueCardProps {
  venue: Venue;
  onClick: () => void;
}

export const VenueCard: React.FC<VenueCardProps> = ({ venue, onClick }) => {
  const scoreColor = venue.accessibilityScore >= 90 ? 'bg-green-500' : 
                     venue.accessibilityScore >= 75 ? 'bg-yellow-500' : 'bg-orange-500';

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`View details for ${venue.name}`}
    >
      <div className="relative h-48 overflow-hidden">
        <img src={venue.image} alt={venue.name} className="w-full h-full object-cover" />
        <div className={`absolute top-3 right-3 ${scoreColor} text-white px-3 py-1 rounded-full text-sm font-bold`}>
          {venue.accessibilityScore}%
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{venue.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{venue.location}</p>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-yellow-500">★</span>
          <span className="font-semibold">{venue.rating}</span>
          <span className="text-gray-500 text-sm">({venue.reviewCount})</span>
          <span className="text-gray-400 mx-2">•</span>
          <span className="text-gray-600 text-sm">{venue.distance} km</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {venue.features.slice(0, 4).map(f => f.available && (
            <span key={f.id} className="text-2xl" title={f.name}>{f.icon}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
