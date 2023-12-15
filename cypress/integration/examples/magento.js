/// <reference types ="cypress"/>


describe('test the total amount ', () => {
    it('mens-tops-hodiles and sweatshirts', () => {
        cy.visit("https://magento.softwaretestingboard.com/")

        
        cy.get('#ui-id-5').click()
        cy.get('.categories-menu > :nth-child(2) > :nth-child(1) > a').click()
        cy.get(':nth-child(6) > .field > .control > #limiter').select('24')

        cy.get(".price-box").as("PriceOfHodiles")
        cy.get("@PriceOfHodiles").find(".price").invoke("text").as("ItemPrice")
        cy.get("@ItemPrice").then((pricetext)=>{
       let mylistofprice = pricetext.split("$")
       let total = 0

for (let i = 0; i < mylistofprice.length; i++) {
    cy.log(mylistofprice[i]) ;

    total+=Number(mylistofprice[i])
  
    
}

cy.log(total+" " +"this is price")
        }) 
    });
});