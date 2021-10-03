# 9/ Persistance and initialization

| Action | Files                                                    | Exports                                                                               |
| ------ | -------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Create | src/hooks/useOnLeave.hook.js                             | {useOnLeave}                                                                          |
| Create | src/hooks/useStepperForm.hook.js                         | {useStepperForm}                                                                      |
| Create | src/hooks/useStepperFormChild.hook.js                    | {useStepperFormChild}                                                                 |
| Modify | src/modules/cart/cart.context.js                         | {CartProvider, useCart, useCartState, useCartDispatch}                                |
| Modify | src/modules/cart/cart.actions.js                         | {restoreCart, addToCart, removeFromCart, ADD_TO_CART, REMOVE_FROM_CART, RESTORE_CART} |
| Modify | src/modules/cart/cart.reducer.js                         | {initialState, cartReducer}                                                           |
| Modify | src/modules/checkout/components/addressForm.component.js | {AddressForm}                                                                         |
| Modify | src/modules/checkout/components/paymentForm.component.js | {PaymentForm}                                                                         |
| Modify | src/modules/checkout/components/checkout.component.js    | {Checkout}                                                                            |

## TL;DR

Now we want to use an actually working form in the checkout page so we can display a relevant bill (contact details mostly) at the user when the steps are done.

## Step by step

### src/modules/checkout/checkout.component.js

Do this

### src/modules/checkout/paymentForm.component.js

Do that

### src/modules/checkout/addressForm.component.js

Do thus
