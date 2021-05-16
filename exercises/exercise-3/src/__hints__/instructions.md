# 3/ Wrapping pages, building layout with Material-UI

| Action | Files                              | Exports       |
| ------ | ---------------------------------- | ------------- |
| Create | src/components/layout.component.js | {Layout}      |
| Modify | src/pages/contact.page.js          | {ContactPage} |
| Modify | src/pages/about.page.js            | {AboutPage}   |
| Modify | src/pages/home.page.js             | {HomePage}    |
| Modify | src/App.js                         | {App}         |

## TL;DR

Now we are going to add some structure to the page, we need a page container component that is responsible for displaying the header (navbar) and the body (content) correctly.

## Step by step

- See the newly created `src/components` directory, with the file `navbar.component.js` from material-ui examples
- Add a `layout.component.js` to the "components" directory, it will export a function `Layout` and directly return a Fragment holding the Navbar and a Material-UI Container rendering children.
- In each page component, replace the div parent with the Layout Component, it is the pages container
- In about and contact pages, add a Material-UI Box component to wrap the h2 and the Link. Use a MUI `<Button component={Link} to='' />` instead of the simple Link
