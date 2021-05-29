import { useCart, useCartState, useCartDispatch } from '../cart.context';

describe('cart.context', () => {
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
