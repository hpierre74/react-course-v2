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

Let's create the checkout modules !

We need a Checkout page that needs a logged in user. So we also need a Login page.
We'll mock the user api and authentication process for now.
We need to bo redirected to the login page on some routes, not all.

## Step by step

To begin with, let's duplicate the **articles** modules and rename it user, it should be pretty step forward to adapt it.

### src/modules/checkout/checkout.component.js
