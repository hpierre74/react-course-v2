/// <reference types="cypress" />

import { Then } from 'cypress-cucumber-preprocessor/steps';
import { getConstant } from '../../support/constants';

Then('Cart total should be {int}', (price) => {
  cy.get(getConstant('cart total')).contains(`Total Price: ${price} $`);
});

Then(
  'Cart price for article {string} should be {int}',
  (constantName, price) => {
    cy.get(getConstant(constantName)).contains(`${price}`);
  },
);

Then(
  'Cart text for article {string} should be {string}',
  (constantName, text) => {
    cy.get(getConstant(constantName)).contains(text);
  },
);
