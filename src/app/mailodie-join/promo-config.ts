/**
 * Configuration de la promotion Mailodie
 * 
 * Pour changer la date de début de la promotion :
 * 1. Modifie PROMO_START_DATE avec la nouvelle date
 * 2. Commit et push
 * 3. Vercel redéploiera automatiquement
 */

export const PROMO_CONFIG = {
  // Date de début de la promotion (ISO 8601 format)
  PROMO_START_DATE: '2026-09-13T00:00:00.000Z', // 13 septembre 2026 à minuit UTC
  
  // Durée de la promotion en heures
  PROMO_DURATION_HOURS: 96, // 96 heures = 4 jours
  
  // Pourcentage de réduction
  DISCOUNT_PERCENTAGE: 20, // 20%
};

/**
 * Calcule la date de fin de la promotion
 */
export function getPromoEndDate(): Date {
  const startDate = new Date(PROMO_CONFIG.PROMO_START_DATE);
  const endDate = new Date(startDate);
  endDate.setHours(endDate.getHours() + PROMO_CONFIG.PROMO_DURATION_HOURS);
  return endDate;
}

/**
 * Vérifie si la promotion est encore active
 */
export function isPromoActive(): boolean {
  const now = new Date();
  const endDate = getPromoEndDate();
  return now < endDate;
}

/**
 * Calcule le temps restant jusqu'à la fin de la promotion
 */
export function getTimeRemaining(): { hours: number; minutes: number; seconds: number } {
  const now = new Date();
  const endDate = getPromoEndDate();
  const diff = endDate.getTime() - now.getTime();
  
  if (diff <= 0) {
    return { hours: 0, minutes: 0, seconds: 0 };
  }
  
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  return { hours, minutes, seconds };
}
