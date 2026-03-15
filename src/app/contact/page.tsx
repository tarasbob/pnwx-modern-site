import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Pacific Northwest X-Ray Inc. for equipment inquiries, pricing, and support. Call 503-667-3000 or toll free 800-827-9729. Located in Gresham, Oregon.",
  keywords: [
    "contact Pacific Northwest X-Ray",
    "X-Ray equipment inquiry",
    "radiology equipment sales",
    "Gresham Oregon medical equipment",
  ],
  openGraph: {
    title: "Contact Us | Pacific Northwest X-Ray Inc.",
    description:
      "Get in touch with our knowledgeable team for equipment inquiries, pricing, and expert guidance.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
