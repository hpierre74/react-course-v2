import React from 'react';

import { shallow } from 'enzyme';

import {
  useCart,
  useCartState,
  useCartDispatch,
  CartProvider,
} from '../cart.context';

describe('cart.context', () => {
  describe('<CartProvider />', () => {
    it('should render nested providers', () => {
      expect(
        shallow(
          <CartProvider>
            <div />
          </CartProvider>,
        ),
      ).toMatchSnapshot();
    });

    it('should have property value set to the cart state cart', () => {
      expect(
        shallow(
          <CartProvider>
            <div />
          </CartProvider>,
        )
          .find('ContextProvider')
          .first()
          .prop('value'),
      ).toMatchObject({ articles: {} });
    });
  });

  describe('useCartDispatch', () => {
    it('should be defined', () => {
      expect(typeof useCartDispatch).toBe('function');
    });
  });

  describe('useCartState', () => {
    it('should be defined', () => {
      expect(typeof useCartState).toBe('function');
    });
  });

  describe('useCart', () => {
    it('should be defined', () => {
      expect(typeof useCart).toBe('function');
    });
  });
});
