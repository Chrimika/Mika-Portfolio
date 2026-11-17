"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

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
    <div className="min-h-screen bg-[#FAF7F5] flex items-center justify-center p-4">
      <div className="max-w-xl w-full">
        {/* Header with Claude Logo */}
        <div className="text-center mb-10">
          {/* Claude Logo SVG */}
          <div className="flex justify-center mb-6">
            <svg width="120" height="120" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="200" height="200" rx="40" fill="#CC9B7A"/>
              <path d="M100 40C77.9086 40 60 57.9086 60 80C60 91.0457 64.7411 101.046 72.2183 108L72 140C72 145.523 76.4772 150 82 150H118C123.523 150 128 145.523 128 140L127.782 108C135.259 101.046 140 91.0457 140 80C140 57.9086 122.091 40 100 40Z" fill="#FAF7F5"/>
              <circle cx="88" cy="75" r="6" fill="#CC9B7A"/>
              <circle cx="112" cy="75" r="6" fill="#CC9B7A"/>
              <path d="M88 95C88 95 94 102 100 102C106 102 112 95 112 95" stroke="#CC9B7A" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E1611] mb-3">
            Claude AI Team
          </h1>
          <p className="text-lg text-[#6B5D54] mb-6">
            Accès complet pendant 1 mois
          </p>
          <div className="inline-block">
            <span className="text-5xl font-bold text-[#CC9B7A]">
              21,350
            </span>
            <span className="text-[#6B5D54] text-xl ml-2">FCFA</span>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-[#E6DED7]">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-[#CC9B7A] rounded-full flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <div>
                <h3 className="font-semibold text-[#1E1611]">Claude Sonnet 4.5</h3>
                <p className="text-[#6B5D54] text-sm">Le modèle le plus puissant d'Anthropic</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-[#CC9B7A] rounded-full flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <div>
                <h3 className="font-semibold text-[#1E1611]">Usage illimité</h3>
                <p className="text-[#6B5D54] text-sm">Aucune limite de messages</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-[#CC9B7A] rounded-full flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <div>
                <h3 className="font-semibold text-[#1E1611]">Fonctionnalités Team</h3>
                <p className="text-[#6B5D54] text-sm">Accès professionnel complet</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-[#CC9B7A] rounded-full flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <div>
                <h3 className="font-semibold text-[#1E1611]">Activation rapide</h3>
                <p className="text-[#6B5D54] text-sm">Accès sous 24h après paiement</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#E6DED7]">
          <h2 className="text-2xl font-bold text-[#1E1611] mb-6 text-center">Informations de souscription</h2>
          
          <form onSubmit={handlePay} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-[#1E1611] mb-2">
                Nom complet
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 bg-[#FAF7F5] border border-[#E6DED7] rounded-lg focus:border-[#CC9B7A] focus:outline-none focus:ring-2 focus:ring-[#CC9B7A]/20 transition text-[#1E1611] placeholder-[#A89A8F]"
                placeholder="Jean Dupont"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1E1611] mb-2">
                Adresse e-mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-[#FAF7F5] border border-[#E6DED7] rounded-lg focus:border-[#CC9B7A] focus:outline-none focus:ring-2 focus:ring-[#CC9B7A]/20 transition text-[#1E1611] placeholder-[#A89A8F]"
                placeholder="vous@exemple.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1E1611] mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 bg-[#FAF7F5] border border-[#E6DED7] rounded-lg focus:border-[#CC9B7A] focus:outline-none focus:ring-2 focus:ring-[#CC9B7A]/20 transition text-[#1E1611] placeholder-[#A89A8F]"
                placeholder="+226 XX XX XX XX"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1E1611] mb-2">
                Pays
              </label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full px-4 py-3 bg-[#FAF7F5] border border-[#E6DED7] rounded-lg focus:border-[#CC9B7A] focus:outline-none focus:ring-2 focus:ring-[#CC9B7A]/20 transition text-[#1E1611]"
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
                <option value="Autre">🌍 Autre</option>
              </select>
            </div>

            <div className="bg-[#FFF8F2] border border-[#E6DED7] rounded-lg p-4 text-sm text-[#6B5D54]">
              <p className="font-semibold text-[#1E1611] mb-1">💳 Paiement Mobile Money accepté</p>
              <p className="text-xs">Orange Money • MTN • Moov Money • Carte bancaire</p>
              <p className="mt-2 text-xs text-[#CC9B7A] font-medium">
                🇧🇫 Burkina Faso : tous les opérateurs supportés
              </p>
            </div>

            <button
              type="submit"
              disabled={payLoading}
              className="w-full bg-[#CC9B7A] hover:bg-[#B88A6A] text-white py-4 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {payLoading ? "Traitement en cours..." : "Payer 21,350 FCFA"}
            </button>
          </form>

          <p className="text-center text-xs text-[#A89A8F] mt-5">
            Paiement sécurisé via NotchPay
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-[#6B5D54]">
          <p>Besoin d'assistance ?</p>
          <p className="font-medium text-[#1E1611] mt-1">
            📧 contact@mikamba.cm
          </p>
        </div>
      </div>
    </div>
  );
}
