"use client";

import Link from "next/link";
import { Navbar } from "./Nav";
import Footer from "./Footer";
import FAQSection from "./FAQs";
import {
  Globe,
  Mail,
  Laptop,
  Wrench,
  Shield,
  Search,

  HeartHandshake,
  Zap,
  Users,
  Clock,
  MessageCircle,
  Building2,
  Landmark,
  ShoppingBag,
  Heart,
  GraduationCap,
  Truck,
  CheckCircle2,
  ArrowRight,
  Star,
} from "lucide-react";

const Problem = () => (
  <section className="relative py-24 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
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
        <div className="bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 text-center hover:bg-white/10 transition group">
          <div className="w-14 h-14 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500/30 transition">
            <Globe className="w-7 h-7 text-red-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Website goes down</h3>
          <div className="space-y-1">
            <p className="text-gray-300">Clients leave.</p>
            <p className="text-red-400 font-semibold">Revenue lost.</p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 text-center hover:bg-white/10 transition group">
          <div className="w-14 h-14 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500/30 transition">
            <Mail className="w-7 h-7 text-red-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Email stops working</h3>
          <div className="space-y-1">
            <p className="text-gray-300">Deals fall through.</p>
            <p className="text-red-400 font-semibold">Trust broken.</p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 text-center hover:bg-white/10 transition group">
          <div className="w-14 h-14 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500/30 transition">
            <Laptop className="w-7 h-7 text-red-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Systems crash</h3>
          <div className="space-y-1">
            <p className="text-gray-300">Hours wasted.</p>
            <p className="text-red-400 font-semibold">Staff frustrated.</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-lg text-gray-400 italic">
          Most businesses only find out when it&apos;s too late.
        </p>
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-4">
        <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-4">OUR SOLUTION</p>
      </div>

      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Ubunifu Labs
        </h2>
        <p className="text-xl text-gray-600 mt-4">
          Your dedicated IT partner, preventing problems before they happen.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-teal-50 rounded-3xl p-8 md:p-10 border border-teal-100 relative overflow-hidden group hover:shadow-lg transition">
          <div className="absolute top-4 right-4 w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
            1
          </div>
          <Wrench className="w-10 h-10 text-teal-600 mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Fix It</h3>
          <p className="text-gray-600 text-lg mb-6">
            We assess, solve &amp; implement. Fast.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Website", "Email", "Networks", "Systems", "Hardware"].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-sm font-medium text-teal-700 bg-teal-100 px-3 py-1.5 rounded-lg"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        <div className="bg-teal-600 rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:shadow-lg transition">
          <div className="absolute top-4 right-4 w-10 h-10 bg-white text-teal-600 rounded-full flex items-center justify-center font-bold text-lg">
            2
          </div>
          <Shield className="w-10 h-10 text-teal-200 mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">Maintain It</h3>
          <p className="text-teal-100 text-lg mb-6">
            Monthly IT team. Always on.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Monitoring", "Updates", "Prevention", "Upgrades"].map((tag) => (
              <span
                key={tag}
                className="text-sm font-medium text-teal-800 bg-teal-200 px-3 py-1.5 rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Assess",
      description:
        "We visit your business, review all your systems, and find the weak spots.",
      icon: Search,
    },
    {
      number: "02",
      title: "Fix",
      description:
        "We build a clear plan, explain it in plain language, and implement it.",
      icon: Wrench,
    },
    {
      number: "03",
      title: "Maintain",
      description:
        "For monthly clients, we stay — monitoring, updating, and preventing problems.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-4">
            HOW IT WORKS
          </p>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            We make IT simple.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="text-7xl font-bold text-teal-100 mb-6">
                {step.number}
              </div>
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <step.icon className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-teal-300 to-gray-200 -z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Prevention First",
      description: "We find problems before they cost you.",
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "You get the same people every time.",
    },
    {
      icon: Clock,
      title: "Built for SMEs",
      description: "Prices that fit small business budgets.",
    },
    {
      icon: MessageCircle,
      title: "Plain Language",
      description: "No jargon. Just clear, honest work.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-4">
            WHY UBUNIFU LABS
          </p>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            We do IT differently.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-teal-50 hover:border-teal-200 border border-gray-100 transition group"
            >
              <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-teal-600 transition">
                <benefit.icon className="w-7 h-7 text-teal-600 group-hover:text-white transition" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhoWeServe = () => {
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
        <div className="text-center mb-4">
          <p className="text-teal-400 font-semibold text-sm uppercase tracking-widest mb-4">
            WHO WE SERVE
          </p>
        </div>
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Small &amp; Medium
          </h2>
          <p className="text-3xl md:text-5xl font-extrabold text-teal-400">
            Businesses in Rwanda.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((item) => (
              <div
                key={item.label}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center hover:bg-white/10 transition group"
              >
                <item.icon className="w-8 h-8 text-teal-400 mx-auto mb-3" />
                <p className="text-white text-sm font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg">
            5 – 200 employees. Kigali-based, expanding nationally.
          </p>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => (
  <section className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-4">
        <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-4">
          SIMPLE PRICING
        </p>
      </div>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
          No surprises. Just results.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition">
          <Wrench className="w-10 h-10 text-teal-600 mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-1">Quick Fix</h3>
          <p className="text-3xl font-extrabold text-teal-600 mb-6">
            From 150,000 RWF
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3 text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <span>One-time problem</span>
            </li>
            <li className="flex items-start gap-3 text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <span>Assessed &amp; fixed</span>
            </li>
            <li className="flex items-start gap-3 text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <span>Clear report after</span>
            </li>
          </ul>
          <Link
            href="/new"
            className="inline-block w-full text-center bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-xl transition"
          >
            Book a Fix
          </Link>
        </div>

        <div className="bg-white rounded-2xl border-2 border-teal-500 p-8 shadow-lg relative">
          <div className="absolute top-0 right-0 bg-teal-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-xl flex items-center gap-1">
            <Star className="w-3 h-3" /> Most Popular
          </div>
          <Zap className="w-10 h-10 text-teal-600 mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            System Upgrade
          </h3>
          <p className="text-3xl font-extrabold text-teal-600 mb-6">
            Custom quote
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3 text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <span>Full system overhaul</span>
            </li>
            <li className="flex items-start gap-3 text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <span>Modern tools installed</span>
            </li>
            <li className="flex items-start gap-3 text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <span>Training included</span>
            </li>
            <li className="flex items-start gap-3 text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <span>System updates included</span>
            </li>
          </ul>
          <Link
            href="/new"
            className="inline-block w-full text-center bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Get a Quote
          </Link>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition">
          <Shield className="w-10 h-10 text-teal-600 mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-1">Monthly Care</h3>
          <p className="text-3xl font-extrabold text-teal-600 mb-6">
            From 200,000 RWF/mo
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3 text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <span>Dedicated IT coverage</span>
            </li>
            <li className="flex items-start gap-3 text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <span>Proactive monitoring</span>
            </li>
            <li className="flex items-start gap-3 text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <span>Early problem solving</span>
            </li>
          </ul>
          <Link
            href="/new"
            className="inline-block w-full text-center bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Get Covered
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
        Ready to fix your tech?
      </h2>
      <p className="text-xl text-gray-600 mb-8">
        Don&apos;t wait until something breaks. Let&apos;s talk today.
      </p>
      <Link
        href="/new"
        className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg py-4 px-8 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl"
      >
        Get Help Now
        <ArrowRight className="ml-2 w-5 h-5" />
      </Link>
    </div>
  </section>
);

const UbunifuLabsPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Problem />
        <Solution />
        <HowItWorks />
        <WhyChooseUs />
        <WhoWeServe />
        <Pricing />
        <Contact />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default UbunifuLabsPage;
