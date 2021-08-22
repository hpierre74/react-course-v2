/// <reference types="cypress" />

import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { getConstant } from '../../support/constants';

Then('I should see {string}', constantName => {
  cy.get(getConstant(constantName));
});

Then('I should not see {string}', constantName => {
  cy.get(getConstant(constantName)).should('not.be.visible');
});

And('{string} should match our snapshot', constantName => {
  const selector = getConstant(constantName);

  cy.get(selector).matchImageSnapshot();
});

Then('{string} should contain {string}', (selectorConstant, content) => {
  const selector = getConstant(selectorConstant);

  cy.get(selector).contains(content);
});

Then('I should see {int} articles', itemNumber => {
  cy.get('articles list').children().should('have.length', itemNumber);
});
