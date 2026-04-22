export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://treeboxmanila.com/#business",
    name: "Treebox Manila Co.",
    description:
      "Offset lithography printing service company in Quezon City, Metro Manila. Custom boxes, paper bags, calendars, flyers, brochures, stickers, and more since 1997.",
    url: "https://treeboxmanila.com",
    telephone: "+63-2-8123-4567",
    email: "treeboxmanila@gmail.com",
    foundingDate: "1997",
    priceRange: "$$",
    image: "https://treeboxmanila.com/images/treebox-logo.png",
    logo: "https://treeboxmanila.com/images/treebox-logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Quezon City",
      addressLocality: "Quezon City",
      addressRegion: "Metro Manila",
      postalCode: "1100",
      addressCountry: "PH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 14.676,
      longitude: 121.0437,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "17:00",
    },
    areaServed: [
      { "@type": "City", name: "Quezon City" },
      { "@type": "City", name: "Makati" },
      { "@type": "City", name: "Pasig" },
      { "@type": "City", name: "Mandaluyong" },
      { "@type": "City", name: "San Juan" },
      { "@type": "City", name: "Caloocan" },
      { "@type": "City", name: "Valenzuela" },
      { "@type": "AdministrativeArea", name: "Metro Manila" },
    ],
    sameAs: [
      "https://www.instagram.com/treeboxmanila",
      "https://www.youtube.com/@treeboxmanila",
      "https://www.threads.com/@treeboxmanila",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Printing Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Custom Boxes",
          description: "Shoe Box, Pizza Box, Cake Box, Gift Box, Food Box, Corrugated Box",
        },
        {
          "@type": "OfferCatalog",
          name: "Paper Bags",
          description: "Customized Shopping Bags, Kraft Paper Bags, Luxury Bags",
        },
        {
          "@type": "OfferCatalog",
          name: "Calendars",
          description: "Wall Calendars, Desk Calendars, Company Calendars",
        },
        {
          "@type": "OfferCatalog",
          name: "Posters",
          description: "Custom Printed Posters, Event Posters, Advertising Posters",
        },
        {
          "@type": "OfferCatalog",
          name: "Flyers & Brochures",
          description:
            "Real Estate Flyers, Medical Flyers, Travel Brochures, Tri-Fold Brochures",
        },
        {
          "@type": "OfferCatalog",
          name: "Menus & Stationery",
          description: "Restaurant Menus, Letterheads, Envelopes",
        },
        {
          "@type": "OfferCatalog",
          name: "Stickers & Labels",
          description: "Product Labels, Brand Stickers, Packaging Labels",
        },
        {
          "@type": "OfferCatalog",
          name: "Other Printing",
          description:
            "Calling Cards, Invitations, Certificates, Packaging Materials",
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
