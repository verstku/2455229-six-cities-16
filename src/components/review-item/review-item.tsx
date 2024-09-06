import type { JSX } from 'react';
import type { Review } from '@customTypes/review.ts';
import { formatDate } from '@utils';
import { Rating } from '@components/rating';

type ReviewItemProps = {
  review: Review;
};

function ReviewItem(item: ReviewItemProps): JSX.Element {
  const { comment, date, rating, user } = item.review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width="54"
            height="54"
            alt={user.name}
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <Rating rating={rating} prefix="reviews" />
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>
          {formatDate(date)}
        </time>
      </div>
    </li>
  );
}

export { ReviewItem };
