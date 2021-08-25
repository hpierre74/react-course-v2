import {
  useArticles,
  useArticlesState,
  useArticlesDispatch,
} from '../articles.context';

describe('articles.context', () => {
  describe('useArticlesDispatch', () => {
    it('should be defined', () => {
      expect(typeof useArticlesDispatch).toBe('function');
    });
  });

  describe('useArticlesState', () => {
    it('should be defined', () => {
      expect(typeof useArticlesState).toBe('function');
    });
  });

  describe('useArticles', () => {
    it('should be defined', () => {
      expect(typeof useArticles).toBe('function');
    });
  });
});
