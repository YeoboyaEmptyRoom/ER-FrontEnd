import API from '@/lib/API';
import { Method } from 'axios';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

interface Props {
  url: string;
  method?: Method;
  onSuccess?: () => void;
  onFailure?: () => void;
}

const useFetch = ({ url, method, onSuccess, onFailure }: Props) => {
  const [data, setData] = useState(null);
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
        onSuccess && (await onSuccess());
      } catch (e: any) {
        console.log(e);
        await setError(e);
        onFailure && (await onFailure());
      } finally {
        setLoading(false);
      }
    },
    [method, url, onSuccess, onFailure]
  );

  return { data, loading, error, fetch };
};

export default useFetch;
