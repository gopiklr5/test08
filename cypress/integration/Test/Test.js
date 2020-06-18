import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"


Given('I visit EAAP site', ()=>{
cy.visit('http://eaapp.somee.com/')

})

Given('I Click on Login btn', ()=>{
    cy.get('#loginLink').click();
    
    })

    Given('I Enter login details', datatable=>{
        datatable.hashes().forEach(row => {
        cy.get('input[id="UserName"]').type(row.Username);
        cy.get('input[id="Password"]').type(row.Password);
        
        })
        
        })

        And('I click on submit btn', ()=>{
            cy.get('input[type="Submit"]').click();
            
            })