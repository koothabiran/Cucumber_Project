Feature: Searching for various categories should be possible along with product search


Background: visiting the website as a Guest user
Given I visit the website as Guest User


Scenario: Search for the products under Book Category

When I select Books option from the dropdown
And I click on search icon
Then I should see the books page loaded
And I should see Books at Amazon as heading
But I should not see other category products

Scenario: Search for the products under Baby Category

When I select Baby option from the dropdown
And I click on search icon
Then I should see the Baby page loaded
And I should see Baby Store as heading
But I should not see other category products 
