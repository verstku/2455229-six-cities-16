import type { JSX } from 'react';
import clsx from 'clsx';
import { Layout } from '@components/layout';
import { MainEmpty } from '@components/main-empty';
import { OFFERS } from '@mocks/offers';
import { MainOffers } from '@components/main-offers';
import { LocationsList } from '@components/locations-list';

function MainPage(): JSX.Element {
  const countOffers: number = OFFERS.length;
  const isEmpty: boolean = countOffers === 0;

  const renderMainOffers: JSX.Element = isEmpty ? (
    <MainEmpty currentCity={'Amsterdam'} />
  ) : (
    <MainOffers />
  );

  return (
    <Layout isActive className={'page page--gray page--main'}>
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
    </Layout>
  );
}

export { MainPage };
