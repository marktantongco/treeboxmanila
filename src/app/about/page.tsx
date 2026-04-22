import type { Metadata } from "next";
import { AboutPageContent } from "@/components/pages/AboutPageContent";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Treebox Manila Co., established in 1997 as MWC Enterprises. Over 25 years of commitment to excellence in offset lithography printing in Metro Manila.",
  alternates: { canonical: "https://treeboxmanila.com/about" },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
