import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/pages/ServicesPageContent";

export const metadata: Metadata = {
  title: "Our Printing Services & Products",
  description:
    "Explore our full range of printing services: custom boxes, paper bags, calendars, posters, flyers, brochures, menus, letterheads, stickers, and labels. Direct supplier in Metro Manila.",
  alternates: {
    canonical: "https://treeboxmanila.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
