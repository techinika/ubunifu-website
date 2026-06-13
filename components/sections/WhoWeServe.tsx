import { Building2, Landmark, ShoppingBag, Heart, GraduationCap, Truck } from "lucide-react";

export default function WhoWeServe() {
  const industries = [
    { icon: Building2, label: "Hotels & Hospitality" },
    { icon: Landmark, label: "Financial Services" },
    { icon: ShoppingBag, label: "Retail & Commerce" },
    { icon: Heart, label: "NGOs & Development" },
    { icon: GraduationCap, label: "Schools & Clinics" },
    { icon: Truck, label: "Logistics & Ops" },
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-teal-400 font-semibold text-sm uppercase tracking-widest text-center mb-4">WHO WE SERVE</p>
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">Small &amp; Medium</h2>
          <p className="text-3xl md:text-5xl font-extrabold text-teal-400">Businesses in Rwanda.</p>
        </div>
        <div className="max-w-3xl mx-auto mt-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((item) => (
              <div key={item.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center hover:bg-white/10 transition group">
                <item.icon className="w-8 h-8 text-teal-400 mx-auto mb-3" />
                <p className="text-white text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg">5 – 200 employees. Kigali-based, expanding nationally.</p>
        </div>
      </div>
    </section>
  );
}
