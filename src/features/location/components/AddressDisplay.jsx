import Card from "../../../components/ui/Card";

function AddressDisplay({
  location
}) {
  return (
    <Card>

      <p className="text-sm font-medium text-teal-600">
        Selected Location
      </p>

      <h2 className="mt-2 text-lg font-semibold text-emerald-800">
        📍 {location.display_name}
      </h2>

    </Card>
  );
}

export default AddressDisplay;