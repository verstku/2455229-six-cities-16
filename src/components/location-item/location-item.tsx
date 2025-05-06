import type { JSX } from 'react';
import type { CityName, CityId } from '@customTypes/city';
import { Link, useLocation } from 'react-router-dom';
type LocationItemTags = keyof Pick<JSX.IntrinsicElements, 'li' | 'div'>;

type LocationItemProps = {
  cityId: CityId;
  cityName: CityName;
  containerTag: LocationItemTags;
};

function LocationItem({
  cityId,
  cityName,
  containerTag: TagName,
}: LocationItemProps): JSX.Element {
  const { pathname } = useLocation();
  const linkClass = 'locations__item-link tabs__item';

  const content =
    pathname === `/${cityId}` ? (
      <span className={`${linkClass} tabs__item--active`}>{cityName}</span>
    ) : (
      <Link to={`/${cityId}`} className={linkClass}>
        <span>{cityName}</span>
      </Link>
    );

  return <TagName className="locations__item">{content}</TagName>;
}

export { LocationItem };
