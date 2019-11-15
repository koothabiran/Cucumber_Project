Feature: Searching for various categories should be possible along with product search

@search @Book @All
Scenario: Search for the products under Book Category
Given I visit the website as Guest User
When I select Books option from the dropdown
And I click on search icon
Then I should see the books page loaded
And I should see Books at Amazon as heading
But I should not see other category products


@search @Baby @All
Scenario: Search for the products under Baby Category
Given I visit the website as Guest User
When I select Baby option from the dropdown
And I click on search icon
Then I should see the Baby page loaded
And I should see Baby Store as heading
But I should not see other category products 
