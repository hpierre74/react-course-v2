export const ROUTES_PATHS_BY_NAMES = {
  home: '/',
  login: '/login',
  about: '/about',
  contact: '/contact',
  article: '/articles/:id',
  checkout: '/checkout',
};

export const PROTECTED_PATHS = [ROUTES_PATHS_BY_NAMES.login, ROUTES_PATHS_BY_NAMES.checkout];
