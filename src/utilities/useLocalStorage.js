import { useEffect, useState } from "react";

export default function useLocalStorage(key, initValue) {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue) return JSON.parse(jsonValue);
    if (typeof initValue == "function") return () => {};
    else return initValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
