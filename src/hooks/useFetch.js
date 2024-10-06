import { useCallback, useState } from "react";

export default function useFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);
  const updateData = (newData) => {
    if (newData) setData(newData);
    else {
      console.log("New Data is Invalid!", newData);
    }
    return data;
  };
  const request = useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      setStatus({
        ok: response.ok,
        code: response.status,
        message: response.statusText,
      });
      if (response.ok === false) throw new Error(json.message);
    } catch (err) {
      setData(null);
      setError(err.message);
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  });

  return { error, loading, status, data, request, updateData };
}
