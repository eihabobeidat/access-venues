export interface AccessibilityFeature {
  id: string;
  name: string;
  available: boolean;
  icon: string;
}

export interface Venue {
  id: string;
  name: string;
  category: string;
  location: string;
  distance: number;
  rating: number;
  reviewCount: number;
  image: string;
  accessibilityScore: number;
  features: AccessibilityFeature[];
  description: string;
  phone: string;
  hours: string;
  coordinates: { lat: number; lng: number };
}

export type DisabilityType = 'mobility' | 'visual' | 'hearing' | 'cognitive' | 'all';
export type VenueCategory = 'all' | 'restaurant' | 'hotel' | 'healthcare' | 'shopping' | 'cultural';
