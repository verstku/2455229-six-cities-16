import { JSX } from 'react';
import { REVIEWS } from '@mocks/reviews';
import type { Review } from '@customTypes/review';
import { ReviewItem } from '@components/review-item';
import { ReviewForm } from '@components/review-form';

function Reviews(): JSX.Element {
  const reviews: Review[] = REVIEWS;
  const reviewsCount: number = reviews.length;

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviewsCount}</span>
      </h2>
      {reviewsCount && (
        <ul className="reviews__list">
          {reviews.map((review) => (
            <ReviewItem key={review.id} review={review} />
          ))}
        </ul>
      )}
      <ReviewForm />
    </section>
  );
}

export { Reviews };
