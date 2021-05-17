import { getArticlesListItem } from '../support/app.po';

describe('exercise-2', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getArticlesListItem(2).contains('Toyota Yaris');
  });
});
