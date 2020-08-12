package com.stepDefinitions;

import org.apache.log4j.Logger;

import com.pages.HomePage;
import com.pages.LoginPage;
import com.utility.TestBase;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HomePageStepDefinition extends TestBase  {

	 LoginPage loginPage;
	 HomePage homePage;
	 Logger log = Logger.getLogger(HomePageStepDefinition.class);
	 
	 @Given("^user is in login page$")
	 public void user_is_in_login_page(){
		 log.info("************************Initializing Browser and opening Regression Manager Login Page********************************");
		 TestBase.initialization();
		 
	 }
	
	
	 @When("^user in login page enters \"([^\"]*)\" and \"([^\"]*)\" details$")
	 public void user_in_Login_page_enters(String username, String password){
		 log.info("************************Login into Regression Manager********************************");
		 loginPage =  new LoginPage();
		 loginPage.logindetails(username, password);
		 homePage =  loginPage.login();
	 }
	
	 
	 @Then("^user clicks on SuitesManager icon$")
	 public void user_clicks_on_Suites_Manager_icon() throws InterruptedException {
		 log.info("************************User selects Suites Manager********************************");
		 homePage = new HomePage();
		 homePage.SuitesManager();
		 homePage.window_close();
	}
	 
	 @After
	 public void endScenario(Scenario scenario) throws Exception {
		 onFailure(scenario);
	 }
		 	 	 
	@Then("^Close the browser$")
	public void close_the_browser() throws InterruptedException{
		log.info("************************Close the Browser********************************");
		homePage.LogOff();
		driver.quit();
	}
	
}
