# 🔍 Guide Google Search Console

## 📋 Étapes pour soumettre le site à Google

### 1. Créer un compte Google Search Console

1. Va sur : https://search.google.com/search-console
2. Connecte-toi avec ton compte Google
3. Clique sur **"Ajouter une propriété"**

### 2. Ajouter ton domaine

Tu as deux options :

#### Option A : Domaine (Recommandé)
```
mikamba.cm
```
- Couvre tous les sous-domaines et protocoles
- Nécessite vérification DNS

#### Option B : Préfixe d'URL
```
https://mikamba.cm
```
- Plus simple à vérifier
- Ne couvre que cette URL exacte

**Je recommande Option A** pour couvrir aussi `www.mikamba.cm`

### 3. Vérification du domaine

#### Méthode 1 : Enregistrement DNS (Recommandée)

1. Google te donne un code TXT à ajouter
2. Va dans ton panneau de gestion DNS (là où tu as acheté mikamba.cm)
3. Ajoute un enregistrement TXT :
   ```
   Type: TXT
   Nom: @ (ou mikamba.cm)
   Valeur: google-site-verification=XXXXXXXXXXXXXXX
   ```
4. Attends 5-10 minutes
5. Clique sur "Vérifier" dans Google Search Console

#### Méthode 2 : Fichier HTML (Alternative)

Si tu as des difficultés avec le DNS :

1. Google te donne un fichier HTML à télécharger
2. Place-le dans `/public/` de ton projet
3. Commit et push
4. Vérifie que le fichier est accessible : `https://mikamba.cm/google123456.html`
5. Clique sur "Vérifier"

### 4. Soumettre le Sitemap

Une fois vérifié :

1. Dans Google Search Console, va dans **"Sitemaps"**
2. Entre l'URL du sitemap :
   ```
   https://mikamba.cm/sitemap.xml
   ```
3. Clique sur **"Envoyer"**

Google commencera à indexer tes pages ! 🎉

### 5. Vérifier l'indexation

Après 24-48 heures :

1. Va dans **"Couverture"** ou **"Pages"**
2. Tu verras :
   - Pages indexées
   - Pages avec erreurs
   - Pages exclues

### 6. Tester les résultats enrichis

1. Va dans **"Améliorations"** → **"Résultats enrichis"**
2. Tu devrais voir les données structurées JSON-LD :
   - Schema Person (Mika MBA)
   - Schema Service (Mailodie)

---

## 📊 Tableau de bord important

### Pages à surveiller

| Page | URL | Statut attendu |
|------|-----|----------------|
| Portfolio | https://mikamba.cm/ | Indexée |
| Mailodie | https://mikamba.cm/mailodie-join | Indexée |

### Mots-clés à suivre

**Portfolio Mika MBA :**
- développeur cameroun
- développeur yaoundé
- informaticien cameroun
- développeur react cameroun

**Mailodie :**
- email professionnel cameroun
- adresse email professionnelle cameroun
- SEO cameroun
- référencement google cameroun

---

## 🎯 Objectifs de classement

### Court terme (1 mois)
- Apparaître dans les résultats pour "développeur yaoundé"
- Apparaître dans les résultats pour "email professionnel cameroun"

### Moyen terme (3 mois)
- Top 10 pour "développeur cameroun"
- Top 10 pour "adresse email professionnelle cameroun"

### Long terme (6 mois)
- Top 3 pour "développeur yaoundé"
- Top 3 pour "email professionnel cameroun"
- Top 5 pour "SEO cameroun"

---

## 🛠️ Outils complémentaires

### 1. Google Analytics

Ajoute le code de suivi dans `/src/app/layout.tsx` :

```typescript
{/* Google Analytics */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `,
  }}
/>
```

### 2. Google My Business (pour Mailodie)

1. Va sur : https://business.google.com
2. Crée une fiche entreprise "Mailodie"
3. Remplis les informations :
   - Nom : Mailodie
   - Catégorie : Service informatique
   - Adresse : Yaoundé, Cameroun
   - Téléphone : +237672094167
   - Site web : https://mikamba.cm/mailodie-join

### 3. Bing Webmaster Tools

N'oublie pas Bing !

1. Va sur : https://www.bing.com/webmasters
2. Ajoute ton site
3. Importe les données depuis Google Search Console (option disponible)

---

## 📈 Suivi des performances

### Métriques importantes

1. **Impressions** : Combien de fois ton site apparaît dans les résultats
2. **Clics** : Combien de personnes cliquent
3. **CTR** : Taux de clic (clics/impressions)
4. **Position moyenne** : Classement moyen dans les résultats

### Objectifs par page

**Portfolio :**
- 1000 impressions/mois (mois 3)
- CTR > 3%
- Position moyenne < 10

**Mailodie :**
- 500 impressions/mois (mois 3)
- CTR > 5%
- Position moyenne < 10

---

## ⚠️ Erreurs courantes à éviter

### ❌ À NE PAS FAIRE
- Acheter des backlinks
- Copier du contenu d'autres sites
- Sur-optimiser avec trop de mots-clés
- Cacher du texte (texte blanc sur fond blanc)
- Créer des pages doorway

### ✅ À FAIRE
- Créer du contenu original et utile
- Obtenir des backlinks naturellement
- Optimiser la vitesse du site
- Rendre le site mobile-friendly
- Mettre à jour régulièrement le contenu

---

## 📅 Planning de suivi

### Chaque semaine
- [ ] Vérifier les nouvelles impressions
- [ ] Noter les nouveaux mots-clés
- [ ] Vérifier les erreurs d'indexation

### Chaque mois
- [ ] Analyser le rapport de performance
- [ ] Comparer avec le mois précédent
- [ ] Ajuster la stratégie si nécessaire
- [ ] Créer 2-4 nouveaux contenus

### Chaque trimestre
- [ ] Audit SEO complet
- [ ] Mise à jour des mots-clés
- [ ] Analyse de la concurrence
- [ ] Rapport détaillé des KPIs

---

## 🎓 Ressources d'apprentissage

### Vidéos YouTube
- [Google Search Console Tutorial](https://www.youtube.com/results?search_query=google+search+console+tutorial)
- [SEO pour débutants](https://www.youtube.com/results?search_query=seo+tutorial+francais)

### Cours en ligne
- Google Digital Garage (gratuit)
- HubSpot Academy SEO (gratuit)
- Udemy - SEO courses

### Documentation
- [Guide de démarrage SEO Google](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Centre d'aide Search Console](https://support.google.com/webmasters)

---

## 📞 Support

Besoin d'aide pour configurer ?
- Email : contact@mikamba.cm
- WhatsApp : +237672094167

---

## ✅ Checklist finale

- [ ] Compte Google Search Console créé
- [ ] Propriété mikamba.cm ajoutée
- [ ] Domaine vérifié (DNS ou HTML)
- [ ] Sitemap soumis
- [ ] Indexation vérifiée après 48h
- [ ] Google Analytics installé (optionnel)
- [ ] Google My Business créé pour Mailodie (optionnel)
- [ ] Premier rapport de performance consulté

---

**🎉 Une fois tout configuré, ton site sera visible sur Google dans 1-2 semaines !**

*Guide créé le 13 septembre 2026*
