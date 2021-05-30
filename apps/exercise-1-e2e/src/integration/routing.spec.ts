describe('routing', () => {
  describe('home', () => {
    it('should display a home page', () => {
      cy.visit('/');
      expect(cy.getByDataTestId('articles'));
      expect(cy.getByDataTestId('cart'));
    });
  });

  describe('contact', () => {
    it('should display a contact page', () => {
      cy.visit('/contact');
    });
  });

  describe('about', () => {
    it('should display a about page', () => {
      cy.visit('/about');
    });
  });

  describe('checkout', () => {
    it('should display a checkout page', () => {
      cy.visit('/checkout');
    });
  });

  describe('login', () => {
    it('should display a login page', () => {
      cy.visit('/login');
    });
  });

  // describe('article', () => {
  //   it('should display an article page', () => {
  //     cy.visit('/articles/foo');
  //   });
  // })
});
