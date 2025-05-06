import type { JSX } from 'react';
import { Logo } from '@components/logo';
import { HeaderNav } from '@components/header-nav';

export type HeaderProps = {
  favoritesCount: number;
  isActiveLogo?: boolean;
  noHeaderNav?: boolean;
};

function Header({
  favoritesCount,
  isActiveLogo,
  noHeaderNav,
}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo size="large" prefix="header" isActive={isActiveLogo} />
          </div>
          {!noHeaderNav && <HeaderNav favoritesCount={favoritesCount} />}
        </div>
      </div>
    </header>
  );
}

export { Header };
