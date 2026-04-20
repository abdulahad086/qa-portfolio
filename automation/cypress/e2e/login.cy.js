describe('Login Test - Demo Web Shop', () => {
  it('should login with valid credentials', () => {

    cy.visit('https://demowebshop.tricentis.com/')

    cy.get('.ico-login').click()

    cy.get('#Email').type('aahad8641@gmail.com')
    cy.get('#Password').type('12345678')

    cy.get('input[value="Log in"]').click()

    cy.get('.ico-logout').should('be.visible')
  })
})
