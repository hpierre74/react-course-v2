# 6/ Partager les states entre providers et composants

| Action   | Fichiers                                                 | Exports                                                    |
| -------- | -------------------------------------------------------- | ---------------------------------------------------------- |
| CRÉER    | src/modules/cart/cart.actions.js                         | {addToCart, removeFromCart, ADD_TO_CART, REMOVE_FROM_CART} |
| CRÉER    | src/modules/cart/cart.reducer.js                         | {initialState, cartReducer}                                |
| CRÉER    | src/modules/cart/cart.context.js                         | {useCart, useCartState, useCartDispatch, CartProvider}     |
| CRÉER    | src/modules/cart/components/cart.component.js            | {Cart}                                                     |
| CRÉER    | src/modules/cart/components/cartLayout.component.js      | {CartLayout}                                               |
| MODIFIER | src/App.js                                               | {App}                                                      |
| MODIFIER | src/pages/home.page.js                                   | {HomePage}                                                 |
| MODIFIER | src/modules/articles/components/articleCard.component.js | {ArticleCard}                                              |

## En résumé

Créons le module Cart !

Nous avons besoin d'un panier visible à tout moment pendant notre navigation à travers cette brillante application de shopping.

Pensons au HTML dans un premier temps. C'est un _aside_ à côté d'une _section_.

Où devons nous le ranger ? C'est un module, mais que nous devons instancier dans la page. On va donc devoir rajouter des conteneurs à chaque
page. Nous avons 2 options.

- Créer un composant **CartLayout**, qui pourra ainsi etre utilisé dans les pages
- Créer un HOC (Higher order Component), pour ajouter ce layout

Les deux solutions sont proches mais n'ayant pas besoin de bricoler les props, simplement de rajouter un peu de JSX, un composant
fera l'affaire. Si nous devions en plus modifier les props ou ajouter de la logique, un HOC aurait été plus approprié.

## Pas à pas

Pour commencer, dupliquer le module **articles**, et le renommer en **cart**, ca ne sera pas compliqué de l'utiliser comme base.

### src/modules/cart/cart.actions.js

Supprimer tout ce qui concernait les articles.
Créer 2 actions types, des constantes en somme, **ADD_TO_CART** et **REMOVE_FROM_CART**
Créer 2 fonctions simples qui retournent des objets d'action:

- **addToCart** prend `article` comme unique paramètre et retourne un objet avec les propriétés `article` et `type`.
- **removeFromCart** prend `article` comme unique paramètre et retourne un objet avec les propriétés `id` et `type`.

### src/modules/cart/cart.reducer.js

Un panier de shopping, ce n'est rien de très compliqué à developper, mais nous devons laisser au moins la possibilité à l'utilisateur
d'incrémenter ou de décrémenter la quantité de chaque article présent dans celui-ci. On va utiliser les reducers pour ça.
Vous pourriez être tenté d'utiliser une liste, sur laquelle vous pourriez itérer, utiliser des `push` et `slice`... Pourquoi pas.
Malgré tout cela risque de couter un peu de calcul et sera difficilement lisible.

Au lieu de ça nous allons créer un objet qui contiendra les ids des articles en clé, et en valeur l'objet article surchargé d'une
propriété `occurences`.

Créer et exporter le state initial `{ articles: {}}`
On s'occupe ensuite dans ce reducer des 2 actions créées dans `cart.actions`

Sur ADD_TO_CART:

- Vérifier qu'il existe un article dans le state correspondant à l'article id récupéré depuis l'action: `state.aticles[action.article.id]`. Si la condition est fausse retourner le state en rajoutant l'article aux articles existants (utiliser l'id comme clé): `return { ...state, articles: { ...state.articles, [action.article.id]: action.article } }`
- Sinon, c'est que nous avons déjà notre article dans le state. On va alors simplement mettre à jour son nombre d'occurence.

On REMOVE_FROM_CART:

- Soit le nombre d'occurence d'un article est superieur à 1, auquel cas il faut la décrémenter.
- Soit le nombre d'occurence est inferieur ou égal à 1, auquel cas il faut supprimer l'article et retourner le nouveau state, cet article
  en moins.
