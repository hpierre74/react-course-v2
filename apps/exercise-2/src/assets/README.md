# 2/ Using react-router-dom to create pages

| Action | Files                     | Exports       |
| ------ | ------------------------- | ------------- |
| Create | src/pages/home.page.js    | {HomePage}    |
| Create | src/pages/about.page.js   | {AboutPage}   |
| Create | src/pages/contact.page.js | {ContactPage} |
| Modify | App.js                    | {App}         |

## TL;DR

We are going to create a few pages, for now each will display a simple title and link to home. The home page will be composed of the previous `App.js` content in addition to links to the other pages. App.js will now be used for routing, BrowserRouter, Switch and Route components will land here.

## Step by step

- Create a "pages" directory, with the files {home,about,contact}.page.js
- In `src/pages/about.page.js` and `src/pages/contact.page.js` files create a div with a h2 and a react-router-dom Link to /
- In `src/pages/home.page.js`, copy everything from _App.js_ and add `<Link />` components to about and contact page under the h2
- In `src/App.js`, use BrowserRouter, Switch and Route like the following example

```details-Give_me_a_hint_!
 
---js
export default Toto = () => {
  console.log('test');
  
  return null;
} 
---
 
```

```js
const Foo = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/baz'>
          <Baz>
        </Route>
        <Route exact path='/'>
          <Bar>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
```
