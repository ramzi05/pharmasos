import type { Pharmacy } from '@/types/pharmacy';
import type { ValidLanguage } from '@/constants/languages';

export const createSlug = (text: string): string => 
  text.toLowerCase().trim().replace(/\s+/g, '-');

export const getEnglishCityName = (arabicName: string, pharmacies: Pharmacy[]): string => {
  const cityData = pharmacies.find(p => p.city.ar === arabicName);
  return cityData ? cityData.city.en : arabicName;
};

export const getCitySlug = (cityName: string, lang: ValidLanguage, pharmacies: Pharmacy[]): string => {
  const slugBase = lang === 'ar' ? getEnglishCityName(cityName, pharmacies) : cityName;
  return createSlug(slugBase);
}; 