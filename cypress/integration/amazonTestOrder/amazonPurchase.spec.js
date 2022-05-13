describe('Placing an order for Zelda socks', () => {
    // Visits the base URL set in support and performs search
    it('Searches for Legend of Zelda socks', () => {      
        cy.visit('/')      
        cy.get('#twotabsearchtextbox').type('Legend of Zelda socks')     
        cy.get('#nav-search-submit-button').click()      
        cy.get('#twotabsearchtextbox').should('have.value', 'Legend of Zelda socks')
    }),
    
    // Confirming the add to cart was successful by seeing an item in the cart
    it('Finds an item and adds to cart', () => {
        cy.get('.a-link-normal').contains('Zelda').click()
        cy.get('#add-to-cart-button').click().wait(500)
        cy.get('#nav-cart-count-container').contains('1')
        cy.url().should('include', '/cart')
    }),

    // The account being logged into is a test account
    it('Logs in to purchase item', () => {    
        cy.get('#sc-buy-box-ptc-button').click()
        cy.get('#ap_email').type('3373660089')
        cy.get('#continue').click()
        cy.get('#ap_password').type('Welcome1!')
        cy.get('#signInSubmit').click()
    }),

    // This test was written to fail since we cannot go any further in the process
    it('Shows pickup options', () => {    
        cy.get('.a-link-normal').contains('pickup').click()
    })  
});
