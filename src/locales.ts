// locale settings for this theme
// https://astro-i18n-starter.pages.dev/setup/

export const DEFAULT_LOCALE_SETTING: string = "fr"; // French is now the default language

export const LOCALES_SETTING: LocaleSetting = {
  "fr": {
    "label": "Français" // French
  },
  "ar": {
    "label": "العربية", // Arabic
    "dir": "rtl"
  },
  "en": {
    "label": "English" // English
  },
};

interface LocaleSetting {
  [key: Lowercase<string>]: {
    label: string;
    lang?: string;
    dir?: 'rtl' | 'ltr';
  };
} // refer: https://starlight.astro.build/reference/configuration/#locales