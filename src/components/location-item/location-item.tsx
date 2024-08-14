import { JSX } from 'react';
import type { CityName } from '@customTypes/city';

type LocationItemTags = 'li' | 'div';

type LocationItemProps = {
  city: CityName;
  containerTag: LocationItemTags;
  linkClassName: string;
};

function LocationItem({
  city,
  containerTag,
  linkClassName,
}: LocationItemProps): JSX.Element {
  const Container: keyof JSX.IntrinsicElements = containerTag;

  return (
    <Container className="locations__item">
      <a className={linkClassName} href="#">
        <span>{city}</span>
      </a>
    </Container>
  );
}

export { LocationItem };
