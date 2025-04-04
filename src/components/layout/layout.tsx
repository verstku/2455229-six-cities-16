import type { JSX } from 'react';
import type { RoutesUnion } from '@customTypes/routes-union.ts';
import type { MetaTagsProps } from '@components/meta-tags/meta-tags.tsx';
import { useState } from 'react';
import { useLocation, useMatch, Outlet } from 'react-router-dom';
import { MetaTags } from '@components/meta-tags';
import { Header } from '@components/header';
import { Footer } from '@components/footer';
import { getLayoutDataByRoute } from './layout-helpers.ts';
import { AppRoute } from '@constants';

function Layout(): JSX.Element {
  const { pathname } = useLocation();
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [dynamicPageMetaTags, setDynamicPageMetaTags] =
    useState<MetaTagsProps['dynamicPageMetaTags']>(undefined);
  const isFavoritesRoute = pathname === AppRoute.Favorites;
  const isDynamicRouteMatch = Boolean(useMatch(AppRoute.Offer));
  const hasFavorites = favoritesCount > 0;

  const { className, isActiveLogo, noHeaderNav, hasFooter } =
    getLayoutDataByRoute(
      pathname as RoutesUnion,
      hasFavorites,
      isDynamicRouteMatch,
    );

  return (
    <>
      <MetaTags pathname={pathname} dynamicPageMetaTags={dynamicPageMetaTags} />
      <div className={className}>
        <Header
          favoritesCount={favoritesCount}
          isActiveLogo={isActiveLogo}
          noHeaderNav={noHeaderNav}
        />
        <Outlet
          context={{
            ...(isFavoritesRoute && { setFavoritesCount }),
            ...(isDynamicRouteMatch && { setDynamicPageMetaTags }),
          }}
        />
        {hasFooter && <Footer />}
      </div>
    </>
  );
}

export { Layout };
