import { useEffect, useState } from "react";
import axios from "axios";

interface FetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  reFetch: () => Promise<void>;
}

const useFetch = <T = unknown>(url: string): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get<T>(url);
        setData(res.data);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get<T>(url);
      setData(res.data);
    } catch (err: any) {
      setError(err.message || "Unknown error");
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
