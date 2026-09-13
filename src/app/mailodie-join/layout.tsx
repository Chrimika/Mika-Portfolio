import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mailodie - Crédibilité et Visibilité Google pour Entreprises",
  description: "Solution facile et accessible pour donner de la crédibilité et la visibilité Google aux entreprises. Emails professionnels, site web optimisé SEO et présence en ligne. Promotion -20% pendant 96h !",
  openGraph: {
    title: "Mailodie - Votre crédibilité digitale",
    description: "Donnez à votre entreprise la crédibilité qu'elle mérite. Emails pro, site web, SEO et visibilité Google en quelques jours.",
    images: ["/assets/images/background.png"],
  },
};

export default function MailodieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
