/// <reference types="cypress" />

import { When } from 'cypress-cucumber-preprocessor/steps';
import { getConstant } from '../../support/constants';

When('I log in', () => {
  cy.get(getConstant('connect login button')).click();
  cy.get(getConstant('email input')).type('foo@bar.com');
  cy.get(getConstant('password input')).type('yolo');
  cy.get(getConstant('login form')).submit();
});
