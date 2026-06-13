import { Zap, Users, Clock, MessageCircle } from "lucide-react";

export default function WhyChooseUs() {
  const items = [
    { icon: Zap, title: "Prevention First", desc: "We find problems before they cost you." },
    { icon: Users, title: "Dedicated Team", desc: "You get the same people every time." },
    { icon: Clock, title: "Built for SMEs", desc: "Prices that fit small business budgets." },
    { icon: MessageCircle, title: "Plain Language", desc: "No jargon. Just clear, honest work." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest text-center mb-4">WHY UBUNIFU LABS</p>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">We do IT differently.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {items.map((item) => (
            <div key={item.title} className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-teal-50 hover:border-teal-200 border border-gray-100 transition group">
              <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-teal-600 transition">
                <item.icon className="w-7 h-7 text-teal-600 group-hover:text-white transition" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
