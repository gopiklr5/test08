
import pageobj from '../pageobjects/loginpage.js'
import * as locators from '../pageobjects/locators.js'


describe('testsuite',()=>{


    const obj = new pageobj();
 //   const loct = new locators();


  before('visit url',()=>{

    cy.visit('/')
  })

    it('visit application EAAP', ()=>{

        


        cy.get('#loginLink').then((linktxt)=>{
           return linktxt.text();         
           

        }).as('txt');
      
        locators.loginlink().click();
        
      //  cy.get('#loginLink').click();

        obj.enterdetails();
        obj.clicksubmit();
        // cy.get('@txt').then((txt)=>{
        //     cy.fixture('example.json').as('data');
        //     cy.get('@data').then(($data)=>{

        //         cy.get('input[id="UserName"]').type(Cypress.env('name'));

        //     })
          
       

        // })
       
        // cy.get('input[id="Password"]').type('password');
        // cy.xpath('//input[@type="submit"]').click();
       
     

    })

    after('close the browser', ()=>{

        cy.get('a').contains('Log off').click();
    })
})