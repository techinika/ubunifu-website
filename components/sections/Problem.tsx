import { Globe, Mail, Laptop } from "lucide-react";

export default function Problem() {
  const items = [
    { icon: Globe, title: "Website goes down", line1: "Clients leave.", line2: "Revenue lost." },
    { icon: Mail, title: "Email stops working", line1: "Deals fall through.", line2: "Trust broken." },
    { icon: Laptop, title: "Systems crash", line1: "Hours wasted.", line2: "Staff frustrated." },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-teal-400 font-semibold text-sm uppercase tracking-widest mb-4">THE PROBLEM</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Every day, businesses lose money to tech problems{" "}
            <span className="text-teal-400">they didn&apos;t see coming.</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {items.map((item) => (
            <div key={item.title} className="bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 text-center hover:bg-white/10 transition group">
              <div className="w-14 h-14 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500/30 transition">
                <item.icon className="w-7 h-7 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <div className="space-y-1">
                <p className="text-gray-300">{item.line1}</p>
                <p className="text-red-400 font-semibold">{item.line2}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-lg text-gray-400 italic">Most businesses only find out when it&apos;s too late.</p>
        </div>
      </div>
    </section>
  );
}
