"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What if I don’t like the website or app?",
    answer:
      "If you decide not to proceed after reviewing the demo, you don’t pay. We keep the work, and you can always claim it later if you decide to move forward.",
  },
  {
    question: "Who owns the code?",
    answer:
      "If the solution is custom-built and you pay for it, the code belongs entirely to you. If you don’t proceed with payment, the code remains the property of Ubunifu Labs. This applies whether templates are used or not.",
  },
  {
    question: "How long does it take to build?",
    answer:
      "Most projects take 2 weeks or more, depending on complexity, features, and agreement timelines. We always agree on delivery timelines before starting.",
  },
  {
    question: "Do you offer hosting?",
    answer:
      "We don’t provide hosting directly, but we work with trusted hosting providers and help you choose the right option. Our customers also get free SSL certificates and security services through SecureDot.",
  },
  {
    question: "Do you offer website management and support?",
    answer:
      "Yes. We offer optional website management services, including updates, security monitoring, content updates, and performance improvements.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with education, media, government, non-profits, startups, SMEs, and other organizations that need reliable digital solutions.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-5">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
