import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Ready to fix your tech?</h2>
        <p className="text-xl text-gray-600 mb-8">Don&apos;t wait until something breaks. Let&apos;s talk today.</p>
        <Link href="/new" className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg py-4 px-8 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl">
          Get Help Now
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
