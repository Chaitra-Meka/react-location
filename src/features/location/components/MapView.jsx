import {
  MapContainer,
  TileLayer
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import MapClickHandler from "./MapClickHandler";
import LocationMarker from "./LocationMarker";
import MapUpdater from "./MapUpdater";

const DEFAULT_LOCATION = [
  17.3850,
  78.4867
];

function MapView({
  location,
  onMapClick
}) {

  const center = location
    ? [
        Number(location.lat),
        Number(location.lon)
      ]
    : DEFAULT_LOCATION;

  return (
    <section className="overflow-hidden rounded-lg border border-emerald-100 bg-white p-2 shadow-sm">

      <div className="px-2 py-3">

        <h2 className="font-semibold text-emerald-800">
          Interactive Map
        </h2>

        <p className="text-sm text-teal-600">
          Click anywhere on the map to select a location
        </p>

      </div>

      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={true}
        className="h-[450px] w-full rounded-md"
      >

        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapClickHandler
          onMapClick={onMapClick}
        />

        <LocationMarker
          location={location}
        />

        <MapUpdater
          location={location}
        />

      </MapContainer>

    </section>
  );
}

export default MapView;