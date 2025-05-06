import type { ObjectValuesUnion } from '@customTypes/object-values-union.ts';
import { AppRoute } from '@constants';
import { CityId } from '@customTypes/city.ts';

export type RoutesUnion = ObjectValuesUnion<typeof AppRoute> | `/${CityId}`;
