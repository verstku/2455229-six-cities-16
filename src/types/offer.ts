import { City } from './city';
import { Host } from './host';
import { Location } from './location';

export type OfferFull = Omit<OfferShort, 'previewImage'> & {
  description: string;
  images: string[];
  goods: string[];
  host: Host;
  bedrooms: number;
  maxAdults: number;
};

export type OfferShort = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};
