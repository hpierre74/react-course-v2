# 5/ Event Driven Design and shared store, the Redux philosophy within React Context

| Action   | Fichiers                                                      | Exports                                                                |
| -------- | ------------------------------------------------------------- | ---------------------------------------------------------------------- |
| DÉPLACER | src/modules/articles/{->components/}articleCard.component.js  | {ArticleCard}                                                          |
| DÉPLACER | src/modules/articles/{->components/}articlesList.component.js | {ArticlesList}                                                         |
| CRÉER    | src/pages/article.page.js                                     | {ArticlePage}                                                          |
| CRÉER    | src/modules/articles/articles.actions.js                      | {addToCart, removeFromCart, ADD_TO_CART, REMOVE_FROM_CART}             |
| CRÉER    | src/modules/articles/articles.reducer.js                      | {initialState, articlesReducer}                                        |
| CRÉER    | src/modules/articles/articles.context.js                      | {useArticles, useArticlesState, useArticlesDispatch, ArticlesProvider} |
| CRÉER    | src/modules/articles/articles.selectors.js                    | {useArticlesSelector}                                                  |
| CRÉER    | src/modules/articles/components/article.component.js          | {Article}                                                              |
| MODIFIER | src/App.js                                                    | {App}                                                                  |

## En résumé

:information_source: Une petite introduction théorique à la notion d'**actions**.

Les actions ne sont pas des choses mystérieuses, loin s'en faut, mais elles peuvent se révéler compliquées à comprendre, à prime abord, à cause de leurs multiples formats.

- La définition de base d'une action: un objet avec une propriété "type" de type _string_ `const action = { type: 'foo' }`.
- On peut utiliser le mot "action" alors qu'en réalité on ne parle que du type de l'action => 'foo' pour l'exemple plus haut. C'est néanmoins un abus, on doit dire `actionType`.
- On peut utiliser le mot "action" pour parler de l'évènement qui l'a déclenché, car comme les évènements javascript, une action est déclenchée et envoyée (dispatched).
- On peut utiliser le mot "action" comme on parlerait d'un appel de fonction, ayant différents formats il n'est pas rare de trouver à la fois des objets, des fonctions pures ou des thunks qui sont _in fine_ tous des actions :exploding_head:
- On peut utiliser le mot "action" pour parler d'un thunk, une fonction qui peut effectuer des effets de bords (par exemple des appels API) en plus d'envoyer (dispatch) des actions (pouvant elles aussi être des thunks) :exploding_head: :exploding_head: :exploding_head:

Pas d'inquiétude, voici quelques exemples pour illustrer ces propos:

```js
// L'action la plus simple, un objet.
const duStuffAction = { type: 'foo', payload: 'bar', baz: 'boz' };
dispatch(doStuffAction);

/**
 * -----------------------------------------------------------------------
**/

// Un autre type d'action simple, qui retourne un objet directement à dispatch.
const doStuff = (payload) = ({ type: 'foo', payload: 'bar', baz: 'boz' });
dispatch(doStuff());

/**
 * -----------------------------------------------------------------------
**/

// Toujours valide en utilisant des sélecteurs...
const doStuff = (dispatch, getState) => {
  const foo = getFoo(getState());

  return dispatch({ type: 'foo', payload: foo, baz: 'boz'});
}

// ailleurs dans le code
dispatch(doStuff)

/**
 * -----------------------------------------------------------------------
**/

// Thunk, pas obligatoirement asynchrone au passage
const doStuff = () = async dispatch => {
  const baz = await getBoz()
  return dispatch({ type: 'foo', payload: 'bar', baz });
}
// appelée ailleurs dans le code
await dispatch(doStuff())

/**
 * -----------------------------------------------------------------------
**/

// un thunk du monde réel
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
// ailleurs dans le code
await dispatch(doManyStuff())
```

## Pas à pas

### articles.actions.js

Créer `src/modules/articles/articles.actions.js`

Le fichier doit contenir un export de `requestArticles` une fonction de première classe (Higher order Function https://developer.mozilla.org/fr/docs/Glossary/First-class_Function). La fonction ne prend pas de paramètre au premier appel et prend `dispatch` comme seul paramètre au deuxième appel (voir les exemples de thunk).
Dans le corps de la fonction, un appel attendu (async/await) à `getArticles` de la librairie `@react-course-v2/api`.
Le retour de la fonction doit être un appel à dispatch (récupéré en paramètre de la deuxième fonction renvoyée) avec un objet dont la propriété "type" est égale à `articles/RECEIVED_ARTICLES` et la propriété "articles" égale à la résolution de l'appel à `getArticles`.

### articles.reducer.js

Créer `src/modules/articles/articles.reducer.js`

Un reducer ressemble à cela:

```js
import { SOME_ACTION_TYPE } from './foo.actions';

export const initialState = { someMeaningfulKey: null, otherThing: true };

export const reducerFoo = (state = initialState, action) => {
  switch (action.type) {
    case SOME_ACTION_TYPE:
      return {
        ...state,
        someMeaningfulKey: action.payload,
        otherThing: action.bar,
      };
    default:
      return state;
  }
};
```

Les propriétées accessibles dans l'objet **action** sont les mêmes que celles passées à dispatch.

```js
export const someAction = data => (dispatch, getState) => {
  const isBar = isBarSelector(getState());
  return dispatch({ type: SOME_ACTION_TYPE, payload: data, bar: isBar });
};
```

Un object **initialState** doit être exporté:

```js
export const initialState = {
  articles: [],
};
```

Une fonction _reducer_ **articlesReducer** doit être exportée.

```js
export const articlesReducer = (action, state) => {
  // Effectuer des changements dans le state selon l'action mais toujours retourner le state (modifié ou non).
  return state;
};
```

Écouter le type **RECEIVED_ARTICLES** et _spread_ la propriété `articles` de l'action dans le state.

### articles.context.js

Créer `src/modules/articles/articles.context.js`
Copier simplement [ce morceau de code](https://kentcdodds.com/blog/how-to-use-react-context-effectively#conclusion), nos implémentations de reducer/context sont basées dessus.

### articles.selectors.js

Créer `src/modules/articles/articles.selectors.js`. Dans redux, un sélecteur est une fonction qui prend le state en paramètre et retourne une valeur contenue dedans, ou toutes autres valeures récupérées en utilisant le state. Dans notre cas, quelque chose comme ça:

```js
const getArticlesSelector = state => state.articles;

const ArticlesList = () => {
  // useArticlesState nous vient du context.
  const articles = getArticlesSelector(useArticlesState());
};

// This could be implemented
const ArticlesList = () => {
  const articles = useArticlesStateWithSelector(getArticlesSelector);
};
```

Mais ce n'est pas très beau alors implémentons plutôt un custom hook générique _useSelector_ dans `src/utils/context.utils.js` qui reproduira la mécanique du _useSelector_ de redux, à la différence prêt que nous devons lui donner accès au state nous même.

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

OK, c'est super, c'est ce qu'on attendrait de redux, donc pourquoi pas. Mais vu que nous implémentons quelque chose de custom, autant en profiter pour que notre _useSelector_ soit sous stéroïde et soit aussi capable d'appeler un _callback_ si une condition est remplie. Le callback nous servira à requêter (fetch). Vous pouvez directement utiliser ceci :gift:

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

Nous avons besoin d'un composant basique pour gérer l'affichage de la page "article" à partir du _slug_ contenu dans l'url.

Créer le composant `src/modules/articles/components/article.component.js`

Il doit exporter `Article` (export nommé) un composant (fonction) avec une prop **id**.
Il doit utiliser notre `useArticlesSelector` pour récupérer les articles.
Il doit trouver l'article dont la prop **id** correspond au slug de l'url.
Il doit retourner l'article trouvé ou **null**

### article.page

Créer la page `src/pages/article.page.js`

Utiliser le même format que pour les pages about/contact mais ajouter notre composant `ArticlesList`.

### App.js

CRÉER une nouvelle route avant `/`, vous pouvez déclarer une route avec des paramètres d'url de cette façon:

```js
<Route path="/articles/:id">
  <ArticlePage />
</Route>
```

Encapsuler les deux routes qui concernent les articles dans leur propre **Switch** en prenant soin de refermer le précédent au dessus.
Vous devriez alors vous retrouver avec deux **Switch** frères (siblings).
Ajouter le composant **ArticlesProvider** autour (parent jsx) de vos routes d'articles.
Vous devriez maintenant avoir accès à ces routes en cliquyant sur les cartes ou en navigant directement sur leur url respective.
