import React from 'react';

import { articlesReducer, initialState } from './articles.reducer';

import { dispatchThunk } from '../../utils/context.utils';
import { CHILDREN_PROP_TYPES } from '../../constants/proptypes.constants';

const ArticlesStateContext = React.createContext();
const ArticlesDispatchContext = React.createContext();

const ArticlesProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(articlesReducer, initialState);
  const getState = React.useCallback(() => state, [state]);

  return (
    <ArticlesStateContext.Provider value={state}>
      <ArticlesDispatchContext.Provider value={dispatchThunk(dispatch, getState)}>
        {children}
      </ArticlesDispatchContext.Provider>
    </ArticlesStateContext.Provider>
  );
};

ArticlesProvider.propTypes = {
  children: CHILDREN_PROP_TYPES,
};

function useArticlesState() {
  const context = React.useContext(ArticlesStateContext);
  if (context === undefined) {
    throw new Error('useArticlesState must be used within a ArticlesProvider');
  }
  return context;
}

function useArticlesDispatch() {
  const context = React.useContext(ArticlesDispatchContext);
  if (context === undefined) {
    throw new Error('useArticlesDispatch must be used within a ArticlesProvider');
  }
  return context;
}

function useArticles() {
  return [useArticlesState(), useArticlesDispatch()];
}

export { ArticlesProvider, useArticles, useArticlesState, useArticlesDispatch };
