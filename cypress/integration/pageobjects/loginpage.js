


  class loginpage{

 

    visit(){


    }

  enterdetails(){


    cy.get('input[id="UserName"]').type(Cypress.env('name'));
    cy.get('input[id="Password"]').type('password');

  }


  clicksubmit(){

    cy.xpath('//input[@type="submit"]').click();


  }

  }


  export default loginpage;