function ErrorMessage({
  message
}) {
  if (!message) {
    return null;
  }

  return (
    <div className="mb-4 rounded-md border border-red-200 bg-red-50 p-3 text-red-600">
      {message}
    </div>
  );
}

export default ErrorMessage;