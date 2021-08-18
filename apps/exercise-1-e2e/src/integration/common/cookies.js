/// <reference types="cypress" />

import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given('I am already logged in', () => {
  cy.log(localStorage.getItem('user'));
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.setCookie('user', 'bar');
  localStorage.setItem('user', 'bar');
});

When('Cookies are cleared', () => {
  console.info();
  cy.clearCookies();
  cy.clearLocalStorage();
  localStorage.removeItem('user');
  localStorage.removeItem('cart');
});

Then(
  'I should have a cookie named {string} containing {string}',
  (cookieName, cookieValue) => {
    cy.getCookies().then((cookies) => {
      expect(cookies).to.be.an('array');
      const targetCookie = cookies.find((cookie) => cookie.name === cookieName);

      expect(targetCookie)
        .to.be.an('object')
        .that.contains({ value: cookieValue });
    });
  },
);
