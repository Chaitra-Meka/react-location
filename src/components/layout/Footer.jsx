function Footer() {
  return (
    <footer className="mt-10 border-t border-emerald-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6">

        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">

          {/* App Name */}
          <div>
            <p className="font-semibold text-emerald-800">
              📍 Location Explorer
            </p>

            <p className="text-sm text-teal-600">
              Explore places, discover locations.
            </p>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © 2026 Location Explorer. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;