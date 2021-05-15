import { addToCart, removeFromCart, ADD_TO_CART, REMOVE_FROM_CART } from '../cart.actions';

describe('cart.actions', () => {
  let dispatch;
  beforeEach(() => {
    dispatch = jest.fn();
  });

  it('should dispatch getArticles result', async () => {
    const article = { id: 'foo' };
    dispatch(addToCart(article));
    return expect(dispatch).toBeCalledWith({ type: ADD_TO_CART, article });
  });

  it('should dispatch getArticles result', async () => {
    dispatch(removeFromCart('foo'));
    return expect(dispatch).toBeCalledWith({ type: REMOVE_FROM_CART, id: 'foo' });
  });
});
