import { useEffect } from 'react';

export const dispatchThunk = dispatch => param => {
  if (typeof param === 'function') {
    return param(dispatch);
  }

  return dispatch(param);
};

export const useSelector = (
  useReducerHook,
  selector = state => state,
  { shouldFetch = false, fetchCondition = element => !!element, fetchAction },
) => {
  if (!useReducerHook) {
    throw new Error(
      'You need to provide the reducer hook of this resource to get its state and dispatch',
    );
  }

  const [state, dispatch] = useReducerHook();

  const selectedValue = selector(state);

  useEffect(() => {
    if (shouldFetch && fetchCondition(selectedValue) && fetchAction) {
      dispatch(fetchAction());
    }
  }, [dispatch, selectedValue, shouldFetch, fetchCondition, fetchAction]);

  return selectedValue;
};
