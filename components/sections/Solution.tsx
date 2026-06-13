import { Wrench, Shield } from "lucide-react";

export default function Solution() {
  const fixTags = ["Website", "Email", "Networks", "Systems", "Hardware"];
  const maintainTags = ["Monitoring", "Updates", "Prevention", "Upgrades"];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest text-center mb-4">OUR SOLUTION</p>
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">Ubunifu Labs</h2>
          <p className="text-xl text-gray-600 mt-4">Your dedicated IT partner, preventing problems before they happen.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-teal-50 rounded-3xl p-8 md:p-10 border border-teal-100 relative overflow-hidden group hover:shadow-lg transition">
            <div className="absolute top-4 right-4 w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <Wrench className="w-10 h-10 text-teal-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Fix It</h3>
            <p className="text-gray-600 text-lg mb-6">We assess, solve &amp; implement. Fast.</p>
            <div className="flex flex-wrap gap-2">
              {fixTags.map((tag) => (
                <span key={tag} className="text-sm font-medium text-teal-700 bg-teal-100 px-3 py-1.5 rounded-lg">{tag}</span>
              ))}
            </div>
          </div>
          <div className="bg-teal-600 rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:shadow-lg transition">
            <div className="absolute top-4 right-4 w-10 h-10 bg-white text-teal-600 rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <Shield className="w-10 h-10 text-teal-200 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Maintain It</h3>
            <p className="text-teal-100 text-lg mb-6">Monthly IT team. Always on.</p>
            <div className="flex flex-wrap gap-2">
              {maintainTags.map((tag) => (
                <span key={tag} className="text-sm font-medium text-teal-800 bg-teal-200 px-3 py-1.5 rounded-lg">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
