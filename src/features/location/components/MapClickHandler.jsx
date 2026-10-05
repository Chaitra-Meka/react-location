import {
  useMapEvents
} from "react-leaflet";

function MapClickHandler({
  onMapClick
}) {
  useMapEvents({
    click(event) {
      const {
        lat,
        lng
      } = event.latlng;

      onMapClick({
        lat,
        lon: lng
      });
    }
  });

  return null;
}

export default MapClickHandler;