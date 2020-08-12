package com.stepDefinitions;

import org.apache.log4j.Logger;

import com.pages.HomePage;
import com.pages.LoginPage;
import com.pages.SuitesManagerPage;
import com.utility.TestBase;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddMRLToSuiteStepDefinition extends TestBase {

	LoginPage loginPage;
	HomePage homePage;
	SuitesManagerPage suitesManager;
	Logger log = Logger.getLogger(AddMRLToSuiteStepDefinition.class);
	
	 @Given("^user in login page$")
	 public void user_is_already_in_login_page(){
		 log.info("************************Initializing Browser and opening Regression Manager Login Page********************************");
	     TestBase.initialization();

	 }

	
	 @When("^user in login page provide \"([^\"]*)\" and \"([^\"]*)\"$")
	 public void user_enter_and(String username, String password) throws InterruptedException{
		 log.info("************************Login into Regression Manager********************************");
		 log.info("************************User selects Suites Manager********************************");
		 loginPage =  new LoginPage();
		 loginPage.logindetails(username, password);
		 homePage =  loginPage.login();
		 homePage.SuitesManager();
	 }
	 
	@Then("^user expand tree node$")
	public void expand_tree_node() throws InterruptedException {
		log.info("************************User expand VINODDUDDUKURI right tree node********************************");
		suitesManager = new SuitesManagerPage();
		suitesManager.expand_right_vinodduddukuri();
		
	}
	
	 @Then("^user expand tree node13$")
	 public void expand_tree_node13() throws InterruptedException {
		 log.info("************************User expand VINODDUDDUKURI left tree node********************************");
		 suitesManager.expand_left_vinodduddukuri();
	     
	 }
	 
	 
	 @Then("^user drag and drop mrl$")
	 public void user_drag_and_drop_mrl() throws InterruptedException {
		 log.info("************************User add pdf_embed mrl from VINODDUDDUKURI left tree node to testMRL suite in VINODDUDDUKURI right tree********************************");
		 suitesManager.drag_drop_pdf_embed_mrl();
		 
	 }
	
	 @After
	 public void endScenario(Scenario scenario) throws Exception {
		 onFailure(scenario);
	 }

	 @Then("^quit the browser$")
	 public void close_the_session() throws InterruptedException{
		 log.info("************************Close the Browser********************************");
		 homePage.LogOff();
		 driver.quit();
		 
	 }
	
}
