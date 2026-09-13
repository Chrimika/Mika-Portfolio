# 📧 MAILODIE - Guide de la nouvelle route

## 🎯 Description

**Mailodie** est une nouvelle page publique accessible via `/mailodie-join` qui présente une solution pour donner la crédibilité et la visibilité Google aux entreprises qui le méritent.

## 🔗 Accès

**URL**: `/mailodie-join`  
**Exemple**: `http://localhost:3000/mailodie-join` ou `https://votre-domaine.com/mailodie-join`

## ✨ Fonctionnalités

### 1. **Présentation des Services**
Trois offres disponibles :

- **MAILODIE ESSENTIEL** (50,000 FRS/an)
  - 5 adresses email professionnelles
  - Nom de domaine personnalisé
  - Assistance Gmail
  - Livraison: 24H

- **MAILODIE PREMIUM** (120,000 FRS/an) ⭐ *Pack Démarrage*
  - Tout le pack Essentiel
  - Page web + déploiement
  - Optimisation SEO
  - Indexation Google
  - Livraison: 72H

- **MAILODIE ELITE** (250,000 FRS/an)
  - Tout le pack Business
  - SEO avancé
  - Visibilité recherche maximale
  - Livraison: 1 semaine

### 2. **Promotion de lancement (-20%)**
- **Durée**: 96 heures (4 jours) à partir du chargement initial
- **Réduction**: 20% sur tous les packs
- **Compteur en temps réel** affiché en haut de page

### 3. **Intégration NotchPay**
- Paiement sécurisé via NotchPay API
- Support: Mobile Money, Carte bancaire
- Redirection automatique vers la page de paiement
- Référence unique générée pour chaque transaction

### 4. **Bouton WhatsApp**
- **Lien**: https://chat.whatsapp.com/GLrvgnNePXe3tZG9kIWGYk
- Bouton très visible et attractif
- Accès au groupe communautaire Mailodie
- Conseils exclusifs pour entrepreneurs

## 🔐 Configuration

### Variables d'environnement
Le fichier `.env.local` contient la clé NotchPay :

```env
NEXT_PUBLIC_NOTCHPAY_PUBLIC_KEY=pk.4ynuCkosXYPYNkQpQ4Jnw8GcfENZP4XWWgQV64Kun5Qxq2zWebgGhwxqMIOlw3gH7j0PAzoB1YCM2AbDNFiYELVa3ri6H6KWFyKqm0useQQij1JRNL2yIqN84sRrp
```

Cette clé est réutilisée depuis le projet `workshops-2026`.

## 💳 Processus de paiement

1. L'utilisateur clique sur un des packs
2. Modal s'ouvre avec formulaire :
   - Nom complet *
   - Email *
   - Téléphone *
   - Nom entreprise (optionnel)
3. Validation des données
4. Appel API NotchPay pour initialiser le paiement
5. Redirection vers la page de paiement NotchPay
6. Après paiement, callback vers `/mailodie-join`

## 🎨 Design

- **Style**: Inspiré de l'image fournie (beige/gris clair, moderne)
- **Responsive**: Adapté mobile et desktop
- **Animations**: Effets hover et transitions fluides
- **Cohérence**: Utilise les polices et styles du portfolio existant

## 📱 Intégration WhatsApp

Le bouton WhatsApp est présent à deux endroits stratégiques :
1. **Section Hero** - Premier bouton visible après le titre
2. **Section Finale** - Call-to-action avant le footer

## 🔄 Gestion de la promotion

Le compteur de 96h démarre automatiquement au chargement de la page. Après expiration :
- Les prix normaux sont affichés (sans réduction)
- Le badge "Promotion" disparaît
- Le compteur n'est plus affiché

**Note**: Actuellement, le compteur redémarre à chaque rechargement. Pour une gestion permanente, il faudrait stocker la date de début dans une base de données.

## 🚀 Lancement

### Développement
```bash
cd /home/mika/Desktop/Projects/Mika-Portfolio
npm run dev
```

Accéder à: http://localhost:3000/mailodie-join

### Production
```bash
npm run build
npm start
```

## 📊 Prochaines étapes recommandées

1. **Base de données** : Ajouter Firebase pour stocker les commandes
2. **Dashboard admin** : Interface pour voir les souscriptions
3. **Email notifications** : Confirmation automatique par email
4. **Webhooks NotchPay** : Vérification automatique des paiements
5. **Date de promotion fixe** : Stocker la date de début en BDD

## 🎉 Avantages

- ✅ Solution **facile et accessible**
- ✅ Crédibilité professionnelle garantie
- ✅ Visibilité Google optimisée
- ✅ Paiement sécurisé NotchPay
- ✅ Livraison rapide (24h à 1 semaine)
- ✅ Support communautaire WhatsApp

## 📞 Contact

- **Email**: contact@mikamba.cm
- **Téléphone**: +237672094167
- **WhatsApp Groupe**: https://chat.whatsapp.com/GLrvgnNePXe3tZG9kIWGYk

---

**Créé avec ❤️ pour donner de la crédibilité aux entreprises qui le méritent**
