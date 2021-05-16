import { useArticles } from './articles.context';
import { requestArticles } from './articles.actions';
import { useSelector } from '../../utils/context.utils';

export const useArticlesSelector = () =>
  useSelector(useArticles, ({ articles }) => articles, {
    shouldFetch: true,
    fetchCondition: articles => articles.length === 0,
    fetchAction: requestArticles,
  });
