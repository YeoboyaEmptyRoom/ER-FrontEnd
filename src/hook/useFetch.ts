import API from '@/lib/API';
import { Method } from 'axios';
import { useCallback, useState } from 'react';

interface Props<T> {
  url: string;
  method?: Method;
  onSuccess?: (data: T) => void;
  onFailure?: () => void;
}

const useFetch = <T>({ url, method, onSuccess, onFailure }: Props<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  const fetch = useCallback(
    async (body?: any) => {
      setLoading(true);
      try {
        const { data } = await API({
          url: url,
          method: method ?? 'get',
          data: body,
        });
        await setData(data);
        onSuccess && onSuccess(data);
      } catch (e: any) {
        console.log(e);
        await setError(e);
        onFailure && onFailure();
      } finally {
        setLoading(false);
      }
    },
    [method, url, onSuccess, onFailure]
  );

  return { data, loading, error, fetch };
};

export default useFetch;
