"use client";

import { ComponentType, SVGProps } from "react";
import { Navbar } from "./Nav";
import Footer from "./Footer";
import {
  BriefcaseIcon,
  CalendarIcon,
  CogIcon,
  SparklesIcon,
} from "@heroicons/react/16/solid";
import { Project } from "@/types/main";
import Link from "next/link";

const DetailBlock = ({
  title,
  value,
  icon: Icon,
}: {
  title: string;
  value: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}) => (
  <div className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
    <Icon
      className="h-6 w-6 text-teal-600 shrink-0 mt-0.5"
      aria-hidden="true"
    />
    <div>
      <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
        {title}
      </p>
      <p className="text-base font-semibold text-gray-800">{value}</p>
    </div>
  </div>
);

type ProjectTypeProps = {
  project: Project | undefined;
};

export const ProjectDetailPage = ({ project }: ProjectTypeProps) => {
  const accentColor = "bg-teal-600";
  const accentTextColor = "text-teal-600";

  if (!project) {
    return (
      <div>
        <Navbar />
        <main className="bg-gray-50 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
            <p className="text-gray-600">The project you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/" className="text-teal-600 hover:underline mt-4 inline-block">
              Return to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <main className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className={`inline-block text-sm font-semibold px-4 py-1.5 rounded-full mb-3 
                ${
                  project?.status === "Ongoing"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}
            >
              Status: {project?.status}
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
              {project?.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {project?.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            <DetailBlock
              title="Client/Focus"
              value={project?.client || "Confidential Client"}
              icon={BriefcaseIcon}
            />
            <DetailBlock
              title="Duration"
              value={project?.duration ?? ""}
              icon={CalendarIcon}
            />
            <DetailBlock
              title="Service Type"
              value={project?.type ?? "Consulting"}
              icon={SparklesIcon}
            />
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-xl shadow-2xl border border-gray-100 mb-16">
            <h2 className={`text-3xl font-bold ${accentTextColor} mb-6`}>
              The Challenge & Solution
            </h2>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <div
                dangerouslySetInnerHTML={{
                  __html: project?.description ?? "<p>No description</p>",
                }}
                className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none!"
              ></div>
            </div>
          </div>

          <div id="technologies" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <CogIcon className="h-7 w-7 text-gray-900 mr-2" />
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-4">
              {project?.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`inline-block ${accentColor} text-white font-medium px-4 py-2 rounded-lg text-sm shadow-md transition duration-300 hover:opacity-90`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <Link
              href={project?.link ?? "#"}
              target="_blank"
              className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-xl w-full mt-10"
            >
              Learn More
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
