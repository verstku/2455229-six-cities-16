import { JSX } from 'react';
import clsx from 'clsx';
import { getImageSize } from '@functions';
import type { Size } from '@customTypes/size';

type PrefixForLogo = 'header' | 'footer';
type LogoProps = {
  size: Size;
  prefix: PrefixForLogo;
  isActive?: boolean;
};

function Logo({ size, prefix, isActive = false }: LogoProps): JSX.Element {
  return (
    <a
      className={clsx(`${prefix}__logo-link`, {
        [`${prefix}__logo-link--active`]: isActive,
      })}
    >
      <img
        className={`${prefix}__logo`}
        src="img/logo.svg"
        alt="6 cities logo"
        {...getImageSize(size, 'logo')}
      />
    </a>
  );
}

export { Logo };
