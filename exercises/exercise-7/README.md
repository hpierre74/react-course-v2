# 7/ Providers cold shower, a global state struggle

| Action | Files                                                    | Exports                                                |
| ------ | -------------------------------------------------------- | ------------------------------------------------------ |
| CREATE | src/modules/user/user.actions.js                         | {login, logout}                                        |
| CREATE | src/modules/user/user.reducer.js                         | {initialState, userReducer}                            |
| CREATE | src/modules/user/user.context.js                         | {useUser, useUserState, useUserDispatch, UserProvider} |
| CREATE | src/modules/user/user.hook.js                            | {usePersistedUser}                                     |
| CREATE | src/modules/user/user.selectors.js                       | {getUser, isConnectedUser}                             |
| CREATE | src/modules/user/components/login.component.js           | {Login}                                                |
| CREATE | src/pages/login.page.js                                  | {LoginPage}                                            |
| CREATE | src/pages/checkout.page.js                               | {CheckoutPage}                                         |
| CREATE | src/modules/routing/routing.hooks.js                     | {useLoginRedirect}                                     |
| CREATE | src/modules/routing/routing.constants.js                 | {ROUTES_PATHS_BY_NAMES, PROTECTED_PATHS}               |
| CREATE | src/modules/routing/components/routes.component.js       | {AppRoutes}                                            |
| MODIFY | src/App.js                                               | {App}                                                  |
| MODIFY | src/modules/articles/components/articleCard.component.js | {ArticleCard}                                          |

## TL;DR

It's raining modules, let's create the user, checkout and routing ones !

We need a Checkout page but the user must be logged in to access it. So we also need a Login page.
We'll mock the user api and authentication process for now.
We need to be redirected to the login page but only from the checkout page.

## Step by step

To begin with, let's duplicate the **articles** modules and rename it user, it should be pretty step forward to adapt it.

### src/modules/user/user.actions.js

#### login

We need a **login** action creator, a thunk in this case.

```js
/**
 *
 * @param {string} email
 * @param {string} password
 */
export const login = (email, password) => async dispatch => {};
```

You need to:

- await a call from **signIn** API method with **email** and **password** as parameters to get the user value.
- Set the user in the localStorage under the key "user"
- return dispatch the **LOGIN** action type

#### logout

```js
export const logout = () => async (dispatch, getState) => {};
```

You need to:

- get the user value from the store using the **getUser** selector and **getState**
- call the **signOut** methods othe the API
- Remove the user from the localStorage
- return dispatch the **LOGOUT** action type with user as property

### src/modules/user/user.reducer.js

Super dummy reducer !

#### LOGIN

Catch the action **LOGIN** in a case (switch) and set user in the state from the **action.user** property

#### LOGOUT

Catch the action in a case (switch) **LOGOUT** and set user in the state to **null**

### src/modules/user/user.hooks.js

#### usePersistedUser

Dummy hook !

Returns the **user** from _localStorage_

### src/modules/user/user.selectors.js

#### isUserConnected

Takes the user context state as parameter and returns a boolean wether it is truthy or not.

#### getUser

Takes the user context state as parameter and returns the user entry from it.

### src/hooks/useInput.hooks.js

#### useInput

Create a stateful hook that returns the state value (input) and an **onChange** handler.
Basically you would use a control input this way

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

- Get dispatch from user context
- Integrate two **useInput** to control _email_ and _password_ TextFields
- Create a submit handler for the form that dispatch the **login action** with the **email** and **password**

### src/pages/login.page.js

#### LoginPage

- Create a classic page and add the **Login** component under the habitual layout.

### src/modules/routing/routing.constants.js

Let's do a clean enum for our routes and for our protected routes.

#### ROUTES_PATHS_BY_NAMES

Create an enum of _routePathsByNames_

:warning: The routes exhaustiveness is tested !

```js
export const ROUTES_PATHS_BY_NAMES = {
  foo: '/foo',
};
```

#### PROTECTED_PATHS

Create an enum of _routePathsByNames_

:warning: The routes exhaustiveness is tested !

```js
export const PROTECTED_PATHS = [ROUTES_PATHS_BY_NAMES.checkout];
```

### src/modules/routing/routing.hooks.js

#### useLoginRedirect

The main course of this exercise !
You need to figure out how to redirect the user whenever he is not logged in when he tries to access the checkout page.

You'll need to use `react-router-dom` **useLocation** for `pathname` checks and **useHistory** to get the `push` method.

This hook will only perform side effects, it will not return any value. It will use state and useEffects.

Good luck.
