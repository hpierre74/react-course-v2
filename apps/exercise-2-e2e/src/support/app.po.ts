export const getArticlesList = () => cy.get('h1');
export const getArticlesListItem = index => cy.get('ul > li:nth-of-type(' + index + ')');
