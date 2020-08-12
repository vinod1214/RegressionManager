package com.testRunner;

import cucumber.api.CucumberOptions;

@CucumberOptions(features = "@target/cucumber-options/rerun.txt", 
			     glue = {"com.stepDefinitions"},
			     plugin = {"pretty","html:target1/cucumber-reports/cucumber-pretty","json:target1/cucumber-reports/cucumber.json",
		  	               "com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:target1/cucumber-reports/report.html"}
			    )
public class TestRunnerReRun {

}
