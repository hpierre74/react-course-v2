# 2/ Utiliser react-router-dom pour créer de nouvelles pages

| Action   | Fichiers                  | Exports       |
| -------- | ------------------------- | ------------- |
| Créer    | src/pages/home.page.js    | {HomePage}    |
| Créer    | src/pages/about.page.js   | {AboutPage}   |
| Créer    | src/pages/contact.page.js | {ContactPage} |
| Modifier | App.js                    | {App}         |

## En résumé

Nous allons créer un certain nombre de pages, et pour l'instant elles n'afficherons qu'un titre et un lien vers la page d'accueil.
La page d'accueil sera composé du contenu de notre précédent `App.js`, et des liens vers les autres pages. `App.js` contiendra
désormais le routage; les composants `BrowserRouter`, `Switch` et `Route` entre autres.

## Pas à pas

- Créer un dossier "pages", avec les fichiers {home,about,contact}.page.js
- Dans les fichiers `src/pages/about.page.js` et `src/pages/contact.page.js`, créer une div avec un h2, et un `Link` vers "/" (du package `react-router-dom`)
- Dans `src/pages/home.page.js`, copier tout le contenu depuis `App.js` et ajouter un composant `<Link />` vers les pages _about_ et _contact_, sous le h2.
- Dans `src/App.js`, utiliser BrowserRouter, Switch et Route comme dans l'exemple ci-dessous

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
