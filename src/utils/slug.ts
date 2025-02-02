import type { Pharmacy } from '@/types/pharmacy';
import type { ValidLanguage } from '@/constants/languages';

export const createSlug = (text: string): string => 
  text.toLowerCase().trim().replace(/\s+/g, '-');

export const getEnglishCityName = (arabicName: string, pharmacies: Pharmacy[]): string => {
  const cityData = pharmacies.find(p => p.city.ar === arabicName);
  return cityData ? cityData.city.en : arabicName;
};

interface CityNames {
  fr: string;
  en: string;
  ar: string;
}

export function getCitySlug(cityNames: CityNames, lang: ValidLanguage): string {
  // Always use the French name for URL slugs to maintain consistency
  const baseName = cityNames.fr;
  if (!baseName) return '';

  return baseName
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric chars with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
} 