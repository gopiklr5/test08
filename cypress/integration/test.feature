Feature: EAAP Feature
   Validate EAAP Login

   Scenario: Validate Login Scenario
   Given I visit EAAP site
   Given I Click on Login btn
  Given I Enter login details 
  | Username | Password |
   | admin    | password |
   And I click on submit btn