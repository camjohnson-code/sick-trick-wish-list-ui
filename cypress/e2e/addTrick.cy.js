describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/tricks', {
      statusCode:  200,
      body: {
        stance: 'Regular',
        name: 'New York Nut Buster',
        obstacle: 'Stairs',
        tutorial: 'https://www.youtube.com/watch?v=O5x-y-Y8Gzs',
        id:  12345
      }
    })

    cy.intercept('http://localhost:3001/api/v1/tricks', {
      statusCode: 200,
      fixture: '/example.json',
    });
    cy.visit('localhost:3000')
  });

  it('adds a trick to the list', () => {
    cy.get('form select').first().select('Regular')
      .get('form input').first().click().type('New York Nut Buster')
      .get('form select').last().select('Stairs')
      .get('form input').last().click().type('https://www.youtube.com/watch?v=O5x-y-Y8Gzs')
    cy.get('button').click()
    cy.intercept('http://localhost:3001/api/v1/tricks', {
      statusCode: 200,
      fixture: '/addedTrick.json',
    });
    cy.reload()
  })
})