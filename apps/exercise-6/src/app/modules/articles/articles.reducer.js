import { RECEIVED_ARTICLES } from './articles.actions';

export const initialState = {
  articles: [],
};

export const articlesReducer = (state, action) => {
  switch (action.type) {
    case RECEIVED_ARTICLES: {
      return { ...state, articles: [...state.articles, ...action.articles] };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
