/**
 * Script de test NotchPay API
 * Usage: node test-notchpay.js
 */

const NOTCH_KEY = "pk.4ynuCkosXYPYNkQpQ4Jnw8GcfENZP4XWWgQV64Kun5Qxq2zWebgGhwxqMIOlw3gH7j0PAzoB1YCM2AbDNFiYELVa3ri6H6KWFyKqm0useQQij1JRNL2yIqN84sRrp";

async function testNotchPayAPI() {
  console.log("🔄 Test de l'API NotchPay...\n");

  const testData = {
    email: "test@example.com",
    amount: 40000, // Prix réduit ESSENTIEL
    currency: "XAF",
    description: "Test Mailodie ESSENTIEL - Entreprise Test",
    reference: "test_mailodie_" + Date.now(),
    callback: "http://localhost:3001/mailodie-join",
    metadata: {
      name: "Test User",
      phone: "+237600000000",
      company: "Test Company",
      pack: "MAILODIE ESSENTIEL",
    },
  };

  console.log("📤 Données envoyées :");
  console.log(JSON.stringify(testData, null, 2));
  console.log("\n");

  try {
    const response = await fetch("https://api.notchpay.co/payments/initialize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: NOTCH_KEY,
      },
      body: JSON.stringify(testData),
    });

    const json = await response.json();

    if (response.ok) {
      console.log("✅ API NotchPay fonctionne !");
      console.log("\n📊 Réponse :");
      console.log(JSON.stringify(json, null, 2));
      
      if (json.authorization_url) {
        console.log("\n🔗 URL de paiement :");
        console.log(json.authorization_url);
        console.log("\n💡 Copiez cette URL dans votre navigateur pour tester le paiement");
      }
    } else {
      console.log("❌ Erreur API NotchPay");
      console.log("\n📊 Réponse d'erreur :");
      console.log(JSON.stringify(json, null, 2));
    }
  } catch (error) {
    console.error("❌ Erreur lors de la requête :");
    console.error(error.message);
  }
}

// Exécution
testNotchPayAPI();
