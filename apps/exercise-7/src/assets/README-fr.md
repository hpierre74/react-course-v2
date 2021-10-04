# 7/ La douche froide des "providers" ou la lutte pour le state global

| Action   | Fichiers                                                 | Exports                                                |
| -------- | -------------------------------------------------------- | ------------------------------------------------------ |
| CRÉER    | src/modules/user/user.actions.js                         | {login, logout}                                        |
| CRÉER    | src/modules/user/user.reducer.js                         | {initialState, userReducer}                            |
| CRÉER    | src/modules/user/user.context.js                         | {useUser, useUserState, useUserDispatch, UserProvider} |
| CRÉER    | src/modules/user/user.hook.js                            | {usePersistedUser}                                     |
| CRÉER    | src/modules/user/user.selectors.js                       | {getUser, isConnectedUser}                             |
| CRÉER    | src/modules/user/components/login.component.js           | {Login}                                                |
| CRÉER    | src/pages/login.page.js                                  | {LoginPage}                                            |
| CRÉER    | src/pages/checkout.page.js                               | {CheckoutPage}                                         |
| CRÉER    | src/modules/routing/routing.hooks.js                     | {useLoginRedirect}                                     |
| CRÉER    | src/modules/routing/routing.constants.js                 | {ROUTES_PATHS_BY_NAMES, PROTECTED_PATHS}               |
| CRÉER    | src/modules/routing/components/routes.component.js       | {AppRoutes}                                            |
| MODIFIER | src/App.js                                               | {App}                                                  |
| MODIFIER | src/modules/articles/components/articleCard.component.js | {ArticleCard}                                          |

## En résumé

Il pleut des modules : créons ceux de l'utilisateur (user), de la caisse (chekout) et du routage (routing) !

Nous avons besoin d'une page de paiement mais l'utilisateur doit être connecté pour y accéder. Nous avons donc également besoin d'une page de connexion.
Nous allons bouchonner (mocker) l'API de l'utilisateur et du processus d'authentification pour le moment.
Nous devons être redirigés vers la page de connexion mais uniquement depuis la page de paiement.

## Pas à pas

Pour commencer, dupliquons le module **articles** sous le nom **user**, il sera plutôt simple de l'adapter.

### src/modules/user/user.actions.js

#### login

Nous avons besoin d'un "action creator" **login**, un thunk dans ce cas.

```js
/**
 *
 * @param {string} email
 * @param {string} password
 */
export const login = (email, password) => async dispatch => {};
```

Vous devez:

- await un appel à la fonction **signIn** récupérer depuis la librairie `@react-course-v2/api` qui prend **email** et **password** en paramètre pour récupérer l'utilisateur.
- Assigner l'utilisateur dans lo localStorage sous la clé "user".
- retourner un appel à dispatch avec pour type **LOGIN**.

#### Déconnexion

```js
export const logout = () => async (dispatch, getState) => {};
```

Vous devez:

- Récupérer l'utilisateur depuis le store en utilisant le selecteur **getUser** et **getState**
- Appeler la méthode **signOut** de l'API
- Supprimer l'utilisateur du _localStorage_
- Retourner l'action avec le type **LOGOUT** et le user comme propriété

### src/modules/user/user.reducer.js

Chouette, un reducer super basique !

#### Connexion

Écouter l'action **LOGIN** dans le switch/case et assigner l'utilisateur dans le state à partir de la propriété user de l'action.

#### LOGOUT

Écouter l'action **LOGOUT** dans le switch/case et assigner null à l'utilisateur dans le state.

### src/modules/user/user.hooks.js

#### usePersistedUser

Chouette un hook super basique !

Retourne le **user** depuis le _localStorage_

### src/modules/user/user.selectors.js

#### isUserConnected

Prend le state du context "user" comme paramètre et retourne un booléen selon qu'il soit true ou false (`!!userState`)

#### getUser

Prend le state du context "user" comme paramètre et retourne l'entrée user depuis celui-ci.

### src/hooks/useInput.hooks.js

#### useInput

Créer un hook contenant un state qui retourne la valeur de ce state, et un handler **onChange**.
Ayez à l'esprit que vous aller utiliser un input de cette manière:

```js
export const MyForm = () => {
  // input type text expects a string
  const [inputValue, setInputValue] = useState('');

  const onChange = event => setInputValue(event.target.value);
...
};
```

### src/modules/user/components/login.component.js

#### Login

- Récupère le "dispatch" du context user
- Intégrer deux **useInput** pour controller les TextFields des champs _email_ et _password_
- Créer un callback "submit" pour le formulaire qui appelera "dispatch" avec le thunk de _login_ avec pour paramètres **email** et **password**

### src/pages/login.page.js

#### LoginPage

- Créer une page classique et ajouter le composant **Login** à l'intérieur du container `Layout`, comme d'habitude.

### src/modules/routing/routing.constants.js

Créons un "enum", afin d'utiliser proprement et de façon centrale nos routes et nos routes protégées.

#### ROUTES_PATHS_BY_NAMES

Créer un enum de _routePathsByNames_

:warning: L'exhaustivité des routes est testée !

```js
export const ROUTES_PATHS_BY_NAMES = {
  foo: '/foo',
};
```

#### PROTECTED_PATHS

Creer un tableau de _protectedRoutesPaths_

:warning: L'exhaustivité des routes protégées est testée !

```js
export const PROTECTED_PATHS = [ROUTES_PATHS_BY_NAMES.checkout];
```

### src/modules/routing/routing.hooks.js

#### useLoginRedirect

La partie la plus importante de cet exercice !
Vous devez trouver comment rediriger l'utilisateur s'il n'est pas loggué et qu'il tente d'accéder à la page de paiement.

Vous aurez besoin de **useLocation** depuis `react-router-dom` pour obtenir le `pathname`, et de **useHistory** depuis ce même
package pour obtenir la fonction `push`.

Ce hook ne fera que provoquer des effets de bord, il ne retournera rien. Vous devez utiliser _useState_ et _useEffect_.

Bonne chance !
