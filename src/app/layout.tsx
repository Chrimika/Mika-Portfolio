import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Montserrat } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Mika MBA - Développeur Full Stack | Yaoundé, Cameroun",
  description: "Développeur Full Stack basé à Yaoundé, Cameroun. Expert en React, React Native, TypeScript, Node.js. Création d'applications web et mobile professionnelles.",
  keywords: [
    // Général
    "développeur cameroun",
    "développeur yaoundé",
    "informaticien cameroun",
    "programmeur cameroun",
    
    // Spécialités
    "développeur full stack cameroun",
    "développeur react cameroun",
    "développeur react native cameroun",
    "développeur typescript cameroun",
    "développeur node.js cameroun",
    "développeur mobile cameroun",
    "développeur web cameroun",
    
    // Localisation
    "développeur yaoundé",
    "informaticien yaoundé",
    "programmeur yaoundé",
    "freelance développeur cameroun",
    
    // Services
    "création application mobile cameroun",
    "création site web cameroun",
    "développement logiciel cameroun",
    "application sur mesure cameroun",
    
    // Technologies
    "react developer cameroon",
    "typescript developer cameroon",
    "firebase developer cameroon",
    "next.js developer cameroon",
  ],
  authors: [{ name: "Mika MBA" }],
  creator: "Mika MBA",
  openGraph: {
    type: "website",
    locale: "fr_CM",
    url: "https://mikamba.cm",
    siteName: "Mika MBA Portfolio",
    title: "Mika MBA - Développeur Full Stack | Yaoundé, Cameroun",
    description: "Développeur Full Stack expert en React, React Native et TypeScript. Création d'applications web et mobile professionnelles au Cameroun.",
    images: [
      {
        url: "/assets/images/Mika.jpg",
        width: 1200,
        height: 630,
        alt: "Mika MBA - Développeur Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mika MBA - Développeur Full Stack | Yaoundé, Cameroun",
    description: "Développeur Full Stack expert en React, React Native et TypeScript au Cameroun.",
    images: ["/assets/images/Mika.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://mikamba.cm",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* JSON-LD Structured Data pour Mika MBA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mika MBA",
              "jobTitle": "Développeur Full Stack",
              "description": "Développeur Full Stack expert en React, React Native, TypeScript et Node.js basé à Yaoundé, Cameroun",
              "url": "https://mikamba.cm",
              "image": "https://mikamba.cm/assets/images/Mika.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Yaoundé",
                "addressCountry": "CM"
              },
              "knowsAbout": [
                "React",
                "React Native",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Firebase",
                "Next.js",
                "Développement Mobile",
                "Développement Web"
              ],
              "sameAs": [
                "https://github.com/Chrimika",
                "https://linkedin.com/in/mikamba"
              ]
            })
          }}
        />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
