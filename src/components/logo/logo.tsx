import type { JSX } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { getImageSize } from '@utils';
import type { Size } from '@customTypes/size';
import { AppRoute } from '@constants';

type PrefixForLogo = 'header' | 'footer';
type LogoProps = {
  size: Size;
  prefix: PrefixForLogo;
  isActive?: boolean;
};

function Logo({ size, prefix, isActive }: LogoProps): JSX.Element {
  const logoImg = (
    <img
      className={`${prefix}__logo`}
      src="img/logo.svg"
      alt="6 cities logo"
      {...getImageSize(size, 'logo')}
    />
  );

  if (isActive) {
    return logoImg;
  } else {
    return (
      <Link
        className={clsx(
          `${prefix}__logo-link`,
          isActive && `${prefix}__logo-link--active`,
        )}
        to={AppRoute.Main}
      >
        {logoImg}
      </Link>
    );
  }
}

export { Logo };
