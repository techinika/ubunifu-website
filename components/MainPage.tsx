"use client";

import Link from "next/link";
import { Navbar } from "./Nav";
import Footer from "./Footer";
import { Project } from "@/types/main";
import { projects } from "@/data/projects";
import FAQSection from "./FAQs";

const Services = () => (
  <section id="services" className="py-24 md:py-36 bg-gray-50">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
        Software solutions that{" "}
        <span className="text-teal-600">drive growth</span>.
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Ubunifu Labs, the software unit of Techinika Limited, provides{" "}
        <b>end-to-end software development, expert consulting</b>, and{" "}
        <b>scalable solutions</b> to turn bold ideas into reliable,
        production-ready technology.
      </p>
    </div>
  </section>
);

const Projects = ({ projects }: { projects: Project[] }) => (
  <section id="projects" className="py-20 md:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Featured Work
      </h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link href={`/${project?.id}`} key={project.id}>
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col h-full hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
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
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">{project.summary}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
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

const Contact = () => (
  <section id="contact" className="py-20 bg-gray-100 border-t border-gray-200">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Ready to Start Your Project?
      </h2>
      <p className="text-xl text-gray-600 mb-8">
        Tell us about your challenge. We will craft a robust solution.
      </p>
      <Link
        href="/new"
        className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-xl"
      >
        Discuss Your Project
      </Link>
    </div>
  </section>
);

const ServicePackages = () => (
  <section className="py-20 bg-gray-100 border-t-2 border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
        Our Service Packages
      </h2>
      <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-14">
        We build first. You pay only if you are happy. Transparent pricing, real
        results, zero pressure.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Starter */}
        <div className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Business Starter Website
          </h3>
          <p className="text-gray-600 mb-4">
            Perfect for small businesses that need a professional online
            presence.
          </p>
          <ul className="text-gray-600 space-y-2 mb-6">
            <li>• 1–5 page website</li>
            <li>• Mobile-friendly</li>
            <li>• SEO basics</li>
            <li>• Built before payment</li>
          </ul>
          <p className="font-semibold text-gray-900 mb-4">$300 – $700</p>
          <Link
            href="/new"
            className="inline-block w-full text-center bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-lg"
          >
            Get Started
          </Link>
        </div>

        {/* Growth */}
        <div className="rounded-xl border border-teal-200 p-6 shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Growth Business Website
          </h3>
          <p className="text-gray-600 mb-4">
            Designed to convert visitors into customers.
          </p>
          <ul className="text-gray-600 space-y-2 mb-6">
            <li>• Custom design</li>
            <li>• Blog & analytics</li>
            <li>• Performance & SEO</li>
            <li>• Built before payment</li>
          </ul>
          <p className="font-semibold text-gray-900 mb-4">$800 – $1,500</p>
          <Link
            href="/new"
            className="inline-block w-full text-center bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-lg"
          >
            Request a Demo
          </Link>
        </div>

        {/* Custom Software */}
        <div className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Custom Software & Systems
          </h3>
          <p className="text-gray-600 mb-4">
            For organizations with complex or outdated systems.
          </p>
          <ul className="text-gray-600 space-y-2 mb-6">
            <li>• Internal tools</li>
            <li>• Automation</li>
            <li>• Secure & scalable</li>
            <li>• Phased delivery</li>
          </ul>
          <p className="font-semibold text-gray-900 mb-4">$2,000 – $10,000+</p>
          <Link
            href="/new"
            className="inline-block w-full text-center bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 rounded-lg"
          >
            Discuss Your System
          </Link>
        </div>

        {/* Consulting */}
        <div className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Tech Consulting
          </h3>
          <p className="text-gray-600 mb-4">
            Not sure what you need? We help you decide.
          </p>
          <ul className="text-gray-600 space-y-2 mb-6">
            <li>• System assessment</li>
            <li>• Improvement roadmap</li>
            <li>• Clear recommendations</li>
          </ul>
          <p className="font-semibold text-gray-900 mb-4">$200 – $1,000</p>
          <Link
            href="/new"
            className="inline-block w-full text-center bg-teal-100 hover:bg-teal-200 text-teal-700 font-semibold py-2 rounded-lg"
          >
            Book a Session
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const UbunifuLabsPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Services />
        <ServicePackages />
        <Projects projects={projects} />
        <Contact />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default UbunifuLabsPage;
