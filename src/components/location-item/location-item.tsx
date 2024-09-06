import type { JSX } from 'react';
import type { CityName } from '@customTypes/city';

type LocationItemTags = keyof Pick<JSX.IntrinsicElements, 'li' | 'div'>;

type LocationItemProps = {
  city: CityName;
  containerTag: LocationItemTags;
  linkClassName: string;
};

function LocationItem({
  city,
  containerTag: TagName,
  linkClassName,
}: LocationItemProps): JSX.Element {
  // const Container: keyof JSX.IntrinsicElements = containerTag;

  return (
    <TagName className="locations__item">
      <a className={linkClassName} href="#">
        <span>{city}</span>
      </a>
    </TagName>
  );
}

export { LocationItem };
