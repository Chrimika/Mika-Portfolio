# 🚀 Instructions d'accès à MAILODIE

## 📍 Accès rapide

### En développement
Le serveur tourne actuellement sur : **http://localhost:3001**

Accéder directement à la page Mailodie :
👉 **http://localhost:3001/mailodie-join**

### En production
Après déploiement sur Vercel/Netlify :
👉 **https://votre-domaine.com/mailodie-join**

---

## ✅ Checklist de vérification

### Fonctionnalités à tester :

1. **Compteur de promotion (96h)**
   - [ ] Le compteur s'affiche correctement
   - [ ] Les heures, minutes et secondes décomptent
   - [ ] Badge "-20%" visible sur le compteur

2. **Affichage des 3 packs**
   - [ ] MAILODIE ESSENTIEL (40,000 F au lieu de 50,000 F)
   - [ ] MAILODIE PREMIUM (96,000 F au lieu de 120,000 F) ⭐
   - [ ] MAILODIE ELITE (200,000 F au lieu de 250,000 F)

3. **Bouton WhatsApp**
   - [ ] Bouton vert très visible dans la section hero
   - [ ] Bouton WhatsApp dans la section finale
   - [ ] Lien : https://chat.whatsapp.com/GLrvgnNePXe3tZG9kIWGYk
   - [ ] S'ouvre dans un nouvel onglet

4. **Modal de paiement**
   - [ ] S'ouvre au clic sur "24H/DÉLAI", "72H/DÉLAI" ou "1SEMEINE/DÉLAI"
   - [ ] Affiche le nom du pack sélectionné
   - [ ] Affiche le prix avec réduction (-20%)
   - [ ] Formulaire avec tous les champs :
     - Nom complet (requis)
     - Email (requis)
     - Téléphone (requis)
     - Nom de l'entreprise (optionnel)
   - [ ] Validation des champs fonctionne
   - [ ] Bouton "Payer XX F" actif

5. **Intégration NotchPay**
   - [ ] Clic sur "Payer" lance l'API NotchPay
   - [ ] Redirection vers la page de paiement NotchPay
   - [ ] Pas d'erreurs dans la console

6. **Design & Responsive**
   - [ ] Design cohérent avec l'image fournie
   - [ ] Couleurs beige/gris clair respectées
   - [ ] Responsive sur mobile
   - [ ] Responsive sur tablette
   - [ ] Responsive sur desktop

7. **SEO & Métadonnées**
   - [ ] Titre de page correct
   - [ ] Description meta présente
   - [ ] Open Graph configuré

---

## 🔧 Configuration technique

### Variables d'environnement
Vérifier que `.env.local` contient :
```env
NEXT_PUBLIC_NOTCHPAY_PUBLIC_KEY=pk.4ynuCkosXYPYNkQpQ4Jnw8GcfENZP4XWWgQV64Kun5Qxq2zWebgGhwxqMIOlw3gH7j0PAzoB1YCM2AbDNFiYELVa3ri6H6KWFyKqm0useQQij1JRNL2yIqN84sRrp
```

### Dépendances installées
- ✅ `lucide-react` (déjà présent)
- ✅ `next` v15.3.4
- ✅ `react` v19
- ✅ `tailwindcss` v4

---

## 🎨 Personnalisations effectuées

### Basé sur l'image fournie :
1. **Typographie**
   - Utilisation de la police MERA PRO pour les titres (mera-title)
   - Montserrat pour le texte courant

2. **Couleurs**
   - Fond beige/gris clair (#f5f5f0)
   - Accents bleu/violet pour les CTA
   - Rouge pour la promotion
   - Vert pour WhatsApp

3. **Layout**
   - Cards des packs avec border radius
   - Prix en gros caractères
   - Liste de features avec checkmarks
   - Boutons d'action bien visibles

---

## 📱 Test sur mobile

Pour tester sur votre téléphone (même réseau WiFi) :
👉 **http://192.168.1.169:3001/mailodie-join**

---

## 🐛 Debugging

### Problèmes courants :

**Le compteur ne fonctionne pas :**
- Vérifier la console JavaScript
- S'assurer que le composant est "use client"

**NotchPay ne répond pas :**
- Vérifier la clé API dans `.env.local`
- Vérifier la console réseau (onglet Network)
- Tester avec les logs : `console.log(json)`

**Les prix ne sont pas réduits :**
- Vérifier que `timeLeft.hours > 0`
- Tester la fonction `getDiscountedPrice()`

---

## 🎯 Prochaines améliorations

### Court terme :
- [ ] Ajouter Firebase pour stocker les commandes
- [ ] Email de confirmation automatique
- [ ] Page de remerciement après paiement

### Moyen terme :
- [ ] Dashboard admin pour voir les souscriptions
- [ ] Webhook NotchPay pour validation automatique
- [ ] Système de codes promo

### Long terme :
- [ ] Programme d'affiliation
- [ ] Multi-langues (FR/EN)
- [ ] Blog pour SEO

---

## 📞 Support

En cas de problème :
- **Email** : contact@mikamba.cm
- **Téléphone** : +237672094167
- **WhatsApp** : https://chat.whatsapp.com/GLrvgnNePXe3tZG9kIWGYk

---

✨ **La page est prête à être testée et déployée !**
