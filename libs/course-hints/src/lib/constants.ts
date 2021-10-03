export const STATUS = {
  success: 'success',
  failure: 'failure',
};

export const DEFAULT_LANG = 'en';

interface SupportedLanguagesInterface {
  [key: string]: string;
}

const SUPPORTED_LANGUAGES: SupportedLanguagesInterface = {
  [DEFAULT_LANG]: DEFAULT_LANG,
};

const LANG = process.env.NX_LANG;
const CURRENT_LANG = SUPPORTED_LANGUAGES[LANG || DEFAULT_LANG];

export const DEFAULT_README_PATH = 'assets/README.md';
export const CURRENT_LANG_README_PATH =
  CURRENT_LANG === DEFAULT_LANG
    ? DEFAULT_README_PATH
    : `assets/README-${CURRENT_LANG}.md`;
