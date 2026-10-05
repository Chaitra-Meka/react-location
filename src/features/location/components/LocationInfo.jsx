import AddressDisplay from "./AddressDisplay";
import CoordinateCard from "./CoordinateCard";

function getGMTOffset(timeZone) {
  if (!timeZone) {
    return "GMT";
  }

  try {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: timeZone,
      timeZoneName: "longOffset"
    }).formatToParts(new Date());

    const timezonePart = parts.find(
      (part) => part.type === "timeZoneName"
    );

    return timezonePart?.value || "GMT";
  } catch (error) {
    console.error("GMT offset error:", error);
    return "GMT";
  }
}

function LocationInfo({ location }) {
  if (!location) {
    return (
      <div className="mt-6 rounded-lg border border-emerald-100 bg-emerald-50 p-6 text-center">
        <p className="text-2xl">
          🗺️
        </p>

        <p className="mt-2 font-medium text-emerald-800">
          No location selected
        </p>

        <p className="mt-1 text-sm text-teal-600">
          Search for a location or click on the map.
        </p>
      </div>
    );
  }

  // Get GMT offset
  const gmt = getGMTOffset(location.timezone);

  return (
    <section className="mt-6">

      <AddressDisplay
        location={location}
      />

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {/* Latitude */}
        <CoordinateCard
          title="Latitude"
          value={location.lat}
        />

        {/* Longitude */}
        <CoordinateCard
          title="Longitude"
          value={location.lon}
        />

        {/* Timezone */}
        <div className="rounded-lg border border-emerald-100 bg-white p-4 shadow-sm">

          <p className="text-sm text-teal-600">
            Timezone
          </p>

          <p className="mt-2 text-lg font-semibold text-emerald-800">
            🕐 {location.timezone || "Not available"}
          </p>

        </div>

        {/* GMT Offset */}
        <div className="rounded-lg border border-emerald-100 bg-white p-4 shadow-sm">

          <p className="text-sm text-teal-600">
            GMT Offset
          </p>

          <p className="mt-2 text-lg font-semibold text-emerald-800">
            🌐 {gmt}
          </p>

        </div>

      </div>

    </section>
  );
}

export default LocationInfo;