package stepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Search {
	
	
	
	@Given("^I visit the website as Guest User$")
	public void I_visit_the_website_as_Guest_User() {
		
		System.out.println(">> Given - I visit the website as Guest User");
		
	}
	
	@When("^I select Books option from the dropdown$")
	public void I_select_Books_option_from_the_dropdown() {
		
		System.out.println(">> When - I select Books option from the dropdown");
	}
	
	@And("^I click on search icon$")
	public void I_click_on_search_icon() {
		
		System.out.println(">> And - I click on search icon");
		
	}
	
	@Then("^I should see the books page loaded$")
	public void I_should_see_the_books_page_loaded() {
		
		System.out.println(">> Then - I should see the books page loaded");
	}
	
	@And("I should see Books at Amazon as heading")
	public void I_should_see_Books_at_Amazon_as_heading() {
		
		System.out.println(">> And - I should see Books at Amazon as heading");
		
	}
	
	@But("^I should not see other category products$")
	public void I_should_not_see_other_category_products() {
		
		System.out.println(">> But - I should not see other  category products");
		System.out.println("--------------------------------------------");
	}
	
	@When("^I select Baby option from the dropdown$")
	public void I_select_Baby_option_from_the_dropdown() {
		System.out.println(">> When - I select Baby option from the dropdown");
		
	}
	
	@Then("^I should see the Baby page loaded$")
	public void  I_should_see_the_Baby_page_loaded() {
		
		System.out.println(">> Then - I should see the Baby page loaded");
	}
	
	@And("^I should see Baby Store as heading$")
	public void I_should_see_Baby_Store_as_heading() {
		
		System.out.println(">> And - I should see Baby Store as heading");
		
	}
	
	
	
	
	
	
}
