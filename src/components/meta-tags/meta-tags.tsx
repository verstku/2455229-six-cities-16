import type { JSX } from 'react';
import { Helmet } from 'react-helmet-async';
import type { MetaInfo } from './meta-tags-helpers.ts';
import { getMetaInfo } from './meta-tags-helpers.ts';

export type MetaTagsProps = {
  pathname: string;
  dynamicPageMetaTags: MetaInfo | undefined;
};

function MetaTags({
  pathname,
  dynamicPageMetaTags,
}: MetaTagsProps): JSX.Element {
  const { title, description } = dynamicPageMetaTags || getMetaInfo(pathname);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

export { MetaTags };
