export const validLanguages = ['en', 'fr', 'ar'] as const;
export type ValidLanguage = typeof validLanguages[number];

export const defaultLanguage: ValidLanguage = 'fr'; 