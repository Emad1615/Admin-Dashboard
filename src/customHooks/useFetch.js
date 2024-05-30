import { useEffect, useState } from "react";
export function useFetch(url, query) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState("");
  async function GetData() {
    try {
      setIsLoading(true);
      setErrors("");
      const result = await fetch(url);
      if (!result.ok)
        throw new Error("something went wrong with fetching data");
      const finalResult = await result.json();
      if (!finalResult) throw new Error("data not found");
      setData(finalResult);
    } catch (err) {
      if (err.name !== "AbortError") {
        console.error(err.message);
        setErrors(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    GetData();
  }, [query || undefined]);
  return { data, isLoading, errors };
}
