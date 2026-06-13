import Link from "next/link";
import { Wrench, Zap, Shield, CheckCircle2, Star } from "lucide-react";

const tiers = [
  {
    icon: Wrench,
    name: "Quick Fix",
    price: "From 150,000 RWF",
    features: ["One-time problem", "Assessed & fixed", "Clear report after"],
    cta: "Book a Fix",
    popular: false,
    border: "border-gray-200",
    btn: "bg-gray-900 hover:bg-gray-800",
  },
  {
    icon: Zap,
    name: "System Upgrade",
    price: "Custom quote",
    features: ["Full system overhaul", "Modern tools installed", "Training included", "System updates included"],
    cta: "Get a Quote",
    popular: true,
    border: "border-teal-500 border-2",
    btn: "bg-teal-600 hover:bg-teal-700",
  },
  {
    icon: Shield,
    name: "Monthly Care",
    price: "From 200,000 RWF/mo",
    features: ["Dedicated IT coverage", "Proactive monitoring", "Early problem solving"],
    cta: "Get Covered",
    popular: false,
    border: "border-gray-200",
    btn: "bg-teal-600 hover:bg-teal-700",
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest text-center mb-4">SIMPLE PRICING</p>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">No surprises. Just results.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div key={tier.name} className={`bg-white rounded-2xl ${tier.border} p-8 ${tier.popular ? "shadow-lg" : "shadow-sm hover:shadow-lg"} transition relative`}>
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-teal-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-xl flex items-center gap-1">
                  <Star className="w-3 h-3" /> Most Popular
                </div>
              )}
              <tier.icon className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-1">{tier.name}</h3>
              <p className="text-3xl font-extrabold text-teal-600 mb-6">{tier.price}</p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/new" className={`inline-block w-full text-center text-white font-semibold py-3 rounded-xl transition ${tier.btn}`}>
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
