import Card from "../../../components/ui/Card";

function CoordinateCard({
  title,
  value
}) {
  return (
    <Card>

      <p className="text-sm text-teal-600">
        {title}
      </p>

      <p className="mt-2 text-xl font-semibold text-emerald-800">
        {Number(value).toFixed(6)}
      </p>

    </Card>
  );
}

export default CoordinateCard;