import type { JSX } from 'react';
import { CITIES } from '@constants';
import { LocationItem } from '@components/location-item';

function LocationsList(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <LocationItem
              key={city['id']}
              cityId={city['id']}
              cityName={city['name']}
              containerTag="li"
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export { LocationsList };
