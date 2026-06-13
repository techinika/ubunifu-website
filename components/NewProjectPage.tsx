"use client";

import { useState } from "react";
import type { ComponentType, SVGProps } from "react";
import { Navbar } from "./Nav";
import Footer from "./Footer";
import {
  Briefcase,
  Clock,
  FileText,
  Mail,
  Send,
  User,
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  Wrench,
} from "lucide-react";
import Link from "next/link";

const InputField = ({
  id,
  label,
  type = "text",
  icon: Icon,
  placeholder,
  value,
  onChange,
}: {
  id: string;
  label: string;
  type?: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1.5">
      {label}
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type={type}
        name={id}
        id={id}
        value={value}
        onChange={onChange}
        required
        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200 text-gray-900 placeholder-gray-400"
        placeholder={placeholder}
      />
    </div>
  </div>
);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project_title: "",
    description: "",
    budget: "",
    timeline: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMessage({
          type: "success",
          text: "Your request has been sent successfully! We'll be in touch within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          project_title: "",
          description: "",
          budget: "",
          timeline: "",
        });
      } else {
        setMessage({
          type: "error",
          text: "Something went wrong. Please try again.",
        });
      }
    } catch {
      setMessage({
        type: "error",
        text: "Failed to send your request. Please check your connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    "We diagnose before we quote — no surprises",
    "One-time fixes with no ongoing commitment",
    "Monthly managed IT for continuous support",
    "Fast response times for urgent issues",
    "Based in Kigali, serving all of Rwanda",
  ];

  return (
    <div>
      <Navbar />

      <main className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Need IT Support? Let&apos;s Talk.
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tell us about your technology problem. We&apos;ll assess it and
              get back to you within 24 hours with a solution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Wrench className="w-6 h-6" />
                  Why Ubunifu Labs
                </h2>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal-300 shrink-0 mt-0.5" />
                      <span className="text-teal-50">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-teal-100 text-sm">Prefer to email us directly?</p>
                  <Link href="mailto:info@techinika.com" className="text-white font-semibold hover:underline">
                    info@techinika.com
                  </Link>
                </div>
              </div>

              <div className="mt-6 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">What Happens Next</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold text-sm">1</div>
                    <div>
                      <p className="font-medium text-gray-900">Within 24 hours</p>
                      <p className="text-sm text-gray-500">We review your issue</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold text-sm">2</div>
                    <div>
                      <p className="font-medium text-gray-900">We diagnose & quote</p>
                      <p className="text-sm text-gray-500">Clear explanation before any work</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold text-sm">3</div>
                    <div>
                      <p className="font-medium text-gray-900">Problem resolved</p>
                      <p className="text-sm text-gray-500">We fix it and make sure it stays fixed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <User className="w-5 h-5 text-teal-600" />
                      Your Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <InputField
                        id="name"
                        label="Full Name"
                        icon={User}
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <InputField
                        id="email"
                        label="Work Email"
                        type="email"
                        icon={Mail}
                        placeholder="jane@company.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <InputField
                        id="company"
                        label="Company (Optional)"
                        icon={Briefcase}
                        placeholder="Your Company Ltd"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-teal-600" />
                      Problem Details
                    </h3>
                    <div className="space-y-4">
                      <InputField
                        id="project_title"
                        label="Brief Title"
                        icon={FileText}
                        placeholder="Website keeps going down / Email not sending"
                        value={formData.project_title}
                        onChange={handleChange}
                      />
                      <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Describe the Problem
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          rows={5}
                          value={formData.description}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200 text-gray-900 placeholder-gray-400"
                          placeholder="What is not working? When did it start? What have you tried so far?"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-teal-600" />
                      Service Preference
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Service Type
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Send className="h-5 w-5 text-gray-400" />
                          </div>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200 appearance-none bg-white"
                          >
                            <option value="">Select a service...</option>
                            <option value="One-Time Fix">One-Time Fix</option>
                            <option value="Monthly Managed IT (Basic)">Monthly Managed IT (Basic)</option>
                            <option value="Monthly Managed IT (Growth)">Monthly Managed IT (Growth)</option>
                            <option value="Monthly Managed IT (Enterprise)">Monthly Managed IT (Enterprise)</option>
                            <option value="Not Sure Yet">Not Sure Yet</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Urgency
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Clock className="h-5 w-5 text-gray-400" />
                          </div>
                          <select
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200 appearance-none bg-white"
                          >
                            <option value="">Select urgency...</option>
                            <option value="ASAP">ASAP (Everything is down)</option>
                            <option value="This Week">This Week</option>
                            <option value="This Month">This Month</option>
                            <option value="Just Exploring">Just Exploring Options</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex justify-center items-center px-6 py-4 border border-transparent text-lg font-bold rounded-xl shadow-lg text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Request
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>

                  {message && (
                    <div className={`p-4 rounded-xl text-center ${
                      message.type === "success" ? "bg-teal-50 text-teal-700" : "bg-red-50 text-red-700"
                    }`}>
                      {message.text}
                    </div>
                  )}

                  <p className="text-center text-sm text-gray-500">
                    Your information is kept confidential. We never share your details.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
