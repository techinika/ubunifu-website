"use client";

import Head from "next/head";
import Link from "next/link";
import { Navbar } from "./Nav";
import Footer from "./Footer";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  isOurOwn: boolean;
};

const projectData: Project[] = [
  {
    id: 1,
    title: "Technika Management System",
    description:
      "Developed a comprehensive internal SaaS platform for managing client engagements, resources, and project lifecycles.",
    tags: ["SaaS", "Internal Tool", "Enterprise"],
    isOurOwn: true,
  },
  {
    id: 2,
    title: "E-Commerce Platform Modernization",
    description:
      "Led the complete refactoring of a high-traffic e-commerce site, focusing on performance, scalability, and modern UI/UX.",
    tags: ["Client Work", "React", "Cloud Infra"],
    isOurOwn: false,
  },
  {
    id: 3,
    title: "FinTech API Integration Service",
    description:
      "Consulting and development to securely integrate multiple external banking APIs into a client’s digital wallet application.",
    tags: ["Consulting", "Security", "APIs"],
    isOurOwn: false,
  },
];

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
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col h-full hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
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
            <p className="text-gray-600 mb-4 flex-grow">
              {project.description}
            </p>
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
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 bg-gray-50 border-t border-gray-200">
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
        Get in Touch Now
      </Link>
    </div>
  </section>
);

const UbunifuLabsPage = () => {
  return (
    <div>
      <Navbar />

      <main>
        <Services />

        <Projects projects={projectData} />

        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default UbunifuLabsPage;
