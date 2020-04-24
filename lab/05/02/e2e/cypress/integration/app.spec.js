describe('Test Demo app', () => {

    it('Open the app', () => {
        cy.visit('http://localhost:3000');
    });

    it('Add books to cart', () => {

        // Add 1st book
        cy.get('#category').select('Policier');
        cy.get('#item').select('Un avion sans elle (Michel Bussi)');
        cy.get('#btnAddToCart').click();

        // Add 2nd book
        cy.get('#category').select('Science-fiction');
        cy.get('#item').select('Le trône de fer (George RR Martin)');
        cy.get('#btnAddToCart').click();

        // Add 3rd book
        cy.get('#category').select('Policier');
        cy.get('#item').select('Dans le bois (Harlan Coben)');
        cy.get('#btnAddToCart').click();

        // Check total
        cy.get('#cartTotal').should('contain', '30.80 €');
    });

    it('Remove book from cart', () => {

        // TO BE IMPLEMENTED
        cy.get('#cart_item_0').click();
        cy.get('#cartTotal').should('contain', '19.80 €');

    });

    it('Fill Contact form', () => {

        // Check that button is disabled
        cy.get('#btnPay').should('be.disabled');

        // Fill form
        cy.get('#lastName').type('Doe');
        cy.get('#firstName').type('John');
        cy.get('#address').type('Abbey road');
        cy.get('#zipCode').type('12345');
        cy.get('#country').select('Ireland');

        // Check that button is enabled
        cy.get('#btnPay').should('not.be.disabled');
    });


    it('Pay', () => {

        cy.get('#btnPay').click();

        // Check that cart is empty
        cy.get('#cartTotal').should('contain', '0.00 €');

    });

})