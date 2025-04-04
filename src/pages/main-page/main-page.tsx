import type { JSX } from 'react';
import clsx from 'clsx';
import { MainEmpty } from '@components/main-empty';
import { MainOffers } from '@components/main-offers';
import { LocationsList } from '@components/locations-list';
import { CityName } from '@customTypes/city.ts';
import type { OfferShort } from '@customTypes/offer.ts';

type MainPageProps = {
  offers: OfferShort[];
  cityName?: CityName;
};

function MainPage({ offers, cityName }: MainPageProps): JSX.Element {
  const currentOffers = cityName
    ? offers.filter((offer) => offer.city.name === cityName)
    : offers;
  const countOffers: number = currentOffers.length;
  const isEmpty: boolean = countOffers === 0;

  const renderMainOffers: JSX.Element = isEmpty ? (
    <MainEmpty currentCity={cityName} />
  ) : (
    <MainOffers offers={currentOffers} cityName={cityName} />
  );

  return (
    <main
      className={clsx(
        'page__main',
        'page__main--index',
        isEmpty && 'page__main--index-empty',
      )}
    >
      <h1 className="visually-hidden">Cities</h1>
      <LocationsList />
      <div className="cities">
        <div
          className={clsx(
            'cities__places-container',
            'container',
            isEmpty && 'cities__places-container--empty',
          )}
        >
          {renderMainOffers}
        </div>
      </div>
    </main>
  );
}

export { MainPage };
