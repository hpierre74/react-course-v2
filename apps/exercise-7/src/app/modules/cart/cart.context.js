import React from 'react';

import { cartReducer, initialState } from './cart.reducer';

import { dispatchThunk } from '../../utils/context.utils';
import { CHILDREN_PROP_TYPES } from '../../constants/proptypes.constants';

const CartStateContext = React.createContext();
const CartDispatchContext = React.createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(cartReducer, initialState);
  const getState = React.useCallback(() => state, [state]);
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
