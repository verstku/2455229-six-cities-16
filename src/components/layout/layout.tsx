import { JSX } from 'react';
import type { HeaderProps } from '@components/header';
import type { HTMLAttributes } from 'react';
import { Header } from '@components/header';
import { Footer } from '@components/footer';

type LayoutProps = HeaderProps &
  Pick<HTMLAttributes<HTMLDivElement>, 'children' | 'className'> & {
    hasFooter?: boolean;
  };

function Layout({
  children,
  className,
  isActive,
  noHeaderNav,
  hasFooter = false,
}: LayoutProps): JSX.Element {
  return (
    <div className={className}>
      <Header isActive={isActive} noHeaderNav={noHeaderNav} />
      {children}
      {hasFooter && <Footer />}
    </div>
  );
}

export { Layout };
