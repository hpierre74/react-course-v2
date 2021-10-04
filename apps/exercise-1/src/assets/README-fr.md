# 1/ Requêter, persister la donnée localement et lister les éléments

| Action   | Fichiers   | Exports |
| -------- | ---------- | ------- |
| MODIFIER | src/App.js | App     |

## En résumé

Construire le JSX revient à définir une structure de markup.

Sortie HTML désirée:

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

## Pas à pas

### App.js

- Fetcher (requêter) les articles: utiliser une combinaison de _useState_ et _useEffect_ pour effectuer un appel asynchrone et persister la donnée localement. Utiliser la méthode `getArticles` de la librairie `@react-course-v2/api`:

```js
import { getArticles } from '@react-course-v2/api';
```

- Mettre à jour le JSX: itérer sur tous les articles en utilisant `.map`, pour afficher le nom des éléments dans la balise `<li></li>`
- `yarn test exercise-1 && yarn e2e exercise-1-e2e`
