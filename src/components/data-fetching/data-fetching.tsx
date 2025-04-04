import type { JSX } from 'react';
import type { UrlKey } from './types.ts';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_URLS } from './api-urls.ts';
import { Spinner } from '@components/spinner';

type DataFetchingProps = {
  urlKey: UrlKey;
  renderChild: (apiData: any) => JSX.Element;
};

function DataFetching({ urlKey, renderChild }: DataFetchingProps): JSX.Element {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (urlKey === 'GET_OFFER_DETAIL' && !id) {
      return;
    }

    const loadData = async () => {
      setIsLoading(true);
      setData(null);
      setError(null);

      try {
        const apiUrl = id
          ? API_URLS[urlKey].replace(':offerId', id)
          : API_URLS[urlKey];

        const response = await fetch(apiUrl, {
          headers: {
            'X-Token': 'cGVkcm9ob25zYWxlc0BnbWFpbC5jb20=',
          },
        });
        setData(await response.json());
      } catch (error) {
        setError(
          `Fetch failed with error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        );
      } finally {
        setIsLoading(false);
      }
    };

    void loadData();
  }, [urlKey, id]);

  if (urlKey === 'GET_OFFER_DETAIL' && !id) {
    return <Spinner />;
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return renderChild(data);
}

export { DataFetching };
