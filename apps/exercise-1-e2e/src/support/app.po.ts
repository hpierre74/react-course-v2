export const getArticlesListItem = index =>
  cy.get(`ul > li:nth-of-type(${index})`);
