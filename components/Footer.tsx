
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Ubunifu Labs, a division of Technika
        Limited.
      </div>
    </footer>
  );
}

export default Footer;
