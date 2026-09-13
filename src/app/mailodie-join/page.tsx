"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle, Zap, Target, Clock, MessageCircle, Sparkles } from "lucide-react";
import jsPDF from "jspdf";

type PricingPack = {
  id: string;
  name: string;
  originalPrice: number;
  features: string[];
  deliveryTime: string;
  highlighted?: boolean;
};

export default function MailodieJoin() {
  useEffect(() => {
    console.log("🎉 Bienvenue sur MAILODIE - Page chargée avec succès !");
    console.log("📧 Groupe WhatsApp: https://chat.whatsapp.com/GLrvgnNePXe3tZG9kIWGYk");
    
    // Check if returning from payment
    const urlParams = new URLSearchParams(window.location.search);
    const reference = urlParams.get('reference');
    const status = urlParams.get('status');
    const trxref = urlParams.get('trxref');
    
    if (reference && status === 'complete') {
      // Payment successful - show receipt
      setShowReceipt(true);
      setReceiptData({
        reference,
        trxref,
        date: new Date().toLocaleString('fr-FR'),
        amount: urlParams.get('amount') || '',
        pack: urlParams.get('pack') || '',
        name: urlParams.get('name') || '',
        email: urlParams.get('email') || ''
      });
      
      // Clean URL
      window.history.replaceState({}, '', '/mailodie-join');
    }
  }, []);

  const [timeLeft, setTimeLeft] = useState({
    hours: 96,
    minutes: 0,
    seconds: 0,
  });
  
  const [selectedPack, setSelectedPack] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [payLoading, setPayLoading] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [receiptData, setReceiptData] = useState<any>(null);

  // Calculate discounted price (20% off)
  const getDiscountedPrice = (originalPrice: number) => {
    return Math.round(originalPrice * 0.8);
  };

  // Countdown timer for 96 hours
  useEffect(() => {
    const endDate = new Date();
    endDate.setHours(endDate.getHours() + 96);
    
    const tick = () => {
      const now = new Date();
      const diff = endDate.getTime() - now.getTime();
      
      if (diff <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeLeft({ hours, minutes, seconds });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pricingPacks: PricingPack[] = [
    {
      id: "essentiel",
      name: "MAILODIE ESSENTIEL",
      originalPrice: 50000,
      deliveryTime: "24H/DÉLAI",
      features: [
        "5 adresses email professionnelles",
        "Nom de domaine personnalisé",
        "Assistance pour la connexion à Gmail",
        "Création d'une page web simple",
        "Présentation des services et contacts",
      ],
    },
    {
      id: "premium",
      name: "MAILODIE PREMIUM",
      originalPrice: 120000,
      deliveryTime: "72H/DÉLAI",
      highlighted: true,
      features: [
        "Tout le contenu du pack Essentiel",
        "Création d'une page web complète",
        "Présentation des services et contacts",
        "Déploiement du site en ligne",
      ],
    },
    {
      id: "elite",
      name: "MAILODIE ELITE",
      originalPrice: 250000,
      deliveryTime: "1SEMEINE/DÉLAI",
      features: [
        "Tout le contenu du pack Premium",
        "Optimisation SEO avancée du site",
        "Choix stratégique des mots-clés",
        "Mise en place de l'indexation Google",
        "Amélioration de la visibilité dans les recherches (50,000 F/an)",
      ],
    },
  ];

  const pad = (n: number) => String(n).padStart(2, "0");

  const handleSelectPack = (pack: PricingPack) => {
    setSelectedPack(pack.id);
    setModalOpen(true);
  };

  const handleDownloadReceipt = () => {
    if (!receiptData) return;
    
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 20;
    let yPosition = 20;
    
    // Header - MAILODIE
    pdf.setFillColor(59, 130, 246); // Blue
    pdf.rect(0, 0, pageWidth, 35, 'F');
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(24);
    pdf.setFont('helvetica', 'bold');
    pdf.text('MAILODIE', pageWidth / 2, 15, { align: 'center' });
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'normal');
    pdf.text('Votre crédibilité digitale', pageWidth / 2, 25, { align: 'center' });
    
    yPosition = 50;
    
    // Title
    pdf.setTextColor(31, 41, 55); // Gray-900
    pdf.setFontSize(20);
    pdf.setFont('helvetica', 'bold');
    pdf.text('REÇU DE PAIEMENT', pageWidth / 2, yPosition, { align: 'center' });
    
    // Status Badge
    yPosition += 10;
    pdf.setFillColor(16, 185, 129); // Green
    pdf.roundedRect(pageWidth / 2 - 20, yPosition - 5, 40, 10, 3, 3, 'F');
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('✓ PAYÉ', pageWidth / 2, yPosition + 2, { align: 'center' });
    
    yPosition += 20;
    
    // Receipt Details Box
    pdf.setDrawColor(59, 130, 246);
    pdf.setLineWidth(0.5);
    pdf.rect(margin, yPosition, pageWidth - 2 * margin, 90);
    
    // Fill background
    pdf.setFillColor(239, 246, 255); // Light blue
    pdf.rect(margin, yPosition, pageWidth - 2 * margin, 90, 'F');
    pdf.rect(margin, yPosition, pageWidth - 2 * margin, 90);
    
    yPosition += 10;
    
    // Details
    pdf.setTextColor(75, 85, 99); // Gray-600
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    
    const details = [
      { label: 'Date & Heure:', value: receiptData.date },
      { label: 'Référence:', value: receiptData.reference },
      ...(receiptData.trxref ? [{ label: 'Transaction ID:', value: receiptData.trxref }] : []),
      { label: 'Pack Souscrit:', value: receiptData.pack },
      { label: 'Client:', value: receiptData.name },
      { label: 'Email:', value: receiptData.email },
    ];
    
    details.forEach((detail) => {
      pdf.setFont('helvetica', 'bold');
      pdf.text(detail.label, margin + 5, yPosition);
      pdf.setFont('helvetica', 'normal');
      pdf.text(detail.value, margin + 60, yPosition);
      yPosition += 8;
    });
    
    // Amount - Highlighted
    yPosition += 5;
    pdf.setDrawColor(59, 130, 246);
    pdf.setLineWidth(1);
    pdf.line(margin + 5, yPosition - 3, pageWidth - margin - 5, yPosition - 3);
    
    yPosition += 5;
    pdf.setTextColor(31, 41, 55);
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Montant Payé:', margin + 5, yPosition);
    
    pdf.setTextColor(16, 185, 129); // Green
    pdf.setFontSize(18);
    pdf.setFont('helvetica', 'bold');
    const amount = Number(receiptData.amount).toLocaleString('fr-FR');
    pdf.text(`${amount} F CFA`, pageWidth - margin - 5, yPosition, { align: 'right' });
    
    yPosition += 25;
    
    // Next Steps Section
    pdf.setFillColor(240, 249, 255); // Very light blue
    pdf.roundedRect(margin, yPosition, pageWidth - 2 * margin, 35, 3, 3, 'F');
    pdf.setDrawColor(147, 197, 253);
    pdf.roundedRect(margin, yPosition, pageWidth - 2 * margin, 35, 3, 3);
    
    yPosition += 8;
    pdf.setTextColor(31, 41, 55);
    pdf.setFontSize(13);
    pdf.setFont('helvetica', 'bold');
    pdf.text('⚡ Prochaines Étapes', margin + 5, yPosition);
    
    yPosition += 8;
    pdf.setTextColor(75, 85, 99);
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.text('• Notre équipe vous contactera dans les 24 heures', margin + 10, yPosition);
    yPosition += 6;
    pdf.text(`• Email de confirmation envoyé à ${receiptData.email}`, margin + 10, yPosition);
    yPosition += 6;
    pdf.text('• Conservez ce reçu comme preuve de paiement', margin + 10, yPosition);
    
    yPosition += 15;
    
    // Contact Info Section
    pdf.setFillColor(254, 243, 199); // Yellow
    pdf.roundedRect(margin, yPosition, pageWidth - 2 * margin, 30, 3, 3, 'F');
    pdf.setDrawColor(245, 158, 11);
    pdf.roundedRect(margin, yPosition, pageWidth - 2 * margin, 30, 3, 3);
    
    yPosition += 8;
    pdf.setTextColor(31, 41, 55);
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('📞 Besoin d\'aide ?', margin + 5, yPosition);
    
    yPosition += 7;
    pdf.setTextColor(75, 85, 99);
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.text('Email: contact@mikamba.cm', margin + 10, yPosition);
    yPosition += 6;
    pdf.text('Téléphone: +237672094167', margin + 10, yPosition);
    yPosition += 6;
    pdf.text('WhatsApp: https://chat.whatsapp.com/GLrvgnNePXe3tZG9kIWGYk', margin + 10, yPosition);
    
    // Footer
    yPosition = pdf.internal.pageSize.getHeight() - 20;
    pdf.setDrawColor(229, 231, 235);
    pdf.setLineWidth(0.5);
    pdf.line(margin, yPosition - 5, pageWidth - margin, yPosition - 5);
    
    pdf.setTextColor(107, 114, 128);
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');
    pdf.text('MAILODIE - Une initiative pour rendre la présence en ligne accessible à toutes les entreprises', pageWidth / 2, yPosition, { align: 'center' });
    pdf.text('© 2026 Mailodie. Tous droits réservés.', pageWidth / 2, yPosition + 5, { align: 'center' });
    
    // Save PDF
    pdf.save(`Recu_Mailodie_${receiptData.reference}.pdf`);
  };

  const handlePay = async (e?: React.FormEvent) => {
    e?.preventDefault();

    if (!selectedPack) {
      alert("Veuillez sélectionner un pack");
      return;
    }

    const pack = pricingPacks.find((p) => p.id === selectedPack);
    if (!pack) return;

    const isValidEmail = (em: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em);
    
    if (!fullName.trim() || fullName.trim().length < 3) {
      alert("Veuillez renseigner votre nom complet (au moins 3 caractères).");
      return;
    }
    
    if (!isValidEmail(email)) {
      alert("Veuillez renseigner une adresse e-mail valide.");
      return;
    }
    
    if (!phone.trim() || phone.trim().length < 9) {
      alert("Veuillez renseigner un numéro de téléphone valide.");
      return;
    }

    const NOTCH_KEY = process.env.NEXT_PUBLIC_NOTCHPAY_PUBLIC_KEY || "pk.4ynuCkosXYPYNkQpQ4Jnw8GcfENZP4XWWgQV64Kun5Qxq2zWebgGhwxqMIOlw3gH7j0PAzoB1YCM2AbDNFiYELVa3ri6H6KWFyKqm0useQQij1JRNL2yIqN84sRrp";
    
    if (!NOTCH_KEY) {
      alert("Clé NotchPay non configurée. Contactez l'administrateur.");
      return;
    }

    setPayLoading(true);
    const reference = "mailodie_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 8);
    const currentPrice = getDiscountedPrice(pack.originalPrice);

    try {
      const resp = await fetch("https://api.notchpay.co/payments/initialize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: NOTCH_KEY,
        },
        body: JSON.stringify({
          email,
          amount: Number(currentPrice),
          currency: "XAF",
          description: `Mailodie ${pack.name} - ${company || fullName}`,
          reference,
          callback: window.location.origin + "/mailodie-join",
          metadata: { 
            name: fullName,
            phone,
            company: company || "N/A",
            pack: pack.name,
          },
        }),
      });

      const json = await resp.json().catch(() => ({}));

      if (resp.ok && json.authorization_url) {
        // Store payment info in sessionStorage for receipt
        sessionStorage.setItem('mailodie_payment_pending', JSON.stringify({
          reference,
          pack: pack.name,
          amount: currentPrice,
          name: fullName,
          email: email,
          phone: phone,
          company: company
        }));
        
        // Redirect to payment page with callback parameters
        const callbackUrl = encodeURIComponent(
          `${window.location.origin}/mailodie-join?reference=${reference}&pack=${encodeURIComponent(pack.name)}&amount=${currentPrice}&name=${encodeURIComponent(fullName)}&email=${encodeURIComponent(email)}`
        );
        
        window.location.href = json.authorization_url;
        setModalOpen(false);
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
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-stone-100 to-slate-100 relative overflow-x-hidden">
      {/* Decorative elements matching the image style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M20,50 Q30,30 40,50 T60,50 T80,50" stroke="currentColor" fill="none" strokeWidth="2" className="text-gray-400" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-40 h-40 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M10,50 Q20,70 30,50 T50,50 T70,50 T90,50" stroke="currentColor" fill="none" strokeWidth="2" className="text-gray-400" />
          </svg>
        </div>
      </div>

      {/* Header with countdown */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mera-title">MAILODIE</h1>
              <p className="text-sm text-gray-600">Votre crédibilité digitale en quelques clics</p>
            </div>
            
            {timeLeft.hours > 0 && (
              <div className="bg-gradient-to-r from-red-50 to-red-100 px-6 py-3 rounded-xl border-2 border-red-400 relative">
                <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full rotate-12 shadow-lg">
                  -20%
                </div>
                <div className="flex items-center gap-2 text-red-700 font-mono text-xl font-bold">
                  <Clock className="w-5 h-5" />
                  <span>{pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}</span>
                </div>
                <div className="text-xs text-red-600 mt-1 text-center font-semibold">Offre limitée !</div>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight mera-title">
            Donnez à votre entreprise
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              la crédibilité qu'elle mérite
            </span>
          </h1>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            <strong>Mailodie</strong> est une solution <strong>facile et accessible</strong> pour donner de la crédibilité 
            et de la visibilité Google aux entreprises qui le méritent. Des emails professionnels, un site optimisé 
            et une présence en ligne en quelques jours.
          </p>

          {/* WhatsApp CTA Button - Very visible */}
          <div className="mb-12">
            <a
              href="https://chat.whatsapp.com/GLrvgnNePXe3tZG9kIWGYk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-green-500/50 transition-all hover:scale-105 group"
            >
              <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Rejoindre le groupe WhatsApp Mailodie
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Gratuit</span>
            </a>
            <p className="text-sm text-gray-600 mt-3">
              🌟 Rejoignez notre communauté d'entrepreneurs et bénéficiez de conseils exclusifs
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Crédibilité Professionnelle</h3>
              <p className="text-gray-600">
                Des emails professionnels avec votre propre nom de domaine. Fini les adresses Gmail génériques.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visibilité Google</h3>
              <p className="text-gray-600">
                Optimisation SEO et indexation sur Google pour que vos clients vous trouvent facilement.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rapide & Simple</h3>
              <p className="text-gray-600">
                Solution clé en main livrée en quelques jours. Pas besoin de compétences techniques.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 mera-title">Services & Prix</h2>
            <p className="text-3xl font-bold text-gray-900 mb-2 mera-title">3 OFFRES POUR VOUS</p>
            {timeLeft.hours > 0 && (
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-6 py-3 rounded-xl font-bold text-lg border-2 border-red-400">
                <span className="text-2xl">🎯</span>
                <span>Promotion -20% pendant {timeLeft.hours}h encore !</span>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {pricingPacks.map((pack) => {
              const discountedPrice = getDiscountedPrice(pack.originalPrice);
              const isPromo = timeLeft.hours > 0;
              
              return (
                <div
                  key={pack.id}
                  className={`relative bg-white rounded-3xl p-8 border-2 transition-all hover:scale-105 shadow-xl ${
                    pack.highlighted
                      ? "border-purple-400 shadow-purple-200"
                      : "border-gray-300 shadow-gray-200"
                  }`}
                >
                  {pack.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg rotate-2">
                      ⭐ Démarrage
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-gray-200 pb-3">
                      {pack.name}
                    </h3>
                    <div className="mb-2">
                      {isPromo && (
                        <p className="text-2xl text-gray-400 line-through mb-1">
                          {pack.originalPrice.toLocaleString()} FRS
                        </p>
                      )}
                      <p className="text-5xl font-bold text-gray-900">
                        {isPromo ? discountedPrice.toLocaleString() : pack.originalPrice.toLocaleString()}
                        <span className="text-2xl"> FRS</span>
                      </p>
                      <p className="text-sm text-gray-600 mt-1">/An</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 min-h-[300px]">
                    {pack.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleSelectPack(pack)}
                    className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${
                      pack.highlighted
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-2xl hover:shadow-purple-500/50"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    {pack.deliveryTime}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
            <p className="text-gray-700 text-lg">
              📧 Contact: <a href="mailto:contact@mikamba.cm" className="font-bold text-blue-600 hover:underline">contact@mikamba.cm</a>
              {" • "}
              📱 <a href="tel:+237672094167" className="font-bold text-blue-600 hover:underline">+237672094167</a>
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-12 shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">Prêt à donner de la crédibilité à votre entreprise ?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Rejoignez les entrepreneurs qui font confiance à Mailodie pour leur présence en ligne.
          </p>
          <a
            href="https://chat.whatsapp.com/GLrvgnNePXe3tZG9kIWGYk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            Discutez avec nous sur WhatsApp
          </a>
        </section>
      </main>

      {/* Payment Modal */}
      {modalOpen && selectedPack && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 w-full max-w-lg shadow-2xl border border-gray-200 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {(() => {
              const pack = pricingPacks.find((p) => p.id === selectedPack);
              if (!pack) return null;
              const currentPrice = getDiscountedPrice(pack.originalPrice);
              const isPromo = timeLeft.hours > 0;

              return (
                <>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2 mera-title">{pack.name}</h2>
                  <div className="mb-6">
                    {isPromo && (
                      <p className="text-xl text-gray-400 line-through">
                        Prix normal : {pack.originalPrice.toLocaleString()} F CFA
                      </p>
                    )}
                    <p className="text-4xl font-bold text-blue-600">
                      {currentPrice.toLocaleString()} F CFA
                      {isPromo && <span className="text-lg text-green-600 ml-2">(-20% 🎉)</span>}
                    </p>
                  </div>

                  <form onSubmit={handlePay}>
                    <div className="space-y-4 mb-6">
                      <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2">
                          Nom complet *
                        </label>
                        <input
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none transition"
                          placeholder="Prénom Nom"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2">
                          Adresse e-mail *
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none transition"
                          placeholder="vous@exemple.com"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2">
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none transition"
                          placeholder="+237 6XX XXX XXX"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2">
                          Nom de l'entreprise (optionnel)
                        </label>
                        <input
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none transition"
                          placeholder="Votre Entreprise SARL"
                        />
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setModalOpen(false)}
                        className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
                      >
                        Annuler
                      </button>
                      <button
                        type="submit"
                        disabled={payLoading}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-xl transition disabled:opacity-50"
                      >
                        {payLoading ? "Traitement..." : `Payer ${currentPrice.toLocaleString()} F`}
                      </button>
                    </div>
                  </form>
                </>
              );
            })()}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-lg font-semibold mb-2">MAILODIE - Votre crédibilité digitale</p>
          <p className="text-gray-400 text-sm">
            Une initiative pour rendre la présence en ligne accessible à toutes les entreprises
          </p>
          <p className="text-gray-500 text-xs mt-4">© 2026 Mailodie. Tous droits réservés.</p>
        </div>
      </footer>

      {/* Receipt Modal */}
      {showReceipt && receiptData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 w-full max-w-2xl shadow-2xl border border-gray-200 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowReceipt(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Receipt Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Paiement Réussi !</h2>
              <p className="text-gray-600">Merci pour votre confiance</p>
            </div>

            {/* Receipt Content */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 mb-6 border-2 border-blue-200">
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-blue-300">
                <h3 className="text-xl font-bold text-gray-900 mera-title">REÇU DE PAIEMENT</h3>
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  PAYÉ
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 font-semibold">Date & Heure:</span>
                  <span className="text-gray-900 font-bold">{receiptData.date}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600 font-semibold">Référence:</span>
                  <span className="text-gray-900 font-mono text-sm">{receiptData.reference}</span>
                </div>

                {receiptData.trxref && (
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Transaction ID:</span>
                    <span className="text-gray-900 font-mono text-sm">{receiptData.trxref}</span>
                  </div>
                )}

                <div className="flex justify-between py-3 border-t border-blue-300">
                  <span className="text-gray-600 font-semibold">Pack Souscrit:</span>
                  <span className="text-gray-900 font-bold">{receiptData.pack}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600 font-semibold">Client:</span>
                  <span className="text-gray-900">{receiptData.name}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600 font-semibold">Email:</span>
                  <span className="text-gray-900 text-sm">{receiptData.email}</span>
                </div>

                <div className="flex justify-between items-center pt-4 border-t-2 border-blue-400">
                  <span className="text-lg font-bold text-gray-900">Montant Payé:</span>
                  <span className="text-3xl font-bold text-green-600">
                    {Number(receiptData.amount).toLocaleString()} F CFA
                  </span>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-blue-50 rounded-2xl p-6 mb-6 border border-blue-200">
              <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600" />
                Prochaines Étapes
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Notre équipe vous contactera dans les <strong>24 heures</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Un email de confirmation a été envoyé à <strong>{receiptData.email}</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Conservez ce reçu comme preuve de paiement</span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Besoin d'aide ?</h4>
              <div className="space-y-2 text-gray-700">
                <p>📧 Email: <a href="mailto:contact@mikamba.cm" className="font-bold text-blue-600 hover:underline">contact@mikamba.cm</a></p>
                <p>📱 Téléphone: <a href="tel:+237672094167" className="font-bold text-blue-600 hover:underline">+237672094167</a></p>
                <a
                  href="https://chat.whatsapp.com/GLrvgnNePXe3tZG9kIWGYk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition mt-3"
                >
                  <MessageCircle className="w-4 h-4" />
                  Rejoindre le groupe WhatsApp
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={handleDownloadReceipt}
                className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                📥 Télécharger le reçu
              </button>
              <button
                onClick={() => setShowReceipt(false)}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
