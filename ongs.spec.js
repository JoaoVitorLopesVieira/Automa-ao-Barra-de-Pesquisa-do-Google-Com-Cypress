describe('Search for today\'s date on Google', () => {
    it('should open Google, search for today\'s date, and show results', () => {
     
      cy.visit('https://www.google.com');
  
     
      cy.get('input[name="q"]', { timeout: 10000 }).should('be.visible').type('que data é hoje?{enter}');
      
     
      cy.get('#search').should('contain.text', 'Hoje é');
  
      
    });
  });
  