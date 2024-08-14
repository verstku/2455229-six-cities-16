import { JSX } from 'react';
import clsx from 'clsx';
import { CITIES } from '@constants';
import type { CityName } from '@customTypes/city';
import { Layout } from '@components/layout';
import { OfferCard } from '@components/offer-card';
import { MainEmpty } from '@components/main-empty';
import { LocationItem } from '@components/location-item';
import { OFFERS } from '@mocks/offers';

function MainPage(): JSX.Element {
  const countOffers: number = OFFERS.length;
  const isEmpty: boolean = countOffers === 0;

  return (
    <Layout isActive className={'page page--gray page--main'}>
      <main
        className={clsx('page__main', 'page__main--index', {
          'page__main--index-empty': isEmpty,
        })}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {CITIES.map((city: CityName) => (
                <LocationItem
                  key={city}
                  city={city}
                  containerTag="li"
                  linkClassName={clsx('locations__item-link tabs__item')}
                />
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div
            className={clsx('cities__places-container', 'container', {
              'cities__places-container--empty': isEmpty,
            })}
          >
            {isEmpty ? (
              <MainEmpty currentCity={'Amsterdam'} />
            ) : (
              <>
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">
                    {countOffers} places to stay in Amsterdam
                  </b>
                  <form className="places__sorting" action="#" method="get">
                    <span className="places__sorting-caption">Sort by</span>
                    <span className="places__sorting-type" tabIndex={0}>
                      Popular
                      <svg
                        className="places__sorting-arrow"
                        width={7}
                        height={4}
                      >
                        <use xlinkHref="#icon-arrow-select" />
                      </svg>
                    </span>
                    <ul className="places__options places__options--custom places__options--opened">
                      <li
                        className="places__option places__option--active"
                        tabIndex={0}
                      >
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
                    {OFFERS.map((offer) => (
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
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export { MainPage };
