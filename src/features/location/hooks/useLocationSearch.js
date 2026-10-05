import { useState } from "react";

import {
  searchLocation,
  getTimezone
} from "../services/locationApi";


function useLocationSearch() {

  const [search, setSearch] = useState("");
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] =
    useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  async function handleSearch() {

    if (!search.trim()) {
      setError("Please enter a location.");
      return;
    }

    try {

      setLoading(true);
      setError("");

      const data =
        await searchLocation(search);

      if (data.length === 0) {

        setLocations([]);
        setSelectedLocation(null);

        setError("No location found.");

        return;
      }

      setLocations(data);

      // First result
      const location = data[0];

      const latitude =
        Number(location.lat);

      const longitude =
        Number(location.lon);


      // Get timezone
      const timezoneData =
        await getTimezone(
          latitude,
          longitude
        );


      // Add timezone to location
      const locationWithTimezone = {
        ...location,

        timezone:
          timezoneData.timeZone ||
          timezoneData.timezone ||
          "Timezone not available"
      };


      setSelectedLocation(
        locationWithTimezone
      );

    } catch (error) {

      console.error(error);

      setError(
        "Something went wrong while searching."
      );

      setLocations([]);
      setSelectedLocation(null);

    } finally {

      setLoading(false);

    }
  }


  async function selectLocation(location) {

    try {

      setError("");

      const latitude =
        Number(location.lat);

      const longitude =
        Number(location.lon);


      const timezoneData =
        await getTimezone(
          latitude,
          longitude
        );


      const locationWithTimezone = {
        ...location,

        timezone:
          timezoneData.timeZone ||
          timezoneData.timezone ||
          "Timezone not available"
      };


      setSelectedLocation(
        locationWithTimezone
      );

    } catch (error) {

      console.error(error);

      // Still show the location
      setSelectedLocation(location);

    }
  }


  return {
    search,
    setSearch,

    locations,

    selectedLocation,

    loading,

    error,

    handleSearch,

    selectLocation
  };
}


export default useLocationSearch;