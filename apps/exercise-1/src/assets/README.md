# 1/ Fetching, persisting data locally and list rendering

| Action | Files      | Exports |
| ------ | ---------- | ------- |
| MODIFY | src/App.js | App     |

## TL;DR

Build the JSX: Create a defined markup structure.

HTML desired output

```html
<div>
  <h2>Foo</h2>
  <div>
    <h4>bar</h4>
    <ul data-testid="articles-list">
      <li>baz</li>
      <li>boz</li>
    </ul>
  </div>
</div>
```

## Step by step

### App.js

- Fetch the articles: use a combination of useState and useEffect to perform the async call and persist the data. You can import the asynchronous method **getArticles** from the api lib.
- Update the JSX: iterate over the articles using `.map` to display the item name in the `<li></li>`
- `yarn test exercise-1`
