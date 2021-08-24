# api

This library was generated with [Nx](https://nx.dev).

## Why

The `api` lib is here to serve as mock for server endpoints under the form of a SDK. We don't want to deal with a specific user provider nor create one for this course since we focus on React here.

## Usage

```js
import { signIn, signOut, getArticles } from '@react-course-v2/api';

// consider yourself logged in
await signIn(email, password);

// consider yourself logged out
await signOut(user);

// get the articles
const articles = await getArticles();
```

## Running unit tests

Run `ng test api` to execute the unit tests via [Jest](https://jestjs.io).
