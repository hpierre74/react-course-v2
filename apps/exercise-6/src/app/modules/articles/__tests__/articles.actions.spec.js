import { RECEIVED_ARTICLES, requestArticles } from '../articles.actions';

jest.mock('../../../utils/api.utils', () => ({
  getArticles: jest.fn().mockResolvedValue('foo'),
}));

describe('articles.actions', () => {
  let dispatch;
  beforeEach(() => {
    dispatch = jest.fn();
  });

  it('should dispatch getArticles result', async () => {
    await requestArticles()(dispatch);
    expect(dispatch).toBeCalledWith({
      type: RECEIVED_ARTICLES,
      articles: 'foo',
    });
  });
});
