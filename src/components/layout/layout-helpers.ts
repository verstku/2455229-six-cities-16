import type { RoutesUnion } from '@customTypes/routes-union.ts';
import { AppRoute, CITIES } from '@constants';

export const getLayoutDataByRoute = (
  pathname: RoutesUnion,
  hasFavorites: boolean,
  isOfferPageMatch: boolean,
) => {
  let className = '';
  let isActiveLogo = false;
  let noHeaderNav = false;
  let hasFooter = false;

  switch (pathname) {
    case AppRoute.Main:
      isActiveLogo = true;
      className = 'page page--gray page--main';
      break;
    case AppRoute.Login:
      noHeaderNav = true;
      className = 'page page--gray page--login';
      break;
    case AppRoute.Favorites:
      hasFooter = true;
      className = hasFavorites ? 'page' : 'page page--favorites-empty';
      break;
  }

  if (isOfferPageMatch) {
    className = 'page';
  }

  CITIES.forEach(({ id }) => {
    if (`/${id}` === pathname) {
      className = 'page page--gray page--main';
    }
  });

  return {
    className,
    isActiveLogo,
    noHeaderNav,
    hasFooter,
  };
};
