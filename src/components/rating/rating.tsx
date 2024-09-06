import type { JSX } from 'react';
import { getRatingWidth } from '@utils';

type PrefixForRating = 'place-card' | 'offer' | 'reviews';

type RatingProps = {
  rating: number;
  prefix: PrefixForRating;
};

function Rating({ rating, prefix }: RatingProps): JSX.Element {
  return (
    <div className={`${prefix}__rating rating`}>
      <div className={`${prefix}__stars rating__stars`}>
        <span style={{ width: getRatingWidth(rating) }} />
        <span className="visually-hidden">Rating</span>
      </div>
      {prefix === 'offer' && (
        <span className="offer__rating-value rating__value">{rating}</span>
      )}
    </div>
  );
}

export { Rating };
