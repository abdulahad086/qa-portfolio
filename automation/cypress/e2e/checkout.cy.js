describe('Checkout Test - Demo Web Shop', () => {
  it('should complete checkout as a guest', () => {
    cy.visit('https://demowebshop.tricentis.com/')
    
    // Add a product to cart (Books category)
    cy.contains('Books').click()
    cy.get('.product-item').first().click()
    cy.get('input[value="Add to cart"]').first().click()
    
    // Wait for the success notification
    cy.get('.bar-notification.success').should('be.visible')
    
    // Go to shopping cart
    cy.get('.ico-cart').first().click()
    
    // Agree to terms of service and click checkout
    cy.get('#termsofservice').click()
    cy.get('#checkout').click()
    
    // Select Checkout as Guest
    cy.get('.checkout-as-guest-button').click()
    
    // 1. Billing Address Step
    cy.get('#BillingNewAddress_FirstName').type('John')
    cy.get('#BillingNewAddress_LastName').type('Doe')
    cy.get('#BillingNewAddress_Email').type('johndoe123@test.com')
    cy.get('#BillingNewAddress_CountryId').select('1') // Selects United States
    cy.get('#BillingNewAddress_City').type('New York')
    cy.get('#BillingNewAddress_Address1').type('123 QA Street')
    cy.get('#BillingNewAddress_ZipPostalCode').type('10001')
    cy.get('#BillingNewAddress_PhoneNumber').type('1234567890')
    cy.get('#billing-buttons-container .new-address-next-step-button').click()
    
    // 2. Shipping Address Step (Re-uses billing address)
    cy.get('#shipping-buttons-container .new-address-next-step-button').click()
    
    // 3. Shipping Method Step (Default option)
    cy.get('#shipping-method-buttons-container .shipping-method-next-step-button').click()
    
    // 4. Payment Method Step (Default option - Cash On Delivery usually)
    cy.get('#payment-method-buttons-container .payment-method-next-step-button').click()
    
    // 5. Payment Information Step
    cy.get('#payment-info-buttons-container .payment-info-next-step-button').click()
    
    // 6. Confirm Order Step
    cy.get('#confirm-order-buttons-container .confirm-order-next-step-button').click()
    
    // Verify successful order completion
    cy.get('.title').should('contain', 'Your order has been successfully processed!')
  })
})