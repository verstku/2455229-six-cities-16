import type { JSX } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '@constants';
import { Helmet } from 'react-helmet-async';
import clsx from 'clsx';
import style from './not-found-page.module.css';

function NotFoundPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>6 Cities: Page Not Found – 404</title>
        <meta
          name="description"
          content="Oops! The page you are looking for does not exist. Please check the URL or return to the homepage."
        />
      </Helmet>
      <div className="page page--gray page--main">
        <main className="page__main page__main--login">
          <div className={clsx(style.notFound, 'container')}>
            <h1 className={style.notFound__title}>404. Page not found</h1>
            <Link className="button form__submit" to={AppRoute.Main}>
              Return to home page
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}

export { NotFoundPage };
