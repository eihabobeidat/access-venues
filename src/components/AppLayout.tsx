import React, { useState, useMemo } from 'react';
import { SearchBar } from './SearchBar';
import { FilterChips } from './FilterChips';
import { VenueCard } from './VenueCard';
import { VenueModal } from './VenueModal';
import { venueList } from '../data/venueList';
import { Venue, VenueCategory, DisabilityType } from '../types/venue';

export default function AppLayout() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<VenueCategory>('all');
  const [selectedDisability, setSelectedDisability] = useState<DisabilityType>('all');
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);
  const [isOffline] = useState(false);

  const filteredVenues = useMemo(() => {
    return venueList.filter(venue => {
      const matchesSearch = venue.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           venue.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || venue.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleVoiceSearch = () => {
    alert('Voice search activated! In a real app, this would use the Web Speech API to enable voice input.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center text-2xl">
                ♿
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">AccessJordan</h1>
                <p className="text-sm text-gray-600">Discover Accessible Venues</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {isOffline && (
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                  📡 Offline
                </span>
              )}
              <button className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 active:scale-95 transition-all" aria-label="Notifications">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </button>
            </div>
          </div>
          <SearchBar value={searchQuery} onChange={setSearchQuery} onVoiceSearch={handleVoiceSearch} />
        </div>
      </header>

      {/* Hero Banner */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src="https://d64gsuwffb70l.cloudfront.net/68fcd51436a5352ac98edb67_1761400142502_a426d2f4.webp"
          alt="Accessible venues in Jordan"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="max-w-7xl mx-auto px-4 py-6 text-white">
            <h2 className="text-3xl font-bold mb-2">Find Accessible Venues Near You</h2>
            <p className="text-lg opacity-90">Empowering independence through accessibility information</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Filters */}
        <div className="mb-6">
          <FilterChips
            selectedCategory={selectedCategory}
            selectedDisability={selectedDisability}
            onCategoryChange={setSelectedCategory}
            onDisabilityChange={setSelectedDisability}
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-4 shadow-md text-center">
            <div className="text-3xl font-bold text-blue-600">{filteredVenues.length}</div>
            <div className="text-sm text-gray-600">Venues Found</div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-md text-center">
            <div className="text-3xl font-bold text-green-600">95%</div>
            <div className="text-sm text-gray-600">Avg. Score</div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-md text-center">
            <div className="text-3xl font-bold text-purple-600">2.1km</div>
            <div className="text-sm text-gray-600">Avg. Distance</div>
          </div>
        </div>

        {/* Venue Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredVenues.map(venue => (
            <VenueCard key={venue.id} venue={venue} onClick={() => setSelectedVenue(venue)} />
          ))}
        </div>

        {filteredVenues.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No venues found</h3>
            <p className="text-gray-600">Try adjusting your filters or search query</p>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-around items-center">
          <button className="flex flex-col items-center gap-1 text-blue-600" aria-label="Home">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xs font-medium">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-600" aria-label="Map">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <span className="text-xs font-medium">Map</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-600" aria-label="Favorites">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-xs font-medium">Saved</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-600" aria-label="Profile">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs font-medium">Profile</span>
          </button>
        </div>
      </nav>

      {/* Venue Detail Modal */}
      <VenueModal venue={selectedVenue} onClose={() => setSelectedVenue(null)} />
    </div>
  );
}
