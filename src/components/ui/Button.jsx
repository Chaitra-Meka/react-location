function Button({
  children,
  onClick,
  disabled = false,
  type = "button"
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="
        rounded-md
        bg-emerald-600
        px-5
        py-2.5
        font-medium
        text-white
        hover:bg-emerald-700
        disabled:cursor-not-allowed
        disabled:opacity-50
      "
    >
      {children}
    </button>
  );
}

export default Button;