export const DEFAULT_LANG = 'en';

interface SupportedLanguagesInterface {
  [key: string]: string;
}

export const SUPPORTED_LANGUAGES: SupportedLanguagesInterface = {
  [DEFAULT_LANG]: DEFAULT_LANG,
};
