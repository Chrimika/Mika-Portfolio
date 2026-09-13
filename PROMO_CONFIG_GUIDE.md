# 📅 Guide de Configuration de la Promotion Mailodie

## 🎯 Problème résolu

Le compteur de promotion était **synchronisé pour TOUS les visiteurs** maintenant. Il ne redémarre plus à chaque visite !

### ✅ Avant (problème)
- Le compteur redémarrait à 96h à chaque visite
- Chaque visiteur voyait un compte à rebours différent
- Pas de vraie date de fin

### ✅ Maintenant (corrigé)
- Date de début **fixe** : 13 septembre 2026 à minuit
- Date de fin **fixe** : 17 septembre 2026 à minuit (96h plus tard)
- **Tous les visiteurs** voient le même compte à rebours
- La promotion se termine automatiquement après 96h

---

## 🔧 Comment changer la date de la promo

### Méthode simple

1. Ouvre le fichier `/src/app/mailodie-join/promo-config.ts`

2. Change la date de début :
```typescript
export const PROMO_CONFIG = {
  // Change cette date 👇
  PROMO_START_DATE: '2026-09-20T00:00:00.000Z', // Nouvelle date
  
  PROMO_DURATION_HOURS: 96, // Ne change pas (sauf si tu veux)
  DISCOUNT_PERCENTAGE: 20,   // Ne change pas (sauf si tu veux)
};
```

3. Commit et push :
```bash
git add src/app/mailodie-join/promo-config.ts
git commit -m "chore: update promo start date"
git push origin main
```

4. Vercel redéploiera automatiquement avec la nouvelle date !

---

## 📅 Format de la date

La date utilise le format **ISO 8601** avec timezone UTC :

```
YYYY-MM-DDTHH:MM:SS.000Z
```

Exemples :
- `2026-09-13T00:00:00.000Z` = 13 septembre 2026 à minuit UTC
- `2026-09-20T12:00:00.000Z` = 20 septembre 2026 à midi UTC
- `2026-10-01T00:00:00.000Z` = 1er octobre 2026 à minuit UTC

**⚠️ Important** : Le `Z` à la fin signifie UTC (temps universel). Pour le Cameroun (GMT+1), ajoute 1 heure mentalement.

---

## ⏰ Durée de la promotion

Par défaut, la promotion dure **96 heures** (4 jours).

Pour changer :
```typescript
PROMO_DURATION_HOURS: 72, // 3 jours
PROMO_DURATION_HOURS: 120, // 5 jours
PROMO_DURATION_HOURS: 168, // 7 jours
```

---

## 💰 Pourcentage de réduction

Par défaut, **-20%** de réduction.

Pour changer :
```typescript
DISCOUNT_PERCENTAGE: 15, // -15%
DISCOUNT_PERCENTAGE: 25, // -25%
DISCOUNT_PERCENTAGE: 30, // -30%
```

---

## 🧪 Tester localement

Pour voir la promo en local :

```bash
npm run dev
```

Puis va sur : http://localhost:3000/mailodie-join

Tu verras le compteur avec le temps réel restant !

---

## 🎯 Scénarios d'utilisation

### Scénario 1 : Lancer une nouvelle promo demain

```typescript
PROMO_START_DATE: '2026-09-14T00:00:00.000Z', // Demain à minuit
PROMO_DURATION_HOURS: 96,
```

### Scénario 2 : Promo flash de 48h

```typescript
PROMO_START_DATE: '2026-09-13T12:00:00.000Z', // Aujourd'hui à midi
PROMO_DURATION_HOURS: 48, // 2 jours seulement
```

### Scénario 3 : Promo longue durée (1 semaine)

```typescript
PROMO_START_DATE: '2026-09-15T00:00:00.000Z',
PROMO_DURATION_HOURS: 168, // 7 jours
```

### Scénario 4 : Black Friday (-30%)

```typescript
PROMO_START_DATE: '2026-11-29T00:00:00.000Z',
PROMO_DURATION_HOURS: 24, // 1 jour seulement
DISCOUNT_PERCENTAGE: 30, // -30% au lieu de -20%
```

---

## 🔄 Que se passe-t-il après la promo ?

Quand le compteur arrive à `00:00:00` :

1. ✅ Le badge "-20%" **disparaît**
2. ✅ Le compteur **disparaît**
3. ✅ Les **prix normaux** s'affichent
4. ✅ Tout continue de fonctionner normalement

---

## 📊 Fonctions utiles disponibles

Le fichier `promo-config.ts` expose plusieurs fonctions :

### `getPromoEndDate()`
Retourne la date de fin de la promo
```typescript
const endDate = getPromoEndDate();
console.log(endDate); // Date object
```

### `isPromoActive()`
Vérifie si la promo est encore active
```typescript
if (isPromoActive()) {
  console.log("La promo est active !");
} else {
  console.log("La promo est terminée.");
}
```

### `getTimeRemaining()`
Retourne le temps restant
```typescript
const { hours, minutes, seconds } = getTimeRemaining();
console.log(`${hours}h ${minutes}m ${seconds}s`);
```

---

## ✅ Checklist de changement de promo

- [ ] Ouvrir `src/app/mailodie-join/promo-config.ts`
- [ ] Changer `PROMO_START_DATE` avec la nouvelle date
- [ ] (Optionnel) Ajuster `PROMO_DURATION_HOURS`
- [ ] (Optionnel) Ajuster `DISCOUNT_PERCENTAGE`
- [ ] Tester en local avec `npm run dev`
- [ ] Commit : `git commit -m "chore: update promo dates"`
- [ ] Push : `git push origin main`
- [ ] Vérifier sur Vercel que le déploiement réussit
- [ ] Tester sur https://mikamba.cm/mailodie-join

---

## 🚨 Dépannage

### Le compteur affiche 00:00:00 immédiatement

➡️ La date de fin est déjà passée. Change `PROMO_START_DATE` pour une date future.

### Le compteur ne change pas après update

➡️ Vide le cache de ton navigateur (Ctrl+Shift+R ou Cmd+Shift+R)

### Les prix ne changent pas après la fin de promo

➡️ C'est normal, regarde la ligne dans le code :
```typescript
const isPromo = timeLeft.hours > 0;
```
Si `hours = 0`, les prix normaux s'affichent.

---

## 💡 Astuce Pro

Pour tester rapidement la fin de promo en local :

```typescript
// Mettre une date qui se termine dans 1 minute
PROMO_START_DATE: new Date(Date.now() - 96 * 60 * 60 * 1000 + 60 * 1000).toISOString(),
```

Ensuite tu vois le compteur descendre et la promo se terminer en 1 minute ! 🎯

---

## 📞 Support

Si tu as besoin d'aide :
- Email : contact@mikamba.cm
- WhatsApp : https://chat.whatsapp.com/GLrvgnNePXe3tZG9kIWGYk

---

**✨ Configuration mise à jour le 13 septembre 2026**
