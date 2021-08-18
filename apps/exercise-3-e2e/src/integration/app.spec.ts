describe('exercise-3', () => {

  it('should display each articles names', () => {
    cy.visit('/').fixture('articles.json').then((articles) => {
      return articles.forEach((article) =>
        cy.getByDataTestId(`article-${article.id}`).contains(article.name)
      );
    });
  });
});
