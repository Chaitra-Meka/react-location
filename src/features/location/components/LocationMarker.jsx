import {
  Marker,
  Popup,
  Tooltip
} from "react-leaflet";

function LocationMarker({ location }) {
  if (!location) {
    return null;
  }

  const latitude = Number(location.lat);
  const longitude = Number(location.lon);

  const position = [
    latitude,
    longitude
  ];

  const timezone =
    location.timezone || "Timezone not available";

  return (
    <Marker position={position}>

      <Tooltip>
        <div className="space-y-1 text-sm">
          <p className="font-semibold text-emerald-800">
            📍{" "} {location.display_name || "Selected Location"}
          </p>

          <p>
            <span className="font-medium">
              Latitude:
            </span>{" "}
            {latitude.toFixed(6)}
          </p>

          <p>
            <span className="font-medium">
              Longitude:
            </span>{" "}
            {longitude.toFixed(6)}
          </p>

           <p>
            <span className="font-medium">
              Timezone:
            </span>{" "}
            {timezone}
          </p>
          
        </div>
      </Tooltip>

      <Popup>
        <div className="w-64">

          <div className="mb-4 rounded-md bg-emerald-50 p-3">
            <h3 className="text-lg font-bold text-emerald-800">
              📍 Location
            </h3>

            <p className="mt-1 text-sm text-gray-700">
              {location.display_name || "Unknown Location"}
            </p>
          </div>

          <div className="space-y-3">

            <div className="flex items-center justify-between border-b pb-2">
              <span className="text-sm font-medium text-gray-500">
                Latitude
              </span>

              <span className="text-sm font-semibold text-gray-800">
                {latitude.toFixed(6)}
              </span>
            </div>

            <div className="flex items-center justify-between border-b pb-2">
              <span className="text-sm font-medium text-gray-500">
                Longitude
              </span>

              <span className="text-sm font-semibold text-gray-800">
                {longitude.toFixed(6)}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-500">
                Timezone
              </span>

              <span className="text-sm font-semibold text-gray-800">
                {timezone}
              </span>
            </div>

          </div>

        </div>
      </Popup>

    </Marker>
  );
}

export default LocationMarker;