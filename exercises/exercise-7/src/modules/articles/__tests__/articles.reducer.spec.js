import { RECEIVED_ARTICLES } from '../articles.actions';
import { articlesReducer, initialState } from '../articles.reducer';

describe('articles.reducer', () => {
  it('should set articles in the state', () => {
    expect(
      articlesReducer(initialState, { type: RECEIVED_ARTICLES, articles: [1, 2, 3] }),
    ).toMatchObject({
      ...initialState,
      articles: [1, 2, 3],
    });
  });

  it('should spread the articles with state ones', () => {
    const state = {
      ...initialState,
      articles: [1, 2, 3],
    };

    expect(articlesReducer(state, { type: RECEIVED_ARTICLES, articles: [1, 2, 3] })).toMatchObject({
      ...initialState,
      articles: [1, 2, 3, 1, 2, 3],
    });
  });

  it('should throw when not passed articles iterable', () => {
    expect(() => articlesReducer(initialState, { type: RECEIVED_ARTICLES })).toThrow();
  });
});
