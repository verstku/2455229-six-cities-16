import type { JSX, HTMLAttributes } from 'react';
import { FormRatingStar } from '@components/form-rating-star';
import { FORM_RATING_STARS } from '@constants';

type FormRatingProps = Pick<HTMLAttributes<HTMLDivElement>, 'className'>;

function FormRating({ className }: FormRatingProps): JSX.Element {
  return (
    <div className={`${className} form__rating`}>
      {FORM_RATING_STARS.map(({ title, value }) => (
        <FormRatingStar title={title} value={value} key={value} />
      ))}
    </div>
  );
}

export { FormRating };
