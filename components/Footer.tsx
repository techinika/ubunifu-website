import Link from "next/link";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Ubunifu Labs</h3>
            <p className="text-gray-400 text-sm">
              A Techinika initiative providing professional IT support and managed services to keep your business technology running reliably every day.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/#services" className="hover:text-white transition">Services</Link></li>
              <li><Link href="/#projects" className="hover:text-white transition">Our Work</Link></li>
              <li><Link href="/new" className="hover:text-white transition">Get IT Support</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="mailto:info@techinika.com" className="hover:text-white transition">info@techinika.com</a></li>
              <li><a href="tel:+250791377446" className="hover:text-white transition">+250 791 377 446</a></li>
              <li><span>Kigali, Rwanda</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          © {currentYear} Ubunifu Labs, a division of Techinika Limited.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
