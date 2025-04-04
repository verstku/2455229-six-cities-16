import type { JSX } from 'react';
import type { ObjectValuesUnion } from '@customTypes/object-values-union';
import type { RoutesUnion } from '@customTypes/routes-union.ts';
import { Navigate, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '@constants';
import { Spinner } from '@components/spinner';

type AuthorizationStatusUnion = ObjectValuesUnion<typeof AuthorizationStatus>;

type ProtectedRouteProps = {
  children: JSX.Element;
};

const createProtectedRoute = (
  restrictedForStatus: AuthorizationStatusUnion,
  redirectTo: RoutesUnion,
) =>
  function ProtectedRoute({ children }: ProtectedRouteProps): JSX.Element {
    const currentStatus: AuthorizationStatusUnion = AuthorizationStatus.Auth;
    const { pathname, state } = useLocation();
    const from = state || redirectTo;

    switch (currentStatus) {
      case AuthorizationStatus.Unknown:
        return <Spinner />;
      case restrictedForStatus:
        return <Navigate to={from} state={pathname} replace />;
      default:
        return children;
    }
  };

const PrivateProtectedRoute = createProtectedRoute(
  AuthorizationStatus.NoAuth,
  AppRoute.Login,
);
const PublicProtectedRoute = createProtectedRoute(
  AuthorizationStatus.Auth,
  AppRoute.Main,
);

export { PrivateProtectedRoute, PublicProtectedRoute };
