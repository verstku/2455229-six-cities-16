import { CITIES } from '@constants';

export type MetaInfo = {
  title: string;
  description: string;
};

export const getMetaInfo = (path: string): MetaInfo => {
  const foundCity = CITIES.find((city) => path === `/${city.id}`);

  if (foundCity) {
    return {
      title: `6 Cities: Rent Properties in ${foundCity.name} – Find Your Perfect Stay`,
      description: `Looking for a place to stay in ${foundCity.name}? Explore our wide selection of rental properties, from cozy apartments to luxurious homes.`,
    };
  }

  switch (path) {
    case '/':
      return {
        title: '6 Cities: Find Rental Properties in Top Cities',
        description:
          'Browse a wide selection of apartments and houses for rent in the best locations.',
      };
    case '/favorites':
      return {
        title: '6 Cities: Your Favorite Rental Listings',
        description:
          'Save and compare your favorite rental properties in one place.',
      };
    case '/login':
      return {
        title: '6 Cities: Sign in to Manage Your Rentals',
        description:
          'Access your saved properties, manage bookings, and find the best rental deals.',
      };
    default:
      return {
        title: '6 Cities',
        description: '6 Cities',
      };
  }
};
