export function getGMTOffset(timeZone) {
  if (!timeZone) {
    return "GMT";
  }

  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    timeZoneName: "longOffset"
  }).formatToParts(new Date());

  const offsetPart = parts.find(
    (part) => part.type === "timeZoneName"
  );

  if (!offsetPart) {
    return "GMT";
  }

  return offsetPart.value
    .replace("GMT", "GMT")
    .replace("GMT", "GMT");
}