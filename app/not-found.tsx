import Link from "next/link";
import { Navbar } from "@/components/Nav";

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <main className="bg-gray-50 min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <h1 className="text-8xl font-extrabold text-teal-600 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Page not found</h2>
          <p className="text-gray-600 mb-8">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
          <Link href="/" className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-xl transition">
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
