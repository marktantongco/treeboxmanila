import type { Metadata } from "next";
import { HomePageContent } from "@/components/pages/HomePageContent";

export const metadata: Metadata = {
  title: "Treebox Manila Co. — Commercial Printing Services in Metro Manila",
  description:
    "Treebox Manila Co. is a direct supplier of offset lithography printing services since 1997. Custom boxes, paper bags, calendars, posters, flyers, brochures, stickers & more. Quezon City, Metro Manila.",
  openGraph: {
    title: "Treebox Manila Co. — Commercial Printing Services in Metro Manila",
    description:
      "Direct supplier of offset lithography printing since 1997. Custom boxes, paper bags, calendars, posters, flyers & more.",
    url: "https://treeboxmanila.com",
    siteName: "Treebox Manila Co.",
  },
  alternates: {
    canonical: "https://treeboxmanila.com",
  },
};

export default function HomePage() {
  return <HomePageContent />;
}
