import { JSX } from 'react';
import clsx from 'clsx';
import type { Size } from '@customTypes/size';
import { getImageSize } from '@functions';

type PrefixForBookmark = 'place-card' | 'offer';

type BookmarkProps = {
  size: Size;
  prefix: PrefixForBookmark;
  isFavorite: boolean;
};

function Bookmark({ size, prefix, isFavorite }: BookmarkProps): JSX.Element {
  return (
    <button
      className={clsx(`${prefix}__bookmark-button`, 'button', {
        [`${prefix}__bookmark-button--active`]: isFavorite,
      })}
      type="button"
    >
      <svg
        className={`${prefix}__bookmark-icon`}
        {...getImageSize(size, 'bookmark')}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export { Bookmark };
