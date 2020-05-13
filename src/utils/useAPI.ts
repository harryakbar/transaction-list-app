import { useState, useCallback } from "react";

export function useAPI(): [()=>void, any|null, boolean, string | null] {
  const [result, setResult] = useState<object | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setResult(null);
      setLoading(true);
      const response = await fetch('/frontend-test');
      let data = await response.json();
      setResult(data);
    } catch (error) {
      setError(JSON.stringify(error));
    } finally {
      setLoading(false);
    }
  },[]);

  return [fetchData, result, loading, error];
}