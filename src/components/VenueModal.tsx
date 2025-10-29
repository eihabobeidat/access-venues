import React from 'react';
import { Venue } from '../types/venue';

interface VenueModalProps {
  venue: Venue | null;
  onClose: () => void;
}

export const VenueModal: React.FC<VenueModalProps> = ({ venue, onClose }) => {
  if (!venue) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="venue-modal-title"
    >
      <div 
        className="bg-white rounded-t-3xl sm:rounded-3xl w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h2 id="venue-modal-title" className="text-2xl font-bold">{venue.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <img src={venue.image} alt={venue.name} className="w-full h-64 object-cover" />
        
        <div className="p-6 space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">📍</span>
              <span className="text-gray-700">{venue.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-yellow-500 text-2xl">★</span>
              <span className="text-xl font-semibold">{venue.rating}</span>
              <span className="text-gray-500">({venue.reviewCount} reviews)</span>
            </div>
          </div>

          <p className="text-gray-700">{venue.description}</p>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📞</span>
              <a href={`tel:${venue.phone}`} className="text-blue-500 hover:underline">{venue.phone}</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🕐</span>
              <span>{venue.hours}</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Accessibility Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {venue.features.map(feature => (
                <div
                  key={feature.id}
                  className={`flex items-center gap-3 p-3 rounded-xl ${
                    feature.available ? 'bg-green-50 border-2 border-green-200' : 'bg-gray-50 border-2 border-gray-200'
                  }`}
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <span className={feature.available ? 'text-green-900 font-medium' : 'text-gray-400'}>
                    {feature.name}
                  </span>
                  {feature.available && <span className="ml-auto text-green-500">✓</span>}
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${venue.coordinates.lat},${venue.coordinates.lng}`, '_blank')}
              className="flex-1 bg-blue-500 text-white py-4 rounded-2xl font-bold hover:bg-blue-600 active:scale-95 transition-all"
            >
              Get Directions
            </button>
            <button
              onClick={() => alert('Save functionality would store this venue to favorites')}
              className="px-6 bg-gray-100 text-gray-700 py-4 rounded-2xl font-bold hover:bg-gray-200 active:scale-95 transition-all"
            >
              ❤️ Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
