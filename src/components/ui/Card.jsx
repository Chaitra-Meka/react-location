function Card({
  children,
  className = ""
}) {
  return (
    <div
      className={`
        rounded-lg
        border
        border-emerald-100
        bg-white
        p-4
        shadow-sm
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;