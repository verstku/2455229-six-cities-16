import type { JSX } from 'react';
import clsx from 'clsx';
import { Layout } from '@components/layout';
import { FavoritesEmpty } from '@components/favorites-empty';
import { THREE_OFFERS } from '@mocks/offers';
import { FavoritesOffers } from '@components/favorites-offers';

function FavoritesPage(): JSX.Element {
  const isEmpty = THREE_OFFERS.length === 0;
  const renderPage = isEmpty ? <FavoritesEmpty /> : <FavoritesOffers />;

  return (
    <Layout
      hasFooter
      className={clsx('page', isEmpty && 'page--favorites-empty')}
    >
      {renderPage}
    </Layout>
  );
}

export { FavoritesPage };
