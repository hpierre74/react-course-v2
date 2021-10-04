# 3/ Encapsuler des pages, créer un contenant "layout" avec Material-UI

| Action   | Fichiers                           | Exports       |
| -------- | ---------------------------------- | ------------- |
| CRÉER    | src/components/layout.component.js | {Layout}      |
| MODIFIER | src/pages/contact.page.js          | {ContactPage} |
| MODIFIER | src/pages/about.page.js            | {AboutPage}   |
| MODIFIER | src/pages/home.page.js             | {HomePage}    |
| MODIFIER | src/App.js                         | {App}         |

## En résumé

Nous allons ajouter une structure commune a nos pages. Pour cela, nous avons besoin d'un composant _wrapper_ ou _container_ qui portera la responsabilité d'afficher l'entête (header) et le contenu (body) correctement.

## Pas à pas

- Jeter un oeil au dossier nouvellement créé `src/components`, et particulièrement le fichier `navbar.component.js` tiré des exemples material-ui
- Ajouter un `layout.component.js` au dossier "components", il doit exporter une fonction `Layout` et directement retourner un Fragment entourant la Navbar et un composant `Container` Material-UI qui rend ses enfants (props _children_).
- Dans chaque composant de page, remplacer la div parente par notre composant `Layout`. C'est notre "Page Container" générique.
- Dans la page about et contact, ajouter un composant `Box` de Material-UI pour encapsuler le h2 et le `Link` Material-UI. Utiliser un Bouton de Material-UI `<Button component={Link} to='' />` à la place du `Link` seul.
