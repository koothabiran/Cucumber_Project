package cbPack;

import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class omayoLogin {
	
	WebDriver driver;
	
	
	@Given("^I navigate to omayo website$")
	public void i_navigate_to_omayo_website() throws Throwable {
		
		System.setProperty("webdriver.chrome.driver", "drivers//chromedriver.exe");
		
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://omayo.blogspot.com/");
		
	   
	}
	

	@When("^I enter username as \"([^\"]*)\" and password as \"([^\"]*)\" into the fields$")
	public void i_enter_username_as_Username_and_password_as_Password(String username, String password) {
		
		driver.findElement(By.name("userid")).sendKeys(username);
		driver.findElement(By.name("pswrd")).sendKeys(password);
		
	   
	}
	
	@And("^I click on login button$")
	public void i_click_on_login_button() throws InterruptedException  {
		
		driver.findElement(By.cssSelector("input[type=\"button\"][value=\"Login\"]")).click();
		Thread.sleep(5000);
	    
	}
	
	
	@Then("^User should login based on expected \"([^\"]*)\" status$")
	public void user_should_login_based_on_expected_status(String expectedStatus) {
		
		String expectedLoginStatus = expectedStatus;
		
		String actualLoginStatus=null;
		
		
		
		
		
		try {
		Alert alert =	driver.switchTo().alert();
		
		String textOnTheAlert =alert.getText();
		
		if(textOnTheAlert.equals("Error Password or Username")) {  
			
			actualLoginStatus="failure";
			
			
		}
		
	
			
		}catch(Exception e) {
			
			
			actualLoginStatus="success";
			
		}
		
		if(actualLoginStatus.equals(expectedLoginStatus)) {
			
			
		}else {
			
			Assert.fail("omayo Login test has failed");
			
		}
	
		
		driver.quit();
		
	    
	}
	
	
}
