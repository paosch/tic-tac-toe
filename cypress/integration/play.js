describe('Play game', function() {
  it('Visits the game and play', function() {
    cy.visit('./index.html');
    cy.get('h1').should('have.text', 'Tic-tac-toe');
    cy.get('.reset-button').should('have.text', 'Reset');

    // Play the game by clicking on various squares
    cy.get('[data-grid-position="0-0"]').click();
    cy.get('[data-grid-position="0-0"]').should('have.text', 'O');

    // Click on the square with position 0-0 again which already has been clicked by 'O'
    cy.get('[data-grid-position="0-0"]').click();
    cy.get('[data-grid-position="0-0"]').should('not.have.text', 'X');

    // Continue playing the game by clicking on various squares
    cy.get('[data-grid-position="1-0"]').click();
    cy.get('[data-grid-position="1-0"]').should('have.text', 'X');
    cy.get('[data-grid-position="0-2"]').click();
    cy.get('[data-grid-position="0-2"]').should('have.text', 'O');
    cy.get('[data-grid-position="0-1"]').click();
    cy.get('[data-grid-position="0-1"]').should('have.text', 'X');
    cy.get('[data-grid-position="2-2"]').click();
    cy.get('[data-grid-position="2-2"]').should('have.text', 'O');
    cy.get('[data-grid-position="2-0"]').click();
    cy.get('[data-grid-position="2-0"]').should('have.text', 'X');
    cy.get('[data-grid-position="2-1"]').click();
    cy.get('[data-grid-position="2-1"]').should('have.text', 'O');
    cy.get('[data-grid-position="1-2"]').click();
    cy.get('[data-grid-position="1-2"]').should('have.text', 'X');
    cy.get('[data-grid-position="1-1"]').click();
    cy.get('[data-grid-position="1-1"]').should('have.text', 'O');

    // The game ended and has been won by "O"
    cy.get('.winner').should('have.text', '"O" has won the game');

    // Reset the game
    cy.get('.reset-button').click();
    cy.get('.winner').should('be.empty');
    [...Array(9)].forEach((_, i) => {
      cy.get('.square').eq(i).should('be.empty'); // prettier-ignore
    });
    //
    // // Start playing the game again by clicking on various squares
    // cy.get('[data-grid-position="1-0"]').click('');
    // cy.get('[data-grid-position="1-0"]').should('have.text', 'O');
    // cy.get('[data-grid-position="0-0"]').click();
    // cy.get('[data-grid-position="0-0"]').should('have.text', 'X');
    // cy.get('[data-grid-position="2-1"]').click();
    // cy.get('[data-grid-position="2-1"]').should('have.text', 'O');
    // cy.get('[data-grid-position="0-1"]').click();
    // cy.get('[data-grid-position="0-1"]').should('have.text', 'X');
    // cy.get('[data-grid-position="2-2"]').click();
    // cy.get('[data-grid-position="2-2"]').should('have.text', 'O');
    // cy.get('[data-grid-position="0-2"]').click();
    // cy.get('[data-grid-position="0-2"]').should('have.text', 'X');
    //
    // // The game ended and has been won by "X"
    // cy.get('.winner').should('have.text', '"X" has won the game');
    //
    // // Try to continue playing the game by clicking on various squares
    // cy.get('[data-grid-position="1-1"]').click();
    // cy.get('[data-grid-position="1-1"]').should('be.empty');
    // cy.get('[data-grid-position="1-2"]').click();
    // cy.get('[data-grid-position="1-2"]').should('be.empty');
    // cy.get('[data-grid-position="1-2"]').click();
    // cy.get('[data-grid-position="2-0"]').should('be.empty');
  });
});
