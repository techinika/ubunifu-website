import { Search, Wrench, HeartHandshake } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    { number: "01", title: "Assess", desc: "We visit your business, review all your systems, and find the weak spots.", icon: Search },
    { number: "02", title: "Fix", desc: "We build a clear plan, explain it in plain language, and implement it.", icon: Wrench },
    { number: "03", title: "Maintain", desc: "For monthly clients, we stay — monitoring, updating, and preventing problems.", icon: HeartHandshake },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest text-center mb-4">HOW IT WORKS</p>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">We make IT simple.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center">
              <div className="text-7xl font-bold text-teal-100 mb-6">{step.number}</div>
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <step.icon className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              {i < 2 && <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-teal-300 to-gray-200 -z-10" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
