export const RESTORE_CART = 'cart/RESTORE_CART';
export const ADD_TO_CART = 'cart/ADD_TO_CART';
export const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART';

export const restoreCart = ({ articles, total }) => ({
  type: RESTORE_CART,
  articles,
  total,
});

export const addToCart = article => ({ type: ADD_TO_CART, article });

export const removeFromCart = id => ({ type: REMOVE_FROM_CART, id });
