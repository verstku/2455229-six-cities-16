import type { JSX } from 'react';
import { useEffect } from 'react';
import { FavoritesEmpty } from '@components/favorites-empty';
import { FavoritesOffers } from '@components/favorites-offers';
import { useOutletContext } from 'react-router-dom';
import { OfferShort } from '@customTypes/offer.ts';

type OutletContext = {
  setFavoritesCount: (value: number) => void;
};

type FavoritesPageProps = {
  favorites: OfferShort[];
};

function FavoritesPage({ favorites }: FavoritesPageProps): JSX.Element {
  const favoritesCount = favorites.length;
  const isEmpty = favoritesCount === 0;
  console.log('FavoritesPage', favoritesCount);

  const { setFavoritesCount } = useOutletContext<OutletContext>();
  useEffect(() => setFavoritesCount(favoritesCount), [favoritesCount]);

  return isEmpty ? (
    <FavoritesEmpty />
  ) : (
    <FavoritesOffers favorites={favorites} />
  );
}

export { FavoritesPage };
