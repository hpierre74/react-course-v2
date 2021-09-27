# 4/ Component composition, modules architecture, understanding responsibility

| Action | Files                                          | Exports        |
| ------ | ---------------------------------------------- | -------------- |
| Create | src/modules/articles/articleCard.component.js  | {ArticleCard}  |
| Create | src/modules/articles/articlesList.component.js | {ArticlesList} |
| Modify | src/pages/home.page.js                         | {HomePage}     |

## TL;DR

We will do two things here:

- display the articles as Cards
- move the articles logic from the home page to a dedicated directory

It doesn't feel "react" to have our home page holding the articles **fetching and rendering logic**, after all we may need a list of articles on other pages sometimes ? Let's clean the home page from state, effect and **articles** related jsx, and move it into its own place, something called "**Modules**".

### What are modules

**Modules** are **features**, it holds **business rules**.

> The `Layout` component we just created, lies in the `components` directory because it is generic and holds no logic.
> As opposed to components that performs side-effects (like fetching data).
> It doesn't matter if the component is using _useState_ or _useEffect_, what matters is _is it a feature ?_ or more realistically _do I need redux on this?_
> In short, you will often see **modules/features** directories in react/redux applications, each of them is generally representing a portion of the global store.

## Step by step

### src/modules/articles/articleCard.component.js

#### ArticleCard

Create `src/modules/articles/articleCard.component.js` from the [Card MUI example](../../../examples/styling/material-ui/card.component.js), **ArticleCard** will get the article (see API /fixtures/articles.json) as prop _article_.
You'll only need to replace some of the _lorem ipsum_, see tests.

### src/modules/articles/articlesList.component.js

#### ArticlesList

Create `src/modules/articles/articlesList.component.js` that exports a function **ArticlesList**.
Then extract the state, effect and the articles markup from the home page and port it to your `ArticlesList`.
Replace the _ul_ with a _Grid Container_, it should be the top element in the **ArticlesList**

```js
<Grid container spacing={4}></Grid>
```

Replace the _li_ html markup with the **ArticleCard**.
Use `ArticlesList` inside the home page and everything should look like before.
