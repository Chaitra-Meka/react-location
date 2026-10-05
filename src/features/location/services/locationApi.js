const NOMINATIM_BASE_URL =
  import.meta.env.VITE_NOMINATIM_BASE_URL;

const TIMEZONE_API_URL =
  import.meta.env.VITE_TIMEZONE_API_URL;


// Search location
export async function searchLocation(query) {
  const params = new URLSearchParams({
    q: query,
    format: "jsonv2",
    addressdetails: "1",
    limit: "5"
  });

  const response = await fetch(
    `${NOMINATIM_BASE_URL}/search?${params}`
  );

  if (!response.ok) {
    throw new Error("Unable to fetch location data.");
  }

  return await response.json();
}


// Reverse geocoding
export async function reverseLocation(
  latitude,
  longitude
) {
  const params = new URLSearchParams({
    lat: latitude,
    lon: longitude,
    format: "jsonv2",
    addressdetails: "1"
  });

  const response = await fetch(
    `${NOMINATIM_BASE_URL}/reverse?${params}`
  );

  if (!response.ok) {
    throw new Error("Unable to find location details.");
  }

  return await response.json();
}


// Get timezone
export async function getTimezone(
  latitude,
  longitude
) {
  const response = await fetch(
    `${TIMEZONE_API_URL}?latitude=${latitude}&longitude=${longitude}`
  );

  if (!response.ok) {
    throw new Error("Unable to fetch timezone.");
  }

  return await response.json();
}