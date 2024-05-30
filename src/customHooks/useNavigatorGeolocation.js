import { useEffect, useState } from "react";

export function useNavigatorGeolocation() {
  const [position, setPosition] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setIsLoading(true);
    setError("");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition({
            Latitude: position.coords.latitude,
            Longitude: position.coords.longitude,
          });
        },
        (err) => {
          setError(err.message);
        }
      );
    } else setError("Your browser does not support geolocation");
    setIsLoading(false);
  }, []);
  return { position, isLoading, error };
}
