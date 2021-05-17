describe('user', () => {
  beforeEach(() => cy.visit('/login'))
  describe('login', () => {
    it('should login user', () => {expect(true).to.be.true});
    it('should logout user', () => {expect(true).to.be.true});
  })

})
