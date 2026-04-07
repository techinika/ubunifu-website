"use client";

import Link from "next/link";
import { Navbar } from "./Nav";
import Footer from "./Footer";
import { Project } from "@/types/main";
import { projects } from "@/data/projects";
import FAQSection from "./FAQs";
import {
  Code2,
  Shield,
  TrendingUp,
  Users,
  Clock,
  Headphones,
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  Rocket,
  Settings,
  Globe,
} from "lucide-react";

const Hero = () => (
  <section className="relative py-24 md:py-36 bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
          Trusted by 50+ Businesses in Rwanda & Beyond
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          Software Solutions That{" "}
          <span className="text-teal-400">Drive Real Growth</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
          Ubunifu Labs is the software unit of{" "}
          <strong>Techinika Limited</strong>. We build custom software, provide
          IT support, and help businesses数字化 transform — without the cost of
          an in-house team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/new"
            className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white font-bold text-lg py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold text-lg py-4 px-8 rounded-xl transition-all duration-300 border border-white/20"
          >
            Our Services
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section className="py-12 bg-teal-600">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-3xl md:text-4xl font-bold text-white">50+</div>
          <div className="text-teal-100 text-sm mt-1">Projects Delivered</div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-white">3+</div>
          <div className="text-teal-100 text-sm mt-1">Years Experience</div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-white">99%</div>
          <div className="text-teal-100 text-sm mt-1">Client Satisfaction</div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-white">24/7</div>
          <div className="text-teal-100 text-sm mt-1">Support Available</div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description:
        "Tailor-made applications built from scratch to solve your unique business challenges.",
      tags: ["Web Apps", "Mobile Apps", "APIs", "SaaS"],
    },
    {
      icon: Globe,
      title: "Website Development",
      description:
        "Professional, SEO-optimized websites that convert visitors into customers.",
      tags: ["E-commerce", "Corporate", "Landing Pages", "CMS"],
    },
    {
      icon: Shield,
      title: "IT Security & Consulting",
      description:
        "Protect your business with security audits, SSL setup, and compliance guidance.",
      tags: ["Security Audit", "SSL", "Compliance", "Training"],
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      description:
        "Modernize outdated systems and workflows for better efficiency and scalability.",
      tags: ["System Migration", "Automation", "Cloud", "Integration"],
    },
    {
      icon: Headphones,
      title: "IT Support & Outsourcing",
      description:
        "Full technical support for businesses without an IT team. We handle everything.",
      tags: ["Help Desk", "Maintenance", "Monitoring", "Training"],
    },
    {
      icon: Lightbulb,
      title: "Tech Consulting",
      description:
        "Expert guidance on technology decisions, architecture, and roadmap planning.",
      tags: ["Strategy", "Architecture", "Audits", "Roadmap"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From custom development to ongoing IT support — we provide
            end-to-end technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-teal-500 transition-colors">
                  <service.icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ITSupport = () => (
  <section className="py-24 bg-gradient-to-r from-teal-600 to-teal-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Headphones className="w-4 h-4" />
            IT Outsourcing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don&apos;t Have an IT Team? We&apos;ll Be Yours.
          </h2>
          <p className="text-lg text-teal-100 mb-8">
            Small and medium businesses often can&apos;t justify a full in-house
            IT department. We provide comprehensive IT support at a fraction of
            the cost — with predictable monthly pricing.
          </p>
          <div className="space-y-4">
            {[
              "24/7 Help Desk Support",
              "System Monitoring & Maintenance",
              "Cloud Infrastructure Management",
              "Data Backup & Disaster Recovery",
              "Employee IT Training",
              "Vendor Management",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-white">
                <CheckCircle2 className="w-5 h-5 text-teal-300 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <Link
            href="/new"
            className="inline-flex items-center justify-center bg-white text-teal-700 font-bold text-lg py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl mt-8"
          >
            Get IT Support Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
        <div className="hidden lg:block">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="space-y-6">
              <div className="bg-white/10 rounded-xl p-6">
                <h4 className="font-semibold text-white mb-2">Basic Support</h4>
                <p className="text-teal-100 text-sm mb-3">
                  For businesses with 1-10 employees
                </p>
                <div className="text-3xl font-bold text-white">
                  $200
                  <span className="text-lg font-normal text-teal-200">
                    /month
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Growth Plan
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  For businesses with 11-50 employees
                </p>
                <div className="text-3xl font-bold text-teal-600">
                  $500
                  <span className="text-lg font-normal text-gray-500">
                    /month
                  </span>
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 border-2 border-teal-300">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-semibold text-white">Enterprise</h4>
                  <span className="text-xs bg-teal-500 text-white px-2 py-0.5 rounded-full">
                    Popular
                  </span>
                </div>
                <p className="text-teal-100 text-sm mb-3">
                  For businesses with 50+ employees
                </p>
                <div className="text-3xl font-bold text-white">Custom</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "We Build First, You Pay After",
      description:
        "We deliver a working demo before you pay a dime. No risk, no pressure.",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description:
        "8+ years delivering software solutions across Rwanda and East Africa.",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description:
        "We agree on timelines upfront and stick to them. No endless revisions.",
    },
    {
      icon: Settings,
      title: "Post-Launch Support",
      description:
        "We don't disappear after launch. We're here for updates, fixes, and scaling.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Ubunifu Labs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine technical expertise with business understanding to
            deliver solutions that actually work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-teal-600" />
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

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We learn about your business, challenges, and goals.",
    },
    {
      number: "02",
      title: "Proposal",
      description: "We present a custom solution with transparent pricing.",
    },
    {
      number: "03",
      title: "Development",
      description: "We build your solution with regular progress updates.",
    },
    {
      number: "04",
      title: "Launch",
      description: "We deploy, test, and train your team on the new system.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A simple, transparent process designed to deliver results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-bold text-teal-100 absolute -top-4 -left-2">
                {step.number}
              </div>
              <div className="pt-8 pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-teal-300 to-gray-200 -z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = ({ projects }: { projects: Project[] }) => (
  <section id="projects" className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Featured Work
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A selection of projects we&apos;ve delivered for businesses across
          various industries.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link href={`/${project?.id}`} key={project.id}>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col h-full hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
              <div className="mb-4">
                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full 
                ${
                  project.isOurOwn
                    ? "bg-teal-100 text-teal-700"
                    : "bg-indigo-100 text-indigo-700"
                }`}
                >
                  {project.isOurOwn ? "Our Creation" : "Client Project"}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">{project.summary}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const ServicePackages = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Service Packages
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Transparent pricing with no hidden costs. Choose what fits your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition bg-white">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Starter Website
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Perfect for small businesses needing a professional online presence.
          </p>
          <ul className="text-gray-600 space-y-2 mb-6 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-500" /> 1–5 page
              website
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-500" /> Mobile-friendly
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-500" /> SEO basics
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-500" /> Built before
              payment
            </li>
          </ul>
          <p className="font-bold text-gray-900 text-2xl mb-4">$300 – $700</p>
          <Link
            href="/new"
            className="inline-block w-full text-center bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg"
          >
            Get Started
          </Link>
        </div>

        <div className="rounded-2xl border-2 border-teal-500 p-6 shadow-lg transition bg-white relative">
          <div className="absolute top-0 right-0 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
            Popular
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Growth Website
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Designed to convert visitors into customers with advanced features.
          </p>
          <ul className="text-gray-600 space-y-2 mb-6 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-500" /> Custom design
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-500" /> Blog &
              analytics
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-500" /> Performance &
              SEO
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-500" /> Built before
              payment
            </li>
          </ul>
          <p className="font-bold text-gray-900 text-2xl mb-4">$800 – $1,500</p>
          <Link
            href="/new"
            className="inline-block w-full text-center bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg"
          >
            Request Demo
          </Link>
        </div>

        <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition bg-white">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Custom Software
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            For organizations with complex needs or outdated systems.
          </p>
          <ul className="text-gray-600 space-y-2 mb-6 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-500" /> Internal tools
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-500" /> Automation
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-500" /> Secure &
              scalable
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-500" /> Phased delivery
            </li>
          </ul>
          <p className="font-bold text-gray-900 text-2xl mb-4">
            $2,000 – $10,000+
          </p>
          <Link
            href="/new"
            className="inline-block w-full text-center bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-lg"
          >
            Discuss System
          </Link>
        </div>

        <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition bg-white">
          <h3 className="text-xl font-bold text-gray-900 mb-2">IT Support</h3>
          <p className="text-gray-600 text-sm mb-4">
            Ongoing technical support for businesses without IT teams.
          </p>
          <ul className="text-gray-600 space-y-2 mb-6 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-500" /> 24/7 Help Desk
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-500" /> System
              monitoring
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-500" /> Cloud
              management
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-500" /> Monthly
              retainer
            </li>
          </ul>
          <p className="font-bold text-gray-900 text-2xl mb-4">$200+/month</p>
          <Link
            href="/new"
            className="inline-block w-full text-center bg-teal-100 hover:bg-teal-200 text-teal-700 font-semibold py-3 rounded-lg"
          >
            Book Session
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 bg-gray-900">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Ready to Transform Your Business?
      </h2>
      <p className="text-lg text-gray-300 mb-8">
        Tell us about your challenge. We&apos;ll craft a robust solution.
      </p>
      <Link
        href="/new"
        className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white font-bold text-lg py-4 px-8 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl"
      >
        Discuss Your Project
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
        <Hero />
        <Stats />
        <Services />
        <ITSupport />
        <WhyChooseUs />
        <Process />
        <Projects projects={projects} />
        <ServicePackages />
        <Contact />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default UbunifuLabsPage;
