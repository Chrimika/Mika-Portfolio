"use client";

import React, { useState } from "react";
import { Check, Zap, Shield, Clock } from "lucide-react";

export default function ClaudePage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [payLoading, setPayLoading] = useState(false);

  const PRICE = 21350; // Prix en FCFA

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const isValidEmail = (em: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em);
    
    if (!fullName.trim() || fullName.trim().length < 3) {
      alert("Veuillez renseigner votre nom complet (au moins 3 caractères).");
      return;
    }
    
    if (!isValidEmail(email)) {
      alert("Veuillez renseigner une adresse e-mail valide.");
      return;
    }
    
    if (!phone.trim() || phone.trim().length < 8) {
      alert("Veuillez renseigner un numéro de téléphone valide.");
      return;
    }

    if (!country.trim()) {
      alert("Veuillez indiquer votre pays.");
      return;
    }

    const NOTCH_KEY = process.env.NEXT_PUBLIC_NOTCHPAY_PUBLIC_KEY || "pk.4ynuCkosXYPYNkQpQ4Jnw8GcfENZP4XWWgQV64Kun5Qxq2zWebgGhwxqMIOlw3gH7j0PAzoB1YCM2AbDNFiYELVa3ri6H6KWFyKqm0useQQij1JRNL2yIqN84sRrp";
    
    if (!NOTCH_KEY) {
      alert("Clé NotchPay non configurée. Contactez l'administrateur.");
      return;
    }

    setPayLoading(true);
    const reference = "claude_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 8);

    try {
      const resp = await fetch("https://api.notchpay.co/payments/initialize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: NOTCH_KEY,
        },
        body: JSON.stringify({
          email,
          amount: Number(PRICE),
          currency: "XAF",
          description: `Claude AI Team - 1 mois - ${fullName}`,
          reference,
          callback: window.location.origin + "/claude?success=true",
          metadata: { 
            name: fullName,
            phone,
            country,
            service: "Claude AI Team - 1 mois",
          },
        }),
      });

      const json = await resp.json().catch(() => ({}));

      if (resp.ok && json.authorization_url) {
        window.location.href = json.authorization_url;
      } else {
        console.error("Notch init error:", json);
        alert(json.message || "Erreur d'initialisation du paiement.");
      }
    } catch (err) {
      console.error("Payment error:", err);
      alert("Erreur lors de la requête de paiement.");
    } finally {
      setPayLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-400 to-purple-600 rounded-2xl mb-6 shadow-xl">
            <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Claude AI Team
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Accès complet pendant 1 mois
          </p>
          <div className="inline-block">
            <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">
              21,350 FCFA
            </span>
            <span className="text-gray-500 text-lg ml-2">/mois</span>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-6 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Ce qui est inclus</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Claude Sonnet 4.5</h3>
                <p className="text-gray-600 text-sm">Le modèle le plus puissant d'Anthropic</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Usage illimité</h3>
                <p className="text-gray-600 text-sm">Utilisez Claude autant que vous voulez</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Accès Team</h3>
                <p className="text-gray-600 text-sm">Fonctionnalités professionnelles complètes</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Activation immédiate</h3>
                <p className="text-gray-600 text-sm">Accès dans les 24h après paiement</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Souscrire maintenant</h2>
          
          <form onSubmit={handlePay} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nom complet *
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition"
                placeholder="Jean Dupont"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition"
                placeholder="vous@exemple.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Téléphone (avec indicatif pays) *
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition"
                placeholder="+226 XX XX XX XX (Burkina) ou +237 6XX XXX XXX (Cameroun)"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Pays *
              </label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition"
                required
              >
                <option value="">Sélectionnez votre pays</option>
                <option value="Burkina Faso">🇧🇫 Burkina Faso</option>
                <option value="Cameroun">🇨🇲 Cameroun</option>
                <option value="Côte d'Ivoire">🇨🇮 Côte d'Ivoire</option>
                <option value="Sénégal">🇸🇳 Sénégal</option>
                <option value="Mali">🇲🇱 Mali</option>
                <option value="Bénin">🇧🇯 Bénin</option>
                <option value="Togo">🇹🇬 Togo</option>
                <option value="Niger">🇳🇪 Niger</option>
                <option value="Autre">🌍 Autre pays</option>
              </select>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 text-sm text-blue-800">
              <p className="font-semibold mb-1">💳 Modes de paiement acceptés :</p>
              <p>Mobile Money (Orange, MTN, Moov) • Carte bancaire</p>
              <p className="mt-2 text-xs text-blue-600">
                🇧🇫 Clients du Burkina Faso : Orange Money et Moov Money acceptés !
              </p>
            </div>

            <button
              type="submit"
              disabled={payLoading}
              className="w-full bg-gradient-to-r from-orange-500 to-purple-600 text-white py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
            >
              {payLoading ? "Traitement..." : `Payer 21,350 FCFA`}
            </button>
          </form>

          <p className="text-center text-xs text-gray-500 mt-6">
            Paiement sécurisé par NotchPay • Vos données sont protégées
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-600">
          <p>Besoin d'aide ? Contactez-nous</p>
          <p className="font-semibold text-gray-900 mt-1">
            📧 contact@mikamba.cm • 📱 +237 672 094 167
          </p>
        </div>
      </div>
    </div>
  );
}
