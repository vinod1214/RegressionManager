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

public class RemoveMRLFromSuiteStepDefinition extends TestBase {
	
	LoginPage loginPage;
	HomePage homePage;
	SuitesManagerPage suiteManager;
	Logger log = Logger.getLogger(RemoveMRLFromSuiteStepDefinition.class);
	
	@Given("^user open browser with login page$")
	public void user_is_already_in_login_page() {
		TestBase.initialization();
	}

	@When("^user provide \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_Reg_Man_page_title(String username,String password) throws InterruptedException {
		log.info("************************Login into Regression Manager********************************");
		log.info("************************User selects Suites Manager********************************");
		log.info("************************Expand VINODDUDDUKURI right tree node********************************");
		loginPage =  new LoginPage();
		loginPage.logindetails(username, password);
		homePage =  loginPage.login();
		homePage.SuitesManager();
		suiteManager = new SuitesManagerPage();
		suiteManager.expand_right_vinodduddukuri();
	}

	@Then("^user expand run testMrl suite tree node$")
	public void user_expand_run_suite_tree_node() throws InterruptedException {
		log.info("************************Expand testMrl suite under VINODDUDDUKURI right tree node********************************");
		suiteManager.expand_testMRL_suite();
	}

	@Then("^user select and remove mrl from suite$")
	public void user_select_and_remove_mrl_from_suite() throws InterruptedException {
		log.info("************************Remove pdf_embed mrl from testMrl suite available in VINODDUDDUKURI right tree ********************************");
		suiteManager.remove_mrl();
		
	}
	
	@After
	 public void endScenario(Scenario scenario) throws Exception {
		 onFailure(scenario);
	 }

	@Then("^dismiss browser session$")
	public void close_the_browser() throws InterruptedException {
		log.info("************************Close the Browser********************************");
		homePage.LogOff();
	    driver.quit();  
	    
	}
	

}
