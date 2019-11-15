Feature: Login tests

This feature file contain all the test scenarios related to Login fuctionality of the application


@ninja
Scenario: Login with vaild credentials
This test will verify the user can able to login with valid credentials
	Given User navigate to the application login page
	When user enters the Username as arun@qafox.com and Password as SeleniumTester$ into the fields
	And Click on Login button
	Then User should successfully login