import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-8xl font-extrabold tracking-tight text-medical-600 sm:text-9xl">
        404
      </p>
      <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-base text-gray-500">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
        have been moved or no longer exists.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="rounded-lg bg-medical-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-medical-700 transition-colors"
        >
          Go Home
        </Link>
        <Link
          href="/accessories"
          className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
        >
          Browse Accessories
        </Link>
      </div>
    </div>
  );
}
