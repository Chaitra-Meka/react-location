import { useEffect } from "react";
import { useMap } from "react-leaflet";

function MapUpdater({ location }) {

  const map = useMap();

  useEffect(() => {

    if (!location) {
      return;
    }

    const latitude =
      Number(location.lat);

    const longitude =
      Number(location.lon);

    map.flyTo(
      [latitude, longitude],
      13,
      {
        duration: 1
      }
    );

  }, [location, map]);

  return null;
}

export default MapUpdater;