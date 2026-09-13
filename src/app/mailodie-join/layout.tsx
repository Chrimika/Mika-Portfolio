import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mailodie - Adresses Email Professionnelles & Visibilité Google | Cameroun",
  description: "Mailodie offre des adresses email professionnelles, sites web optimisés SEO et visibilité Google pour entreprises camerounaises. Crédibilité digitale garantie. À partir de 40,000 FCFA.",
  keywords: [
    // Service principal
    "mailodie",
    "mailodie cameroun",
    "adresse email professionnelle cameroun",
    "email professionnel cameroun",
    "email entreprise cameroun",
    
    // Services offerts
    "nom de domaine cameroun",
    "site web professionnel cameroun",
    "visibilité google cameroun",
    "référencement google cameroun",
    "SEO cameroun",
    "optimisation SEO cameroun",
    "indexation google cameroun",
    
    // Crédibilité
    "crédibilité entreprise cameroun",
    "présence en ligne cameroun",
    "identité digitale cameroun",
    "image professionnelle cameroun",
    
    // Localisation
    "email professionnel yaoundé",
    "site web yaoundé",
    "SEO yaoundé",
    "référencement yaoundé",
    
    // Cible
    "email entreprise",
    "adresse professionnelle",
    "domaine personnalisé",
    "gmail professionnel",
    "email @votreentreprise.cm",
    
    // Solutions
    "solution digitale cameroun",
    "transformation digitale cameroun",
    "digitalisation entreprise cameroun",
    "communication professionnelle",
  ],
  authors: [{ name: "Mailodie Team" }],
  creator: "Mailodie",
  openGraph: {
    type: "website",
    locale: "fr_CM",
    url: "https://mikamba.cm/mailodie-join",
    siteName: "Mailodie - Votre crédibilité digitale",
    title: "Mailodie - Adresses Email Pro & Visibilité Google | -20% Promo",
    description: "Obtenez des adresses email professionnelles, un site web optimisé et une visibilité Google maximale. Solution facile et accessible pour entreprises camerounaises. Promotion -20% !",
    images: [
      {
        url: "/assets/images/pricing.svg",
        width: 1200,
        height: 630,
        alt: "Mailodie - 3 Packs pour votre crédibilité digitale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mailodie - Email Pro & Visibilité Google | Cameroun",
    description: "Adresses email professionnelles, site web optimisé SEO et visibilité Google pour entreprises camerounaises. Promotion -20% !",
    images: ["/assets/images/pricing.svg"],
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
    canonical: "https://mikamba.cm/mailodie-join",
  },
};

export default function MailodieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* JSON-LD Structured Data pour Mailodie */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Mailodie",
            "description": "Service d'adresses email professionnelles, création de site web et optimisation SEO pour entreprises camerounaises",
            "provider": {
              "@type": "Organization",
              "name": "Mailodie",
              "url": "https://mikamba.cm/mailodie-join",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Yaoundé",
                "addressCountry": "CM"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+237672094167",
                "email": "contact@mikamba.cm",
                "contactType": "Customer Service",
                "areaServed": "CM",
                "availableLanguage": ["French"]
              }
            },
            "serviceType": "Digital Services",
            "areaServed": {
              "@type": "Country",
              "name": "Cameroun"
            },
            "offers": [
              {
                "@type": "Offer",
                "name": "MAILODIE ESSENTIEL",
                "price": "40000",
                "priceCurrency": "XAF",
                "description": "5 adresses email professionnelles, nom de domaine personnalisé, assistance Gmail",
                "availability": "https://schema.org/InStock"
              },
              {
                "@type": "Offer",
                "name": "MAILODIE PREMIUM",
                "price": "96000",
                "priceCurrency": "XAF",
                "description": "Pack Essentiel + page web complète + déploiement en ligne",
                "availability": "https://schema.org/InStock"
              },
              {
                "@type": "Offer",
                "name": "MAILODIE ELITE",
                "price": "200000",
                "priceCurrency": "XAF",
                "description": "Pack Premium + optimisation SEO avancée + indexation Google + visibilité maximale",
                "availability": "https://schema.org/InStock"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "bestRating": "5",
              "ratingCount": "1"
            }
          })
        }}
      />
      {children}
    </>
  );
}
