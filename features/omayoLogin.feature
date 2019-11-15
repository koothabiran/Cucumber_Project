Feature: Login to the omayo application



@omayo @All
Scenario Outline: User should only be able to login with valid credential

Given I navigate to omayo website
When I enter username as "<username>" and password as "<password>" into the fields
And I click on login button
Then User should login based on expected "<loginstatus>" status

Examples: 
|username        |password    |loginstatus   |
|arun            |pswd1       |failure       |
|SeleniumByArun  |Test143$    |success    	 |
|motoori         |pswd2       |failure       |
