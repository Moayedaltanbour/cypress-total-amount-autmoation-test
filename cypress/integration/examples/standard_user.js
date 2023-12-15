/// <reference types ="Cypress"/>

describe('test the login process',()=>{
 it('this is to test by using user-name and password',()=>{
   
  
   cy.visit("https://www.saucedemo.com/")
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
   
 });

 it('to add all items to  the card', () => {
   cy.visit("https://www.saucedemo.com/")
   cy.get('[data-test="username"]').type("standard_user")
   cy.get('[data-test="password"]').type("secret_sauce")
   cy.get('[data-test="login-button"]').click()
   
   //cy.get("button.btn").click({ multiple: true })
   
    

   let expecteditems = 6; 

    for (let i = 0; i < expecteditems ; i++ ) {
      let myarray = cy.get('div#inventory_container').find(".btn").eq(i).click()


      
      
    }

  //cy.get("[data-test='add-to-cart-sauce-labs-backpack']").click()	
  
 cy.get('.shopping_cart_link').click()
  cy.get("[data-test='remove-sauce-labs-backpack']").click()
  cy.get('[data-test="checkout"]').click()
  cy.get('[data-test="firstName"]').type("Moayed")
  cy.get('[data-test="lastName"]').type("Altanbout")
  cy.get('[data-test="postalCode"]').type(222)
  cy.get('[data-test="continue"]').click()
  cy.get('[data-test="finish"]').click()
  
   
 });
})