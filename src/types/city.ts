import type { Location } from './location';
import { CITIES } from '@constants';

export type Cities = (typeof CITIES)[number];
export type CityId = (typeof CITIES)[number]['id'];
export type CityName = (typeof CITIES)[number]['name'];

export type City = {
  name: CityName;
  location: Location;
};
