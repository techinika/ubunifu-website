"use client";

import type { ComponentType, SVGProps } from "react";
import { Navbar } from "./Nav";
import Footer from "./Footer";
import {
  BriefcaseIcon,
  ClockIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  PaperAirplaneIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
const InputField = ({
  id,
  label,
  type = "text",
  icon: Icon,
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  placeholder: string;
}) => (
  <div className="mb-6">
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <div className="relative rounded-md shadow-sm">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input
        type={type}
        name={id}
        id={id}
        required
        className="focus:ring-teal-500 focus:border-teal-500 block w-full pl-10 pr-4 sm:text-sm border-gray-300 rounded-lg p-2.5 transition duration-150"
        placeholder={placeholder}
      />
    </div>
  </div>
);

const ContactPage = () => {
  return (
    <div>
      <Navbar />

      <main className="max-w-7xl mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Let us Build Something Great.
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Fill out the form below to tell us about your project. We typically
            respond within one business day.
          </p>
        </div>

        <div className="bg-white p-8 sm:p-10 rounded-xl shadow-2xl border border-gray-100">
          <form action="#" method="POST" className="space-y-6">
            <fieldset>
              <legend className="text-xl font-semibold text-gray-800 border-b pb-2 mb-6">
                Your Information
              </legend>
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <InputField
                  id="name"
                  label="Full Name"
                  icon={UserIcon}
                  placeholder="Jane Doe"
                />
                <InputField
                  id="email"
                  label="Work Email"
                  type="email"
                  icon={EnvelopeIcon}
                  placeholder="jane.doe@company.com"
                />
                <div className="sm:col-span-2">
                  <InputField
                    id="company"
                    label="Company/Organization (Optional)"
                    icon={BriefcaseIcon}
                    placeholder="Technika Limited"
                  />
                </div>
              </div>
            </fieldset>

            <div className="pt-6"></div>

            <fieldset>
              <legend className="text-xl font-semibold text-gray-800 border-b pb-2 mb-6">
                Project Scope
              </legend>

              <div className="grid grid-cols-1 gap-y-6">
                <InputField
                  id="project_title"
                  label="Project Title / Summary"
                  icon={DocumentTextIcon}
                  placeholder="Mobile App for Inventory Tracking"
                />

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Tell us about your needs
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    required
                    className="focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-lg p-2.5 transition duration-150"
                    placeholder="What problem are you trying to solve? What existing tools do you have?"
                  />
                </div>
              </div>
            </fieldset>

            <div className="pt-6"></div>

            <fieldset>
              <legend className="text-xl font-semibold text-gray-800 border-b pb-2 mb-6">
                Budget & Timeline
              </legend>
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Estimated Budget Range
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <PaperAirplaneIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <select
                      id="budget"
                      name="budget"
                      required
                      className="focus:ring-teal-500 focus:border-teal-500 block w-full pl-10 pr-4 sm:text-sm border-gray-300 rounded-lg p-2.5 transition duration-150 appearance-none"
                    >
                      <option value="">Select a range...</option>
                      <option value="$5k-$20k">$5,000 - $20,000</option>
                      <option value="$20k-$50k">$20,000 - $50,000</option>
                      <option value="$50k+">$50,000+</option>
                      <option value="TBD">Undecided / TBD</option>
                    </select>
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Target Completion
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <ClockIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <select
                      id="timeline"
                      name="timeline"
                      required
                      className="focus:ring-teal-500 focus:border-teal-500 block w-full pl-10 pr-4 sm:text-sm border-gray-300 rounded-lg p-2.5 transition duration-150 appearance-none"
                    >
                      <option value="">Select a timeline...</option>
                      <option value="1-3">1 - 3 Months</option>
                      <option value="3-6">3 - 6 Months</option>
                      <option value="6+">Over 6 Months</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>
              </div>
            </fieldset>

            <div className="pt-8">
              <button
                type="submit"
                className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-lg font-bold rounded-lg shadow-lg text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300 transform hover:scale-[1.01]"
              >
                Send Project Inquiry
              </button>
            </div>

            <p className="text-center text-sm text-gray-500 pt-4">
              We respect your privacy. All information is kept confidential.
            </p>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
