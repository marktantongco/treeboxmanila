import type { Metadata } from "next";
import { ContactPageContent } from "@/components/pages/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Treebox Manila Co. for a free quote. Call +63 2 8123 4567 or email treeboxmanila@gmail.com. Located in Quezon City, Metro Manila. Open Monday–Saturday.",
  alternates: {
    canonical: "https://treeboxmanila.com/contact",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
