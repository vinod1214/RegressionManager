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

public class LoginPageStepDefinition extends TestBase {

	 LoginPage loginPage;
	 HomePage homePage;
	 
	 Logger log = Logger.getLogger(LoginPageStepDefinition.class);
	
	 @Given("^user is already in login page$")
	 public void user_is_already_in_login_page(){
		 log.info("************************Initializing Browser and opening Regression Manager Login Page********************************");
		 TestBase.initialization();
	 }
	
	 //Reg Exp:
	 // ([^\"]*)
	 @When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	 public void user_enters_and(String username, String password){
		 log.info("************************Entering details in Regression Manager Login Page********************************");
		 loginPage = new LoginPage();
		 loginPage.logindetails(username, password);
		 
	 }
	
	 @Then("^user clicks on Authenticate button$")
	 public void user_clicks_on_Authenticate_button() {
		 log.info("************************Authenticates and user enter Regression Manager Home Page********************************");
		 homePage =  loginPage.login();
	 }
	 
	 @After
	 public void endScenario(Scenario scenario) throws Exception {
		 onFailure(scenario);
	 }

	 @Then("^close the session$")
	 public void close_the_session() throws InterruptedException{
		 log.info("************************Close the Browser********************************");
		 Thread.sleep(5000);
		 homePage.LogOff();
		 driver.quit();
	 }
	

}

