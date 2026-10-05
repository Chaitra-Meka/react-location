export function getCoordinates(location) {
  if (!location) {
    return null;
  }

  return {
    lat: Number(location.lat),
    lon: Number(location.lon)
  };
}