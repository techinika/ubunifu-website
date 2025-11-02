import Link from "next/link";

export const Navbar = () => (
  <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
      <Link
        href="/"
        className="font-extrabold text-2xl tracking-tight text-gray-900"
      >
        Ubunifu Labs
      </Link>

      <Link
        href="/new"
        className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-5 rounded-lg transition duration-300 transform hover:scale-105 shadow-md"
      >
        Start a Project
      </Link>
    </div>
  </header>
);
