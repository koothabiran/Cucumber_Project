package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login {
	
	WebDriver driver;
	
	@Given("^User navigate to the application login page$")
	public void navigate_Login_Page() throws InterruptedException {
		
	
		System.setProperty("webdriver.chrome.driver", "drivers//chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		Thread.sleep(1000);
		
		driver.get("http://tutorialsninja.com/demo/index.php?route=account/login");
		Thread.sleep(3000);
	   
	}

	@When("^user enters the Username as (.*) and Password as (.*) into the fields$")
	public void username_Password(String username, String password) throws InterruptedException  {
		
		
		driver.findElement(By.id("input-email")).sendKeys(username);
		
		Thread.sleep(3000);
		driver.findElement(By.id("input-password")).sendKeys(password);
		Thread.sleep(3000);
	   
	}

	@And("^Click on Login button$")
	public void click_on_Login_button() {
		
		driver.findElement(By.cssSelector("input[type='submit'][value='Login']")).click();
	}
	
	
	@Then("^User should successfully login$")
	public void user_should_successfully_login() {
		
		WebElement element=null;
		
		try {
		
		 element = driver.findElement(By.linkText("Register for an affiliate account"));
	  
		}catch(Exception e) {
			
			System.out.println("User not logging the application");
			
		}
		
		Assert.assertNotNull("User not logging the application", element);
		
	}
}
