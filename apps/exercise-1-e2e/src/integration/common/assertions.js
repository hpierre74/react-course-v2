/// <reference types="cypress" />

import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { getConstant } from '../../support/constants';

Then('I should see {string}', (constantName) => {
  cy.get(getConstant(constantName));
});

Then('I should not see {string}', (constantName) => {
  cy.get(getConstant(constantName)).should('not.be.visible');
});

And('{string} should match our snapshot', (constantName) => {
  const selector = getConstant(constantName);

  cy.get(selector).matchImageSnapshot();
});

Then('{string} should have white background', (constantName) => {
  const selector = getConstant(constantName);

  cy.get(selector).should('be.white-background');
});

Then('{string} should contain {string}', (selectorConstant, content) => {
  const selector = getConstant(selectorConstant);

  cy.get(selector).contains(content);
});

Then('I should see article item {int} is focused', (itemNumber) => {
  cy.get('[data-testid="articles-list"] > *')
    .children()
    .eq(itemNumber - 1)
    .find('[data-testid="FocusFrame__RingElement"]')
    .should('be.white-border');
});
