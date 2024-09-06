import type { JSX } from 'react';
import clsx from 'clsx';
import type { OfferShort } from '@customTypes/offer.ts';
import { capitalizeFirstLetter } from '@utils';
import { Layout } from '@components/layout';
import { PremiumMark } from '@components/premium-mark';
import { Bookmark } from '@components/bookmark';
import { Rating } from '@components/rating';
import { Reviews } from '@components/reviews';
import { OfferCard } from '@components/offer-card';
import { OFFER_DETAIL, THREE_OFFERS } from '@mocks/offers';

function OfferPage(): JSX.Element {
  const {
    description,
    images,
    goods,
    host,
    title,
    type,
    price,
    isFavorite,
    isPremium,
    rating,
    bedrooms,
    maxAdults,
  } = OFFER_DETAIL;

  const descriptionParagraphs: string[] = description.split(';');

  return (
    <Layout className={'page'}>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images &&
                images.map((image) => (
                  <div key={image} className="offer__image-wrapper">
                    <img
                      className="offer__image"
                      src={image}
                      alt="Photo studio"
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && <PremiumMark prefix="offer" />}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <Bookmark size="large" prefix="offer" isFavorite={isFavorite} />
              </div>
              <Rating rating={rating} prefix="offer" />
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {capitalizeFirstLetter(type)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods &&
                    goods.map((good) => (
                      <li key={good} className="offer__inside-item">
                        {good}
                      </li>
                    ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div
                    className={clsx(
                      'offer__avatar-wrapper',
                      host.isPro && 'offer__avatar-wrapper--pro',
                      'user__avatar-wrapper',
                    )}
                  >
                    <img
                      className="offer__avatar user__avatar"
                      src={host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{host.name}</span>
                  {host.isPro && (
                    <span className="offer__user-status">Pro</span>
                  )}
                </div>
                <div className="offer__description">
                  {descriptionParagraphs.map((paragraph) => (
                    <p key={paragraph} className="offer__text">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </div>
              <Reviews />
            </div>
          </div>
          <section className="offer__map map" />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {THREE_OFFERS.map((offer: OfferShort) => (
                <OfferCard
                  key={offer.id}
                  offer={offer}
                  size="large"
                  prefix="near-places"
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}

export { OfferPage };
