describe('Cart Test - Demo Web Shop', () => {

  it('should add product to cart', () => {

    cy.visit('https://demowebshop.tricentis.com/')

    // Click first product (Books example category)
    cy.contains('Books').click()

    // Select first product
    cy.get('.product-item').first().click()

    // Add to cart
    cy.get('input[value="Add to cart"]').first().click()

    // Wait for the success notification to ensure item is added
    cy.get('.bar-notification.success').should('be.visible')


    // Go to cart
    cy.get('.ico-cart').first().click()

    // Verify cart has item
    cy.get('.cart-item-row').should('exist')
  })

})