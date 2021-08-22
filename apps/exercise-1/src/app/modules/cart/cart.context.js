import React, { useEffect, useRef } from 'react';

import { cartReducer, initialState } from './cart.reducer';

import { dispatchThunk } from '../../utils/context.utils';
import { CHILDREN_PROP_TYPES } from '../../constants/proptypes.constants';
import { restoreCart } from './cart.actions';

const CartStateContext = React.createContext();
const CartDispatchContext = React.createContext();

const persistCart = (cart) => () => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const CartProvider = ({ children }) => {
  const isInitialized = useRef(false);
  const [state, dispatch] = React.useReducer(cartReducer, initialState);
  const getState = React.useCallback(() => state, [state]);

  useEffect(() => {
    if (isInitialized && isInitialized.current) {
      return;
    }

    isInitialized.current = true;
    const storedArticles = localStorage.getItem('cart');

    if (storedArticles) dispatch(restoreCart(JSON.parse(storedArticles)));
  });

  useEffect(() => {
    const callback = persistCart(state);
    window.addEventListener('beforeunload', callback);

    return () => {
      window.removeEventListener('beforeunload', callback);
    };
  }, [state]);

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatchThunk(dispatch, getState)}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

CartProvider.propTypes = {
  children: CHILDREN_PROP_TYPES,
};

function useCartState() {
  const context = React.useContext(CartStateContext);
  if (context === undefined) {
    throw new Error('useCartState must be used within a CartProvider');
  }
  return context;
}

function useCartDispatch() {
  const context = React.useContext(CartDispatchContext);
  if (context === undefined) {
    throw new Error('useCartDispatch must be used within a CartProvider');
  }
  return context;
}

function useCart() {
  return [useCartState(), useCartDispatch()];
}

export { CartProvider, useCart, useCartState, useCartDispatch };
