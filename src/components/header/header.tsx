import { JSX } from 'react';
import { Logo } from '@components/logo';
import { HeaderNav } from '@components/header-nav';

export type HeaderProps = {
  isActive?: boolean;
  noHeaderNav?: boolean;
};

function Header({ isActive, noHeaderNav = false }: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo size="large" prefix="header" isActive={isActive} />
          </div>
          {!noHeaderNav && <HeaderNav />}
        </div>
      </div>
    </header>
  );
}

export { Header };
