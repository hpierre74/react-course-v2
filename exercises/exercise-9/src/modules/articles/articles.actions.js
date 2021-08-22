import { getArticles } from '@react-course-v2/api';

export const RECEIVED_ARTICLES = 'articles/RECEIVED_ARTICLES';

export const requestArticles = () => async dispatch => {
  const articles = await getArticles();

  return dispatch({ type: RECEIVED_ARTICLES, articles });
};
