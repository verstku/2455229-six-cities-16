import type { JSX } from 'react';
import { OfferCard } from '@components/offer-card';
import { CityName } from '@customTypes/city.ts';
import { OfferShort } from '@customTypes/offer.ts';

type MainOffersProps = {
  offers: OfferShort[];
  cityName?: CityName;
};

function MainOffers({ offers, cityName }: MainOffersProps): JSX.Element {
  const countOffers: number = offers.length;

  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {countOffers} places to stay in {cityName || 'all six cities'}
        </b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0}>
            Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select" />
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex={0}>
              Popular
            </li>
            <li className="places__option" tabIndex={0}>
              Price: low to high
            </li>
            <li className="places__option" tabIndex={0}>
              Price: high to low
            </li>
            <li className="places__option" tabIndex={0}>
              Top rated first
            </li>
          </ul>
        </form>
        <div className="cities__places-list places__list tabs__content">
          {offers.map((offer) => (
            <OfferCard
              key={offer.id}
              offer={offer}
              size="large"
              prefix="cities"
            />
          ))}
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map"></section>
      </div>
    </>
  );
}

export { MainOffers };
