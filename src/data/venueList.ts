import { Venue } from '../types/venue';

const f = {
  full: [
    { id: 'ramp', name: 'Wheelchair Ramp', available: true, icon: '♿' },
    { id: 'elevator', name: 'Elevator', available: true, icon: '🛗' },
    { id: 'restroom', name: 'Accessible Restroom', available: true, icon: '🚻' },
    { id: 'parking', name: 'Parking', available: true, icon: '🅿️' },
    { id: 'braille', name: 'Braille', available: true, icon: '📖' },
    { id: 'hearing', name: 'Visual Alarms', available: true, icon: '🔊' },
    { id: 'service', name: 'Service Animals', available: true, icon: '🐕' },
    { id: 'wide', name: 'Wide Doors', available: true, icon: '🚪' },
  ],
  partial: [
    { id: 'ramp', name: 'Wheelchair Ramp', available: true, icon: '♿' },
    { id: 'elevator', name: 'Elevator', available: false, icon: '🛗' },
    { id: 'restroom', name: 'Accessible Restroom', available: true, icon: '🚻' },
    { id: 'parking', name: 'Parking', available: true, icon: '🅿️' },
    { id: 'braille', name: 'Braille', available: false, icon: '📖' },
    { id: 'hearing', name: 'Quiet Area', available: true, icon: '🔊' },
    { id: 'service', name: 'Service Animals', available: true, icon: '🐕' },
    { id: 'seating', name: 'Accessible Seating', available: true, icon: '💺' },
  ]
};

export const venueList: Venue[] = [
  { id: '1', name: 'Levant Restaurant', category: 'restaurant', location: 'Abdali, Amman', distance: 0.8, rating: 4.8, reviewCount: 124, image: 'https://d64gsuwffb70l.cloudfront.net/68fcd51436a5352ac98edb67_1761400143467_162b6e4d.webp', accessibilityScore: 95, description: 'Modern Middle Eastern cuisine', phone: '+962 6 123 4567', hours: '10 AM - 11 PM', coordinates: { lat: 31.9539, lng: 35.9106 }, features: f.full },
  { id: '2', name: 'Grand Millennium Hotel', category: 'hotel', location: 'Shmeisani, Amman', distance: 1.2, rating: 4.9, reviewCount: 256, image: 'https://d64gsuwffb70l.cloudfront.net/68fcd51436a5352ac98edb67_1761400147652_0d4b3ed0.webp', accessibilityScore: 98, description: 'Luxury hotel', phone: '+962 6 234 5678', hours: '24/7', coordinates: { lat: 31.9622, lng: 35.8989 }, features: f.full },
  { id: '3', name: 'Jordan Medical Center', category: 'healthcare', location: 'Sweifieh, Amman', distance: 2.1, rating: 4.7, reviewCount: 89, image: 'https://d64gsuwffb70l.cloudfront.net/68fcd51436a5352ac98edb67_1761400151866_db8099b5.webp', accessibilityScore: 96, description: 'Modern healthcare', phone: '+962 6 345 6789', hours: '8 AM - 8 PM', coordinates: { lat: 31.9343, lng: 35.8661 }, features: f.full },
  { id: '4', name: 'Petra Grill House', category: 'restaurant', location: 'Rainbow St, Amman', distance: 1.5, rating: 4.6, reviewCount: 178, image: 'https://d64gsuwffb70l.cloudfront.net/68fcd51436a5352ac98edb67_1761400145191_57ee709e.webp', accessibilityScore: 88, description: 'Traditional cuisine', phone: '+962 6 456 7890', hours: '11 AM - 12 AM', coordinates: { lat: 31.9539, lng: 35.9286 }, features: f.partial },
  { id: '5', name: 'Amman Rotana Hotel', category: 'hotel', location: 'Jabal Amman', distance: 1.8, rating: 4.8, reviewCount: 312, image: 'https://d64gsuwffb70l.cloudfront.net/68fcd51436a5352ac98edb67_1761400149375_31acd6c3.webp', accessibilityScore: 94, description: 'Five-star hotel', phone: '+962 6 567 8901', hours: '24/7', coordinates: { lat: 31.9515, lng: 35.9239 }, features: f.full },
  { id: '6', name: 'Royal Clinic', category: 'healthcare', location: 'Abdoun, Amman', distance: 2.5, rating: 4.9, reviewCount: 145, image: 'https://d64gsuwffb70l.cloudfront.net/68fcd51436a5352ac98edb67_1761400153611_17f744c5.webp', accessibilityScore: 97, description: 'Premium healthcare', phone: '+962 6 678 9012', hours: '7 AM - 9 PM', coordinates: { lat: 31.9343, lng: 35.8761 }, features: f.full },
  { id: '7', name: 'City Mall', category: 'shopping', location: 'Tlaa Al Ali, Amman', distance: 3.2, rating: 4.5, reviewCount: 423, image: 'https://d64gsuwffb70l.cloudfront.net/68fcd51436a5352ac98edb67_1761400154356_61f3c06e.webp', accessibilityScore: 92, description: 'Shopping center', phone: '+962 6 789 0123', hours: '10 AM - 10 PM', coordinates: { lat: 31.9943, lng: 35.8561 }, features: f.full },
  { id: '8', name: 'Taj Mall', category: 'shopping', location: 'Abdoun, Amman', distance: 2.8, rating: 4.7, reviewCount: 567, image: 'https://d64gsuwffb70l.cloudfront.net/68fcd51436a5352ac98edb67_1761400156075_e77c3666.webp', accessibilityScore: 95, description: 'Upscale shopping', phone: '+962 6 890 1234', hours: '10 AM - 11 PM', coordinates: { lat: 31.9443, lng: 35.8861 }, features: f.full },
  { id: '9', name: 'Jordan Museum', category: 'cultural', location: 'Ras Al Ain, Amman', distance: 1.9, rating: 4.8, reviewCount: 234, image: 'https://d64gsuwffb70l.cloudfront.net/68fcd51436a5352ac98edb67_1761400156823_e281fb74.webp', accessibilityScore: 93, description: 'National museum', phone: '+962 6 901 2345', hours: '9 AM - 5 PM', coordinates: { lat: 31.9539, lng: 35.9406 }, features: f.full },
  { id: '10', name: 'Royal Cultural Center', category: 'cultural', location: 'Jabal Al Hussein', distance: 2.3, rating: 4.6, reviewCount: 156, image: 'https://d64gsuwffb70l.cloudfront.net/68fcd51436a5352ac98edb67_1761400158533_5990a382.webp', accessibilityScore: 91, description: 'Arts venue', phone: '+962 6 012 3456', hours: '10 AM - 8 PM', coordinates: { lat: 31.9639, lng: 35.9306 }, features: f.full },
  { id: '11', name: 'Fakhr El-Din', category: 'restaurant', location: 'Jabal Amman', distance: 1.6, rating: 4.7, reviewCount: 289, image: 'https://d64gsuwffb70l.cloudfront.net/68fcd51436a5352ac98edb67_1761400146929_2037f38d.webp', accessibilityScore: 89, description: 'Fine dining', phone: '+962 6 123 4567', hours: '12 PM - 12 AM', coordinates: { lat: 31.9539, lng: 35.9206 }, features: f.partial },
  { id: '12', name: 'Kempinski Hotel', category: 'hotel', location: 'Shmeisani, Amman', distance: 1.4, rating: 4.9, reviewCount: 478, image: 'https://d64gsuwffb70l.cloudfront.net/68fcd51436a5352ac98edb67_1761400151120_6bbf5019.webp', accessibilityScore: 99, description: 'Luxury 5-star', phone: '+962 6 234 5678', hours: '24/7', coordinates: { lat: 31.9622, lng: 35.9089 }, features: f.full }
];
