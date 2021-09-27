# 6/ Sharing state between providers and components

| Action | Files                                                    | Exports                                                    |
| ------ | -------------------------------------------------------- | ---------------------------------------------------------- |
| Create | src/modules/cart/cart.actions.js                         | {addToCart, removeFromCart, ADD_TO_CART, REMOVE_FROM_CART} |
| Create | src/modules/cart/cart.reducer.js                         | {initialState, cartReducer}                                |
| Create | src/modules/cart/cart.context.js                         | {useCart, useCartState, useCartDispatch, CartProvider}     |
| Create | src/modules/cart/components/cart.component.js            | {Cart}                                                     |
| Create | src/modules/cart/components/cartLayout.component.js      | {CartLayout}                                               |
| Modify | src/App.js                                               | {App}                                                      |
| Modify | src/pages/home.page.js                                   | {HomePage}                                                 |
| Modify | src/modules/articles/components/articleCard.component.js | {ArticleCard}                                              |

## TL;DR

Let's create the Cart module !

We need a Shopping Cart that is fixed and stays with us along our navigation through our incredibly fascinating Shopping App.

Let's think of it as HTML first, it's like the aside of a section.

Where should it belong ? It's a module, of course, but it should be instantiated at a page level, and it kinda bring the need to add some wrapper, flex and box sizing to every pages.
We have two options:

- Create a **CartLayout** components as a parent for the pages content, just like the page wrapper **Layout**
- Create a HOC (Higher order Component), to add the said Layout.

The two solutions are very similar but, in our case, the only thing we need is some reusable jsx across pages, it's a regular Component role to needs, rather than adding logic or interact with props, which would fit more with a HOC.

## Step by step

To begin with, let's duplicate the **articles** modules and rename it cart, it should be pretty step forward to adapt it.

### src/modules/cart/cart.actions.js

Remove everything from the past articles.
Create two action creators **ADD_TO_CART** and **REMOVE_FROM_CART**
Create two simple methods that returns straight object actions. **addToCart** takes `article` as only parameter and returns `article` as property in the action.
**removeFromCart** takes `article` as only parameter and returns id as property in the action

### src/modules/cart/cart.reducer.js

A Shopping Cart is nothing too ambitious to build but you need at least to let users increment and decrement the shopping items they added to the cart. The reducer is in charge of those calculations.
You could be tempted to think of it as a list, an array you'd map around to display some `<li></li>`. You could push and slice, why not.
But, while this is possible, this would demand a lot of calculations at each update and won't be very readable.

A _Map_, or in our case an object with articles ids as keys suits better our needs, we can increment and decrement the articles in the cart by attaching a property `occurrences` to them in the state.

Create and export the initial state `{ articles: {}}`
Catch the two actions created in cart.actions

On ADD_TO_CART:

- Check if there is an **id** corresponding to the **action.article** one, if so, return early by setting the **action.article** in the articles, using **action.id** as key.
- Afterwards, it means we have found an existing similar article in the state, so we only need to get its number of occurrences in the state. As we haven't set it on the first article we got in the early return, it means the value of `state.articles[article.id].occurrences` is _undefined_ when you are adding a second occurrence. Only modify the number of occurrences of the matching article in the state.

On REMOVE_FROM_LIST:

- Start by checking if the property **occurrences** of the `state.articles[action.id]` is set to a number superior to 1. If so return the state with this given article occurrences decremented by one.
- Otherwise, the value **occurrences** is either nil or 1, meaning this time you need to completely delete the matching article entry from the state instead of decrementing its **occurrences**. Return the state with the remaining articles.
