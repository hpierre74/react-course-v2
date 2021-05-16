# 5/ Event Driven Design and shared store, the Redux philosophy within React Context

| Action | Files                                                         | Exports                                                                |
| ------ | ------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Move   | src/modules/articles/{->components/}articleCard.component.js  | {ArticleCard}                                                          |
| Move   | src/modules/articles/{->components/}articlesList.component.js | {ArticlesList}                                                         |
| Create | src/pages/article.page.js                                     | {ArticlePage}                                                          |
| Create | src/modules/articles/articles.actions.js                      | {addToCart, removeFromCart, ADD_TO_CART, REMOVE_FROM_CART}             |
| Create | src/modules/articles/articles.reducer.js                      | {initialState, articlesReducer}                                        |
| Create | src/modules/articles/articles.context.js                      | {useArticles, useArticlesState, useArticlesDispatch, ArticlesProvider} |
| Create | src/modules/articles/articles.selectors.js                    | {useArticlesSelector}                                                  |
| Create | src/modules/articles/components/article.component.js          | {Article}                                                              |
| Modify | src/App.js                                                    | {App}                                                                  |

## TL;DR

A little introduction on **actions**

There are no cryptic things, but it can be exhausting at first because actions can be of many forms.

- The base action definition: an object with a type property set to a string.
- You can refer to an action while actually you only are talking about the action type => the string constant
- You can refer to an action as an event, like javascript ones, it can be triggered
- You can refer to an action as a function call as it always requires a dispatch call
- You can refer to an action as a thunk, an function that may perform side effects in addition to be able to dispatch action(s)

```js
// simplest, straight object
const duStuffAction = { type: 'foo', payload: 'bar', baz: 'boz' };
dispatch(doStuffAction);

// Methods that return directly an object works almost the same naturally
const doStuff = () = ({ type: 'foo', payload: 'bar', baz: 'boz' });
dispatch(doStuff());

// Also valid
const doStuff = (dispatch, getState) => {
  const foo = getFoo(getState());
  dispatch({ type: 'foo', payload: foo, baz: 'boz'});
}
dispatch(doStuff)

// Thunk, it is not necessarily async btw
const doStuff = () = async dispatch => {
  const baz = await getBoz()
  return dispatch({ type: 'foo', payload: 'bar', baz });
}
await dispatch(doStuff())

// real world thunk
const doManyStuffs = () => async (dispatch, getState) => {
  try {
    const state = getState();
    const userId = getUserId(state);
    const isLoggedIn = isConnected(state);

    dispatch({ type: 'any', foo: isConnected ? 'bar' : 'baz' });

    const anythingResult = await anything();
    fooBar(anythingResult);

    await dispatch({ type: 'thing'})
    return dispatch({ type: 'could', happen: true});

  } catch(error) {
    // handle errors
    monitorError(error);
    dispatch({ type: 'again?'});
  }
}
dispatch(doManyStuff())
```

## Step by step

### articles.actions.js

Create `src/modules/articles/articles.actions.js`

It should export a `requestArticles` curried function, no parameter on first call and async dispatch on second call.
The body of the function should be an awaited call to the `getArticles` API utils method.
The return statement should call dispatch with an object given properties "type" set to `articles/RECEIVED_ARTICLES` and "articles" set to the resolved promise of `getArticles` call.

### articles.reducer.js

Create `src/modules/articles/articles.reducer.js`

A reducer looks like this:

```js
import SOME_ACTION_TYPE from './foo.actions';

export const initialState = { someMeaningfulKey: null, otherThing: true };

export const reducerFoo = (state = initialState, action) => {
  switch (action.type) {
    case SOME_ACTION_TYPE:
      return { ...state, someMeaningfulKey: action.payload, otherThing: action.bar };
    default:
      return state;
  }
};
```

The property you access in **action** are the one you dispatched:

```js
export const someAction = data => (dispatch, getState) => {
  const isBar = isBarSelector(getState());
  return dispatch({ type: SOME_ACTION_TYPE, payload: data, bar: isBar });
};
```

It should export an **initialState** object

```js
export const initialState = {
  articles: [],
};
```

It should export an **articlesReducer** method

```js
export const articlesReducer = () => {};
```

Catch the **RECEIVED_ARTICLES** action type and spread the action articles payload in the state.

### articles.context.js

Create `src/modules/articles/articles.context.js`
Basically copy [This snippet](https://kentcdodds.com/blog/how-to-use-react-context-effectively#conclusion), our reducer/context implementation is based on it.

### articles.selectors.js

Create `src/modules/articles/articles.selectors.js`. In redux a selector is a function taking the state as parameter and returning a value from it, in our case something like:

```js
const getArticlesSelector = state => state.articles;

const ArticlesList = () => {
  const articles = getArticlesSelector(useArticlesState());
};

// This could be implemented
const ArticlesList = () => {
  const articles = useArticlesStateWithSelector(getArticlesSelector);
};
```

But this is not very pretty so lets implement redux useSelector in `src/utils/context.utils.js` at the difference that we need to give it access to state.

```js
export const useSelector = (useReducerState, selector = state => state) => {
  if (!useReducerState) {
    throw new Error(
      'You need to provide the reducer State of this resource to get its state and dispatch',
    );
  }

  const state = useReducerState();

  return selector(state);
};

// usage
const articles = useSelector(useArticlesState, getArticlesSelector);
```

This is great, this is what you would expect from redux, why not. But as e creating custom stateful hooks that we will reuse, why not implement a fetching effect whenever the state doesn't match a condition ?

```js
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

// usage in separate files
export const useArticlesSelector = () =>
  useSelector(useArticles, ({ articles }) => articles, {
    shouldFetch: true,
    fetchCondition: articles => articles.length === 0,
    fetchAction: requestArticles,
  });

const articles = useArticlesSelector();
```

### article.component

We need some basic component to handle displaying the article page from the slug in the url.

Create `src/modules/articles/components/article.component.js`

It should Named export `Article` as a function with on prop **id**
It should use your articles selector to get the articles
It should find in the articles the id matching the slug
It should return the article matching the slug or null

### article.page

Create `src/pages/article.page.js`

The page container, use the same format as about/contact page and append the ArticlesList at the end

### App.js

Create new route before `/`, you can declare route with parameters this way

```js
<Route path="/articles/:id">
  <ArticlePage />
</Route>
```

Wrap the two articles routes in their own Switch while closing the first one on the top.
You should get two siblings Switch.
Wrap the articles' routes' switch in your ArticlesProvider.
You should be able to access your routes by clicking on the cards or directly from their matching url
