import type { JSX } from 'react';
import clsx from 'clsx';
import type { Size } from '@customTypes/size';
import { getImageSize } from '@utils';

type PrefixForBookmark = 'place-card' | 'offer';

type BookmarkProps = {
  size: Size;
  prefix: PrefixForBookmark;
  isFavorite: boolean;
};

function Bookmark({ size, prefix, isFavorite }: BookmarkProps): JSX.Element {
  const bookmarkLabel = `${isFavorite ? 'In' : 'To'} bookmarks`;

  return (
    <button
      className={clsx(
        `${prefix}__bookmark-button`,
        'button',
        isFavorite && `${prefix}__bookmark-button--active`,
      )}
      type="button"
    >
      <svg
        className={`${prefix}__bookmark-icon`}
        {...getImageSize(size, 'bookmark')}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{bookmarkLabel}</span>
    </button>
  );
}

export { Bookmark };
