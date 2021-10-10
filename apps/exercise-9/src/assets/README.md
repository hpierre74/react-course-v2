# 9/ Controlled Forms

| Action | Files                                                    | Exports       |
| ------ | -------------------------------------------------------- | ------------- |
| Modify | src/modules/checkout/checkout.component.js               | {Checkout}    |
| Modify | src/modules/checkout/components/review.component.js      | {Review}      |
| Modify | src/modules/checkout/components/addressForm.component.js | {AddressForm} |
| Modify | src/modules/checkout/components/paymentForm.component.js | {PaymentForm} |

## TL;DR

Let's create the controlled forms !

The **Stepper** gave us a nice UX for combining forms, now it's time to display the inputs and store their values in order to display those in the **Review** component.

Let's ask ourselves some questions:

- Where should we locate the state ?
- What other options do we have ?
- How can we reduce the re-renders ?

### :baguette_bread: Disclaimer: validation of this exercise doesn't include counting re-renders

You can use whatever state management method you want, now it's time to give you some slack building your desired solution. In fact, witnessing multiple re-renders on forms is a pretty common thing and doesn't necessarily affect the user experience, unless the user device capabilities are really low. Sometimes, even on low devices, using memoization technics (like memo, useCallback or useMemo) to avoid re-renders is degrading the user experience even more than letting those re-renders happening in the first place.

:point_left: Always build your solution before optimizing it. Sometimes, only do optimize it if you see the need.

:point_down: I'll only try to give hints before I dive into my chosen solution in the following instructions.

## Step by step

Let's say we actually want to store our state inside the Checkout component. It's the parent of all forms so, if we do actually control the input from there, it will make the Checkout and its children re-render every key press :scream:

Let's say we create a Provider around the Checkout component to store our forms states. We would face the same problem if we do control our inputs from the provider itself :thinking:

In these regards, a good solution would be to control some state locally in the input, locally in the form and locally in the parent state holder (be it the Checkout component or a Provider).

### 🧙 My solution

As we already did a lot of providers I wanted to experiment more with custom hooks and how to compose them so the next instructions will be about hooks. If you prefer a provider based solution, you can mix the solutions or go with your own entirely.

#### Rendering the inputs inside each form

As we have a nice collection to iterate over in each form

### src/modules/checkout/checkout.component.js

### src/modules/checkout/components/review.component.js

Review must access the payment and address forms states.
Retrieve all of those information inside

### src/modules/checkout/components/addressForm.component.js

### src/modules/checkout/components/paymentForm.component.js
