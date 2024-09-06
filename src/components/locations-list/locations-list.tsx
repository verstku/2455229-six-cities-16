import type { JSX } from 'react';
import { CITIES } from '@constants';
import type { CityName } from '@customTypes/city';
import { LocationItem } from '@components/location-item';

function LocationsList(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city: CityName) => (
            <LocationItem
              key={city}
              city={city}
              containerTag="li"
              linkClassName="locations__item-link tabs__item"
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export { LocationsList };
