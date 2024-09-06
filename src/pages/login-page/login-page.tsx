import type { JSX } from 'react';
import type { CityName } from '@customTypes/city';
import { CITIES } from '@constants';
import { randomInteger } from '@utils';
import { Layout } from '@components/layout';
import { LoginForm } from '@components/login-form';
import { LocationItem } from '@components/location-item';

function LoginPage(): JSX.Element {
  const randomCity: CityName = CITIES[randomInteger(0, CITIES.length - 1)];

  return (
    <Layout className="page page--gray page--login" noHeaderNav>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm />
          </section>
          <section className="locations locations--login locations--current">
            <LocationItem
              city={randomCity}
              containerTag="div"
              linkClassName="locations__item-link
              "
            />
          </section>
        </div>
      </main>
    </Layout>
  );
}

export { LoginPage };
