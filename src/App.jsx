import { useState } from "react";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import ErrorMessage from "./components/ui/ErrorMessage";
import LoadingSpinner from "./components/ui/LoadingSpinner";

import LocationSearch from "./features/location/components/LocationSearch";
import SearchResults from "./features/location/components/SearchResults";
import MapView from "./features/location/components/MapView";
import LocationInfo from "./features/location/components/LocationInfo";

import useLocationSearch from "./features/location/hooks/useLocationSearch";

import {
  reverseLocation,
  getTimezone
} from "./features/location/services/locationApi";


function App() {

  const {
    search,
    setSearch,
    locations,
    selectedLocation,
    loading,
    error,
    handleSearch,
    selectLocation
  } = useLocationSearch();


  // Location selected by clicking the map
  const [mapLocation, setMapLocation] =
    useState(null);


  // Loading state for map click
  const [mapLoading, setMapLoading] =
    useState(false);


  // Error state for map click
  const [mapError, setMapError] =
    useState("");


  // --------------------------------
  // MAP CLICK
  // --------------------------------

  async function handleMapClick(coordinates) {

    try {

      setMapLoading(true);
      setMapError("");


      const latitude =
        Number(coordinates.lat);

      const longitude =
        Number(coordinates.lon);


      // -----------------------------
      // 1. Get address
      // -----------------------------

      const address =
        await reverseLocation(
          latitude,
          longitude
        );


      // -----------------------------
      // 2. Get timezone
      // -----------------------------

      const timezoneData =
        await getTimezone(
          latitude,
          longitude
        );


      // -----------------------------
      // 3. Create complete location
      // -----------------------------

      const location = {

        ...address,

        lat: latitude,

        lon: longitude,

        timezone:
          timezoneData.timeZone ||
          timezoneData.timezone ||
          "Timezone not available"
      };


      // -----------------------------
      // 4. Save location
      // -----------------------------

      setMapLocation(location);


    } catch (error) {

      console.error(
        "Map location error:",
        error
      );

      setMapError(
        "Unable to load location details."
      );

    } finally {

      setMapLoading(false);

    }
  }


  // --------------------------------
  // SEARCH RESULT SELECT
  // --------------------------------

  async function handleLocationSelect(location) {

    // Remove map-click location
    setMapLocation(null);

    // Select searched location
    await selectLocation(location);
  }


  // --------------------------------
  // DISPLAYED LOCATION
  // --------------------------------

  const displayedLocation =
    mapLocation || selectedLocation;


  return (
    <div className="min-h-screen bg-emerald-50">

      {/* Header */}

      <Header />


      {/* Main Content */}

      <main className="mx-auto max-w-6xl px-4 py-8">


        {/* Search */}

        <LocationSearch
          search={search}
          setSearch={setSearch}
          onSearch={handleSearch}
          loading={loading}
        />


        {/* Search Loading */}

        {loading && (
          <LoadingSpinner />
        )}


        {/* Map Loading */}

        {mapLoading && (
          <div className="mb-4 rounded-md bg-emerald-50 p-3 text-center text-emerald-700">
            Loading location details...
          </div>
        )}


        {/* Errors */}

        <ErrorMessage
          message={
            error || mapError
          }
        />


        {/* Search Results */}

        <SearchResults
          locations={locations}
          onSelect={handleLocationSelect}
        />


        {/* Map */}

        <MapView
          location={displayedLocation}
          onMapClick={handleMapClick}
        />


        {/* Location Information */}

        <LocationInfo
          location={displayedLocation}
        />


      </main>


      {/* Footer */}

      <Footer />

    </div>
  );
}


export default App;