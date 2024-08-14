import { JSX } from 'react';
import clsx from 'clsx';
import type { OfferShort } from '@customTypes/offer';
import type { CityName } from '@customTypes/city';
import { Layout } from '@components/layout';
import { OfferCard } from '@components/offer-card';
import { FavoritesEmpty } from '@components/favorites-empty';
import { THREE_OFFERS } from '@mocks/offers';

type GroupedOffersType = Partial<Record<CityName, OfferShort[]>>;

function FavoritesPage(): JSX.Element {
  const groupedOffers: GroupedOffersType = Object.groupBy(
    THREE_OFFERS,
    (offer: OfferShort) => offer.city.name,
  );
  const isEmpty = THREE_OFFERS.length === 0;

  return (
    <Layout
      hasFooter
      className={clsx('page', {
        'page--favorites-empty': isEmpty,
      })}
    >
      {isEmpty ? (
        <FavoritesEmpty />
      ) : (
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Object.entries(groupedOffers).map(([city, offers]) => (
                  <li key={city} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {offers.map((offer) => (
                        <OfferCard
                          key={offer.id}
                          offer={offer}
                          size="small"
                          prefix="favorites"
                        />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </main>
      )}
    </Layout>
  );
}

export { FavoritesPage };
