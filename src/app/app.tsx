import { JSX } from 'react';
import { MainPage } from '@pages/main-page';
import { OfferPage } from '@pages/offer-page';
import { FavoritesPage } from '@pages/favorites-page';
import { LoginPage } from '@pages/login-page';
import { NotFoundPage } from '@pages/not-found-page';

function App(): JSX.Element {
  return (
    <>
      <MainPage />
      <OfferPage />
      <FavoritesPage />
      <LoginPage />
      <NotFoundPage />
    </>
  );
}

export { App };
