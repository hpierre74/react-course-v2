// import { getArticlesList } from '../support/app.po';

describe('exercise-2', () => {
  beforeEach(() => cy.visit('/'));

  it('should display each articles names', () => {
    cy.fixture('articles.json').then((articles) => {
      return articles.forEach(article => cy.getByDataTestId(`article-${article.id}`).contains(article.name));
    });
  })
});
