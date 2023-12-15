describe('this is test a for login ',()=>{
    it('the test login by using username and password',()=>{

     cy.visit('https://www.saucedemo.com/')
     cy.get('[data-test="username"]'). type("locked_out_user")
     cy.get('[data-test="password"]').type("secret_sauce")
     cy.get('[data-test="login-button"]').click()

    })
})

/// <reference types ="Cypress"/>

describe('check on the conect us', () => {

    // it.only is running test one only
    it('test one', () => {
        cy.visit ("https://automationteststore.com/")
       cy.get( "a[title='Flash Bronzer Body Gel'] "). click()
      cy.get("a[href='https://automationteststore.com/index.php?rt=content/contact']").click()
      // we use the unique attribute   cy.get("a[href='https://automationteststore.com/index.php?rt=content/contact']")
      cy.get('#ContactUsFrm_first_name').type("Moayed")
      cy.get("input[id='ContactUsFrm_email']").type ("moauij@gmail.com")
    // or using this is code   cy.get('#ContactUsFrm_email').type("moauij@gmail.com")

      cy.get("textarea[id='ContactUsFrm_enquiry']").type(" your service is not good")
    //  we use the id atribut or using for the extraction tis is code or   cy .get("textarea#ContactUsFrm_enquiry")
    // this is signal // search on the whole page 
    
    cy.get("button[title='Submit']").click()
    // we use the title atribute
    //    anything found as a number is better not to use so we use the  above code cy.get('.col-md-6 > .btn').click()

    cy.get('.mb40 > :nth-child(3)').should('have.text',"Your enquiry has been successfully sent to the store owner!")

    //cy.get("a[title='Continue']").click()


   // cy.document("a[title='Continue']").should("have.property","title")

    // the decument or page is conains on the title by using  cy.document("a[title='Continue']").should("have.property","title")
      
   //cy.document().should("have.property","title").and("eq",'Contact Us');
   //and is 2 testing on onter (هي عمل تيسين مع بعض)(and ))
    cy.title().should("include","Contact")
   // sure to find any word of the sentence in the title(title اللي بتضمن كلمة او موجود فيه Contact)
  cy.title().should("eq","Contact Us")
    // sure to find full title(بتضمن اللي موجود في title كامل ) 

    cy.location('href').should('include', 'https');
    //cy.location().its('href').should("include","Contact")

    cy.url().should("include","contact")
    //هاي اسهل طريقة لتجيب تتاكد من (url)


  });





it('test two', () => {
  
  cy.visit ("https://automationteststore.com/")

  //  promise part 

  cy.get (".prdocutname").contains("BeneFit Girl Meets Pearl").click().then(function(elemnt){
    console.log(elemnt.text()+ " "+"has been added ")
  })
});
  //cy.get("a[href*='product/category&path']").contains("Hair Care").click()
  //هاي عشان تضغط على Hair Care


  it.only('test three', () => {

    cy.visit ("https://automationteststore.com/")

  cy.get(".fixed_wrapper  .prdocutname").each((element,index,list)=>{

if (element.text().includes("Seaweed")) {

  cy.wrap(element).click()
  
}

  })



//هاي each تستخدم اذا كان اكثر من عنصر واستخدمنا الشرط اذا كانت تتضمن كلمة من هاي تضغط عليها 

  

cy.get(".fixed_wrapper .prdocutname").eq(0).invoke("text").as("firstITemText")

//بقبك اللي فيها كل العناضر جيبلي اول عنصر invoke يعني جيبه مثل ما هو as يعيي لقب تاعه 

//cy.get("@firstITemText").its("length").should('be.gt',6)
//الكلمة اللي عدد احرفها 19 جسبلي منها  gether than من 6


//cy.get(".thumbnail").as("Items")
//عشان تجيب سعر المنتج لازم تاخذ وتحدد على الصورة كاملة 
//cy.get("@Items")

// cy.get(".thumbnail").as("Items")
// cy.get("@Items").find(".oneprice").each((element,index,list)=>{

//   cy.log("the "+ element.text()+"is located at index# "+index)

// })

// to print items without the dollar sign and sum the price  

cy.get(".thumbnail").as("Items");
cy.get("@Items").find(".oneprice").invoke("text").as("itemPrice")

cy.get("@itemPrice").then((Pricetext)=>{
let mylistofprice = Pricetext.split("$")

let total=0

for (let i = 0; i < mylistofprice.length; i++) {
  cy.log(mylistofprice[i])

  total+=Number(mylistofprice[i])
  
}
cy.log(total+"this is price")

})


    });

    
});

