import type { JSX } from 'react';
import type { OfferShort } from '@customTypes/offer';
import type { Size } from '@customTypes/size';
import { capitalizeFirstLetter, getImageSize } from '@utils';
import { PremiumMark } from '@components/premium-mark';
import { Bookmark } from '@components/bookmark';
import { Rating } from '@components/rating';

type PrefixForOffer = 'favorites' | 'cities' | 'near-places';

type OfferShortProps = {
  offer: OfferShort;
  size: Size;
  prefix: PrefixForOffer;
};

function OfferCard({ offer, size, prefix }: OfferShortProps): JSX.Element {
  const { title, type, price, previewImage, isPremium, isFavorite, rating } =
    offer;
  return (
    <article className={`${prefix}__card place-card`}>
      {isPremium && <PremiumMark prefix="place-card" />}
      <div className={`${prefix}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            {...getImageSize(size, 'offer')}
            alt={title}
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <Bookmark size="small" prefix="place-card" isFavorite={isFavorite} />
        </div>
        <Rating rating={rating} prefix="place-card" />
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
      </div>
    </article>
  );
}

export { OfferCard };
