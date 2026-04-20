describe('Registration Test - Demo Web Shop', () => {
  it('should register a new user successfully', () => {
    cy.visit('https://demowebshop.tricentis.com/')
    
    // Navigate to registration page
    cy.get('.ico-register').click()
    
    // Generate a random email to prevent duplicate email errors
    const randomEmail = `testuser${Math.floor(Math.random() * 100000)}@test.com`;
    
    // Fill out the registration form
    cy.get('#gender-male').click()
    cy.get('#FirstName').type('John')
    cy.get('#LastName').type('Doe')
    cy.get('#Email').type(randomEmail)
    cy.get('#Password').type('Password123!')
    cy.get('#ConfirmPassword').type('Password123!')
    
    // Submit the form
    cy.get('#register-button').click()
    
    // Verify successful registration
    cy.get('.result').should('contain', 'Your registration completed')
  })
})