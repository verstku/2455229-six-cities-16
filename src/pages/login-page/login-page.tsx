import type { JSX } from 'react';
import { CITIES } from '@constants';
import { randomInteger } from '@utils';
import { LoginForm } from '@components/login-form';
import { LocationItem } from '@components/location-item';
import { Cities } from '@customTypes/city.ts';

function LoginPage(): JSX.Element {
  const randomCity: Cities = CITIES[randomInteger(0, CITIES.length - 1)];

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <LoginForm />
        </section>
        <section className="locations locations--login locations--current">
          <LocationItem
            cityId={randomCity['id']}
            cityName={randomCity['name']}
            containerTag="div"
          />
        </section>
      </div>
    </main>
  );
}

export { LoginPage };
