describe('react-course-demo', () => {
  beforeEach(() => cy.visit('/'));

  it('should display Shopping App', () => {
    cy.get('header h6').contains('Shopping App');
  });
});
