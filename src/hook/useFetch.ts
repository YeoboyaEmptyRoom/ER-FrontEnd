import API from '@/lib/API';
import { Method } from 'axios';
import { useState } from 'react';

interface Props {
  url: string;
  method: Method;
  body: any;
}

const useFetch = async ({ url, method, body }: Props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  try {
    setLoading(true);
    const { data } = await API({
      url: url,
      method: method,
      data: body,
    });
    setData(data);
  } catch (e: any) {
    setError(e);
  } finally {
    setLoading(false);
  }

  return { data, loading, error };
};

export default useFetch;
