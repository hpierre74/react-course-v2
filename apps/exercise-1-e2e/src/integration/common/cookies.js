/// <reference types="cypress" />

import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I am already logged in', () => {
  cy.setCookie('user', JSON.stringify({ username: 'foo', password: 'bar' }));
  localStorage.setItem(
    'user',
    JSON.stringify({ username: 'foo', password: 'bar' }),
  );
});

Given('Cookies are cleared', () => {
  cy.visit('/');
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.reload();
});

Then(
  'I should have a cookie named {string} containing {string}',
  (cookieName, cookieValue) => {
    cy.getCookies().then(cookies => {
      expect(cookies).to.be.an('array');
      const targetCookie = cookies.find(cookie => cookie.name === cookieName);

      expect(targetCookie)
        .to.be.an('object')
        .that.contains({ value: cookieValue });
    });
  },
);
