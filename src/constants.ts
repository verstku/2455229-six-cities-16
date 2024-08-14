import type { CityName } from '@customTypes/city.ts';
import type { AllSizesOfAllImages } from '@customTypes/size.ts';

export const CITIES: CityName[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const IMAGES_SIZES: AllSizesOfAllImages = {
  offer: {
    small: { width: '150', height: '110' },
    large: { width: '260', height: '200' },
  },
  logo: {
    small: { width: '64', height: '33' },
    large: { width: '81', height: '41' },
  },
  bookmark: {
    small: { width: '18', height: '19' },
    large: { width: '31', height: '33' },
  },
};

export const REVIEW_FORM_STARS = [
  { value: 5, title: 'perfect' },
  { value: 4, title: 'good' },
  { value: 3, title: 'not bad' },
  { value: 2, title: 'badly' },
  { value: 1, title: 'terribly' },
] as const;
