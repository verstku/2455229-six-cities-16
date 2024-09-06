import type { Location } from './location';
import { CITIES } from '@constants';

export type CityName = (typeof CITIES)[number];

export type City = {
  name: CityName;
  location: Location;
};
