import Card from "../../../components/ui/Card";

function SearchResults({
  locations,
  onSelect
}) {
  if (locations.length === 0) {
    return null;
  }

  return (
    <section className="mb-6">

      <h3 className="mb-3 text-lg font-semibold text-emerald-800">
        Search Results
      </h3>

      <div className="space-y-3">

        {locations.map((location) => (
          <Card key={location.place_id}>

            <button
              type="button"
              onClick={() =>
                onSelect(location)
              }
              className="w-full text-left"
            >

              <p className="font-medium text-gray-800 hover:text-emerald-700">
                {location.display_name}
              </p>

              <div className="mt-2 text-sm text-teal-600">

                <p>
                  Latitude:{" "}
                  {Number(location.lat).toFixed(6)}
                </p>

                <p>
                  Longitude:{" "}
                  {Number(location.lon).toFixed(6)}
                </p>

              </div>

            </button>

          </Card>
        ))}

      </div>

    </section>
  );
}

export default SearchResults;