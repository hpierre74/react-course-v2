describe('exercise-1', () => {
  beforeEach(() => cy.visit('/'));

  it('should launch app without errors', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');
  });
});
