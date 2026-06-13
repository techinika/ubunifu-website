"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How quickly can you respond to an IT issue?",
    answer:
      "For monthly managed IT clients, we typically respond within 1-2 hours during business hours. Urgent issues get priority response. For one-time fix requests, we schedule a diagnostic within 24 hours.",
  },
  {
    question: "What if the problem can't be fixed remotely?",
    answer:
      "If a problem requires on-site attention, we come to your location in Kigali. Remote diagnosis always comes first so we arrive prepared with the right tools and parts to fix the issue in one visit.",
  },
  {
    question: "Do you work with businesses outside Kigali?",
    answer:
      "Yes. While our base is Kigali, we support businesses across Rwanda. Remote monitoring and support work anywhere with internet. For on-site needs, we coordinate visits based on scheduling and urgency.",
  },
  {
    question: "What if I only need help with one specific problem?",
    answer:
      "That is exactly what our one-time fix service is for. You tell us the problem, we assess it, give you a clear quote, and fix it. No long-term commitment, no monthly fees.",
  },
  {
    question: "How does monthly managed IT pricing work?",
    answer:
      "Monthly pricing is based on the size of your business and the complexity of your systems. We start with a full assessment, then give you a fixed monthly rate. No surprise bills, no hidden costs.",
  },
  {
    question: "What happens if you don't fix the problem?",
    answer:
      "We do not consider a job done until the problem is actually solved. If an issue persists after our fix, we come back at no extra charge. Your technology working properly is our only measure of success.",
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
