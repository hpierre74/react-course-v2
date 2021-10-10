# 8/ Custom routing, good practices. Adding checkout

| Action | Files                                                    | Exports        |
| ------ | -------------------------------------------------------- | -------------- |
| Create | src/modules/checkout/checkout.component.js               | {Checkout}     |
| Create | src/modules/checkout/components/review.component.js      | {Review}       |
| Create | src/modules/checkout/components/addressForm.component.js | {AddressForm}  |
| Create | src/modules/checkout/components/paymentForm.component.js | {PaymentForm}  |
| Modify | src/App.js                                               | {App}          |
| Modify | src/pages/checkout.page.js                               | {CheckoutPage} |

## TL;DR

Let's create the checkout module !

We need a Checkout page that expects a logged in user. So we also need a Login page.
We'll mock the user api and authentication process for now.
We need to bo redirected to the login page on some routes, not all.

## Step by step

### src/modules/checkout/checkout.component.js

### src/modules/checkout/components/review.component.js

### src/modules/checkout/components/addressForm.component.js

### src/modules/checkout/components/paymentForm.component.js

### src/App.js

### src/pages/checkout.page.js
