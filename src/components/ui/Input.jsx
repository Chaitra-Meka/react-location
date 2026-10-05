function Input({
  value,
  onChange,
  placeholder,
  onKeyDown
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      className="
        w-full
        rounded-md
        border
        border-emerald-200
        bg-white
        px-4
        py-2.5
        text-gray-800
        outline-none
        placeholder:text-gray-400
        focus:border-emerald-500
        focus:ring-1
        focus:ring-emerald-500
      "
    />
  );
}

export default Input;