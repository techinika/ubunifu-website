export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly can you respond to an IT issue?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For monthly managed IT clients, we typically respond within 1-2 hours during business hours. Urgent issues get priority response. For one-time fix requests, we schedule a diagnostic within 24 hours.",
      },
    },
    {
      "@type": "Question",
      name: "What if the problem can't be fixed remotely?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If a problem requires on-site attention, we come to your location in Kigali. Remote diagnosis always comes first so we arrive prepared with the right tools and parts to fix the issue in one visit.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with businesses outside Kigali?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. While our base is Kigali, we support businesses across Rwanda. Remote monitoring and support work anywhere with internet. For on-site needs, we coordinate visits based on scheduling and urgency.",
      },
    },
    {
      "@type": "Question",
      name: "What if I only need help with one specific problem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That is exactly what our one-time fix service is for. You tell us the problem, we assess it, give you a clear quote, and fix it. No long-term commitment, no monthly fees.",
      },
    },
    {
      "@type": "Question",
      name: "How does monthly managed IT pricing work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Monthly pricing is based on the size of your business and the complexity of your systems. We start with a full assessment, then give you a fixed monthly rate. No surprise bills, no hidden costs.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if you don't fix the problem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We do not consider a job done until the problem is actually solved. If an issue persists after our fix, we come back at no extra charge. Your technology working properly is our only measure of success.",
      },
    },
  ],
};
