// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import { type Multilingual } from "@/i18n";

export const SITE_TITLE: string | Multilingual = "Pharma SOS";

export const SITE_DESCRIPTION: string | Multilingual = {
  fr: "Trouvez les pharmacies de garde près de chez vous. Service gratuit 24/7 pour localiser les pharmacies ouvertes.", // French
  ar: "اعثر على الصيدليات المناوبة القريبة منك. خدمة مجانية على مدار 24/7 للعثور على الصيدليات المفتوحة.", // Arabic
  en: "Find on-duty pharmacies near you. Free 24/7 service to locate open pharmacies in your area.", // English
};

export const X_ACCOUNT: string | Multilingual = "@raked05";

export const NOT_TRANSLATED_CAUTION: string | Multilingual = {
  fr: "Cette page n'est pas disponible dans votre langue.", // French
  ar: "هذه الصفحة غير متوفرة بلغتك.", // Arabic
  en: "This page is not available in your language.", // English
};