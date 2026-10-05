function Header() {
  return (
    <header className="border-b border-emerald-100 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">

        {/* Logo / App Name */}
        <div>
          <h1 className="text-2xl font-bold text-emerald-800">
            📍 Location Explorer
          </h1>

          <p className="text-sm text-teal-600">
            Discover places and explore them on the map
          </p>
        </div>

        {/* Header Right Side */}
        <div className="hidden text-sm text-gray-500 sm:block">
          Explore the world
        </div>

      </div>
    </header>
  );
}

export default Header;