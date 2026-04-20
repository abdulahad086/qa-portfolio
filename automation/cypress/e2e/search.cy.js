describe('Search Test - Demo Web Shop', () => {
  it('should search for a product and display results', () => {
    cy.visit('https://demowebshop.tricentis.com/')
    
    // Type in the search box
    cy.get('#small-searchterms').type('computer')
    
    // Click the search button
    cy.get('input[value="Search"]').click()
    
    // Verify that search results are displayed
    cy.get('.search-results').should('be.visible')
    
    // Verify that at least one product is returned
    cy.get('.product-item').should('have.length.greaterThan', 0)
  })
})