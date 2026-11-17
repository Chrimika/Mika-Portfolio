import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claude AI Team - 1 mois pour 21,350 FCFA | Souscription",
  description: "Accédez à Claude AI Team pendant 1 mois complet. Le modèle d'IA le plus puissant d'Anthropic avec usage illimité. Paiement facile via Mobile Money (Burkina Faso, Cameroun, Afrique).",
  keywords: [
    "claude ai",
    "claude team",
    "intelligence artificielle",
    "IA burkina faso",
    "IA cameroun",
    "claude afrique",
    "chatgpt alternative",
    "ai assistant",
    "mobile money burkina",
    "orange money",
    "moov money",
  ],
  openGraph: {
    title: "Claude AI Team - 1 mois - 21,350 FCFA",
    description: "Accès complet à Claude AI Team pendant 1 mois. Usage illimité, activation immédiate. Mobile Money accepté (Burkina Faso, Cameroun).",
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ClaudeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
