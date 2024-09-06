import type { JSX } from 'react';
import { FORM_RATING_STARS } from '@constants';

type FormRatingStarProps = {
  title: (typeof FORM_RATING_STARS)[number]['title'];
  value: (typeof FORM_RATING_STARS)[number]['value'];
};

function FormRatingStar({ title, value }: FormRatingStarProps): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={value}
        id={`${value}-stars`}
        type="radio"
      />
      <label
        htmlFor={`${value}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}

export { FormRatingStar };
