describe('Visiting the page', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/tricks', {
      statusCode: 200,
      fixture: '/example.json',
    });
    cy.visit('localhost:3000')
  });

  it('sees the elements on the home page', () => {
    cy.get('h1').should('contain', 'Sick Trick Wish List')
    cy.get('form').should('exist')
      .get('form select').should('have.length', 2)
      .get('form input[type="text"]').should('have.length', 2)
      .get('form button[type="submit"]').should('exist')
      .get('form select').first().find('option').its('length').should('eq', 3)
      .get('form input[type="text"]').first().should('have.attr', 'placeholder', 'Name of Trick')
      .get('form select').last().find('option').its('length').should('eq', 6)
      .get('form input[type="text"]').last().should('have.attr', 'placeholder', 'Link to Tutorial')
    cy.get('.trick-section').children('div').should('have.length', 4)
  });

    it('sees the trick cards', () => {
    cy.get('.trick-section')
    .get('.trick-section div').first().get('p').first().contains('regular treflip')
  });
});
