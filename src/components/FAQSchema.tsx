const faqs = [
  {
    question: "What types of printing services does Treebox Manila offer?",
    answer:
      "We offer a comprehensive range of offset lithography printing services including custom boxes, paper bags, calendars, posters, flyers, brochures, restaurant menus, letterheads, envelopes, stickers, labels, business cards, invitations, and certificates.",
  },
  {
    question: "What is the typical turnaround time for an order?",
    answer:
      "Standard orders typically take 5 to 7 working days, while rush orders can be accommodated in 3 to 5 working days. We always provide a clear timeline during the quotation process.",
  },
  {
    question: "Do you have a minimum order quantity (MOQ)?",
    answer:
      "MOQ varies by product. Custom boxes typically start at 500 pieces, while flyers can start at 1,000 pieces. Contact us with your specific requirements for a quotation.",
  },
  {
    question: "Can I request a custom size or design that is not listed on your website?",
    answer:
      "Absolutely. Most of our work involves custom specifications. Whether you need a non-standard box size, special paper stock, unique finishing like embossing or foil stamping, we can accommodate it.",
  },
  {
    question: "What file formats do you accept for print-ready artwork?",
    answer:
      "We accept high-resolution PDF files (preferred), as well as AI, PSD, INDD, and high-resolution JPG/PNG files. Artwork should be at least 300 DPI, in CMYK color mode, with 3mm bleed.",
  },
  {
    question: "Do you offer free quotations and samples?",
    answer:
      "Yes, we provide free, no-obligation quotations for all printing inquiries. We can also arrange sample viewing at our Quezon City office.",
  },
  {
    question: "What areas do you deliver to?",
    answer:
      "We deliver across Metro Manila including Quezon City, Makati, Pasig, Mandaluyong, and more. We also ship nationwide via courier.",
  },
  {
    question: "How do I place an order with Treebox Manila?",
    answer:
      "You can call us at +63 2 8123 4567, email treeboxmanila@gmail.com, or use our website contact form. We guide you through every step from quotation to delivery.",
  },
];

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
