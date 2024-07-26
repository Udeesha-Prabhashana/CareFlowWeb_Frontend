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

  const getTokenFromLocalStorage = () => {
    const user = localStorage.getItem("user");
    if (user) {
      try {
        const parsedUser = JSON.parse(user);
        return parsedUser.access_token;
      } catch (e) {
        console.error("Failed to parse user from local storage", e);
        return null;
      }
    }
    return null;
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const token = getTokenFromLocalStorage();
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const res = await axios.get<T>(url, { headers });
      setData(res.data);
    } catch (err: any) {
      setError(err.message || "Unknown error");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const token = getTokenFromLocalStorage();
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const res = await axios.get<T>(url, { headers });
      setData(res.data);
    } catch (err: any) {
      setError(err.message || "Unknown error");
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
