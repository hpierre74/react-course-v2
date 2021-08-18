describe('home page', () => {

  it('should exist', () => {
    return cy.visit('/').then(() => cy.get('a[href="about"]').should('be.visible'));
  });
});
