export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What if I don’t like the website or app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you decide not to proceed after reviewing the demo, you don’t pay. We keep the work, and you can always claim it later if you decide to move forward.",
      },
    },
    {
      "@type": "Question",
      name: "Who owns the code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If the solution is custom-built and you pay for it, the code belongs entirely to you. If you don’t proceed with payment, the code remains the property of Ubunifu Labs, whether templates are used or not.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most projects take two weeks or more, depending on complexity, features, and agreement timelines. Delivery timelines are agreed upon before starting.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer hosting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We do not provide hosting directly, but we work with trusted hosting providers and help clients choose the right option. Customers also get free SSL certificates and security services through Techinika.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer website management and support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer optional website management services including updates, security monitoring, content updates, and performance improvements.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with education, media, government, non-profits, startups, SMEs, and other organizations that need reliable digital solutions.",
      },
    },
  ],
};
