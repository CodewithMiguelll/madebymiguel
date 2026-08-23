import type { Metadata } from "next";

// Canonical base domain
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://kaimaaa.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Books",
    template: "%s | Books",
  },
  description:
    "Explore the Rise of the Rejects universe—a gritty dystopian superhero sci-fi saga. Read Book 1: UPRISE on Amazon Kindle & Paperback, discover canon lore, and join the author newsletter.",
  keywords: [
    "Rise of the Rejects",
    "Uprise",
    "Chikaima Uwakwe",
    "Books",
    "Science Fiction",
    "Dystopian Sci-Fi",
    "Superhero Fiction",
    "Indie Author",
    "Speculative Fiction",
    "Kindle Unlimited Sci-Fi",
  ],
  authors: [{ name: "Chikaima Uwakwe", url: BASE_URL }],
  creator: "Chikaima Uwakwe",
  publisher: "Northlight Creative Studio",
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: "/books",
  },
  openGraph: {
    title: "Rise of the Rejects: UPRISE — Out Now",
    description:
      "They cast us aside. Now they have to face what they created. Dive into Book 1 of the Rise of the Rejects saga by Chikaima Uwakwe.",
    url: `${BASE_URL}/books`,
    siteName: "Chikaima Uwakwe",
    images: [
      {
        url: "/og-image-books.png",
        width: 1200,
        height: 630,
        alt: "Rise of the Rejects: UPRISE Book Cover & Universe Showcase",
      },
    ],
    locale: "en_US",
    type: "book",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rise of the Rejects: UPRISE — Speculative Fiction",
    description:
      "A high-stakes dystopian sci-fi novel about the overlooked who fight back. Available on Kindle, Kindle Unlimited & Paperback.",
    creator: "@Chikaimaaa",
    images: ["/og-image-books.png"],
  },
};

export default function BooksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org Structured Data for Google Rich Snippets (Book & Person)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Book",
        "@id": `${BASE_URL}/books#uprise`,
        name: "Rise of the Rejects: UPRISE",
        alternateName: "UPRISE",
        author: {
          "@type": "Person",
          name: "Chikaima Uwakwe",
          url: BASE_URL,
        },
        genre: ["Science Fiction", "Dystopian", "Superhero Fiction"],
        inLanguage: "en",
        bookFormat: "https://schema.org/EBook",
        description:
          "In a world partitioned by privilege and power, the forgotten outcasts of the Lowers ignite a rebellion against the Upper tier.",
        publisher: {
          "@type": "Organization",
          name: "Northlight Creative Studio",
        },
        url: "https://www.amazon.com/dp/B0DGBQ8X7Z", // Your Amazon book URL
      },
      {
        "@type": "Person",
        "@id": `${BASE_URL}/#author`,
        name: "Chikaima Uwakwe",
        jobTitle: "Author & Product Designer",
        url: BASE_URL,
        sameAs: [
          "https://x.com/your_handle", // Your X profile
          "https://www.amazon.com/author/chikaimauwakwe", // Your Amazon Author Central URL
        ],
      },
    ],
  };

  return (
    <>
      {/* Inject Structured Data for SEO / Google Knowledge Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
