import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";

function LocationSearch({
  search,
  setSearch,
  onSearch,
  loading
}) {
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      onSearch();
    }
  }

  return (
    <section className="mb-6">

      <h2 className="mb-2 text-xl font-semibold text-emerald-800">
        Search Location
      </h2>

      <p className="mb-4 text-sm text-teal-600">
        Enter a city, country, landmark or address.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">

        <Input
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
          onKeyDown={handleKeyDown}
          placeholder="Enter a city or location"
        />

        <Button
          onClick={onSearch}
          disabled={loading}
        >
          {loading
            ? "Searching..."
            : "Search"}
        </Button>

      </div>

    </section>
  );
}

export default LocationSearch;