import { createBrowserRouter } from 'react-router-dom';
import { AppRoute, CITIES } from '@constants';
import {
  PrivateProtectedRoute,
  PublicProtectedRoute,
} from '@components/protected-route';
import { MainPage } from '@pages/main-page';
import { OfferPage } from '@pages/offer-page';
import { FavoritesPage } from '@pages/favorites-page';
import { LoginPage } from '@pages/login-page';
import { NotFoundPage } from '@pages/not-found-page';
import { Layout } from '@components/layout';
import { DataFetching } from '@components/data-fetching';

export const router = createBrowserRouter([
  {
    children: [
      ...CITIES.map(({ id, name }) => ({
        path: `/${id}`,
        element: (
          <DataFetching
            urlKey={'GET_ALL_OFFERS'}
            renderChild={(offers) => (
              <MainPage offers={offers} cityName={name} />
            )}
          />
        ),
      })),
      {
        path: AppRoute.Main,
        element: (
          <DataFetching
            urlKey={'GET_ALL_OFFERS'}
            renderChild={(offers) => <MainPage offers={offers} />}
          />
        ),
      },
      {
        path: AppRoute.Offer,
        element: (
          <DataFetching
            urlKey={'GET_OFFER_DETAIL'}
            renderChild={(offer) => <OfferPage offer={offer} />}
          />
        ),
        errorElement: <NotFoundPage />,
      },
      {
        path: AppRoute.Favorites,
        element: (
          <PrivateProtectedRoute>
            <DataFetching
              urlKey={'GET_FAVORITES'}
              renderChild={(favorites) => (
                <FavoritesPage favorites={favorites} />
              )}
            />
          </PrivateProtectedRoute>
        ),
        errorElement: <NotFoundPage />,
      },
      {
        path: AppRoute.Login,
        element: (
          <PublicProtectedRoute>
            <LoginPage />
          </PublicProtectedRoute>
        ),
      },
    ],
    element: <Layout />,
    errorElement: <NotFoundPage />,
  },
]);
