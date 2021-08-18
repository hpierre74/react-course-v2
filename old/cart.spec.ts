describe('cart', () => {
  beforeEach(() => cy.visit('/'));

  describe('additions', () => {
    it('should increment the same item', () => {
      // assert cart contains no item
      cy.get('item foo add button').click();
      // assert cart contains one item with one occurence
      cy.get('item foo add button').click();
      // assert cart contains one item with two occurences
      cy.get('item foo add button').click();
      // assert cart contains two items, one item with two occurences, the other one with one
    });
  })
});
