package runner;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(
		
		
		plugin= {"html:target/Cucumber_HTML_Report"},
		features= {"features"},
		glue= {"stepDefinitions"},
		tags= {"@Register"}
		
		
		)

public class Runner {
	
	
	
	

}
