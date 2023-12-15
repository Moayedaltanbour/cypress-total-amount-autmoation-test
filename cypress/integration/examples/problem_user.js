/// <reference types ="Cypress" />


describe('test to login', () => {
    it('the test to by using user-name and password', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("problem_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()


        let expecteditems = 6 ;

        for(let i=0; i<expecteditems;i++){
        let myarray = cy.get("div#inventory_container").find(".btn").eq(i).click()
    }
        
    });
});