import * as Location from "expo-location";
import { useEffect, useState } from "react";

export interface ILocation {
  latitude: number;
  longitude: number;
}

const useLocation = (): ILocation | null => {
  const [location, setLocation] = useState<ILocation | null>(null);

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};

export default useLocation;
