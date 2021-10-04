# 4/ Composition de composants, architecture des modules; comprendre les responsabilités

| Action   | Fichiers                                       | Exports        |
| -------- | ---------------------------------------------- | -------------- |
| CRÉER    | src/modules/articles/articleCard.component.js  | {ArticleCard}  |
| CRÉER    | src/modules/articles/articlesList.component.js | {ArticlesList} |
| MODIFIER | src/pages/home.page.js                         | {HomePage}     |

## En résumé

Nous allons nous occuper de 2 choses:

- afficher les articles sous forme de Cards
- bouger la logique liée aux articles dans un dossier dédié

Ce n'est pas super d'avoir toute notre **code lié au requetage et au rendu des articles** dans la page d'accueil. Nous pourrions en avoir
besoin ailleurs, ou plus simplement, cela peut nuir à la clareté... Faisons le ménage dans cette page d'accueil, enlevons les "states" et
"effects", ainsi que le JSX qui concerne les articles, et migrons les dans un répertoire appelé **modules**.

### Qu'est-ce que des modules ?

Les **Modules** sont des **fonctionnalités**, ça contient les **règles métier**.

> Le composant `Layout` que nous venons de créer, est dans le dossier `components` car il est générique et ne contient pas de logique.
> Par opposition aux composant qui ont des effets de bord, comme le requêtage de données.
> Cela n'a pas grande importance si le composant contient des _useEffect_ ou des _useState_. Ce qui en a par contre, c'est est-ce que tout
> ceci correspond à une feature ?
> Dans les faits, les architectures contiennent souvent un dossier **modules**, **features** ou encore **services**, qui contient la logique
> métier. Quand l'application utilise Redux, c'est souvent la que les reducers, les actions, les thunks et autres s'installent.

## Pas à pas

### src/modules/articles/articleCard.component.js

#### ArticleCard

Créer `src/modules/articles/articleCard.component.js` grâce à l'exemple [Card MUI example](../../../examples/styling/material-ui/card.component.js), **ArticleCard** prendra l'article (voir API /fixtures/articles.json) à travers la prop _article_.
Vous aurez probablement du texte _lorem ipsum_ à remplacer, regardez les tests.

### src/modules/articles/articlesList.component.js

#### ArticlesList

Créer `src/modules/articles/articlesList.component.js` qui exporte une fonction **ArticlesList**.
Sortir ensuite les "states", "effects" et le markup associé aux articles de la page d'accueil, et mettez les dans `ArticlesList`.
Remplacter le _ul_ par un _GridContainer_, ce doit être l'élement le plus haut de **ArticlesList**.

```js
<Grid container spacing={4}></Grid>
```

Remplacer l'élément _li_ par le composant **ArticleCard**.
Utiliser l'`ArticlesList` dans la page d'accueil, tout doit visuellement rester comme avant.
