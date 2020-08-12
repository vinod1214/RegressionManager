package com.testRunner;

import java.io.File;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import com.vimalselvam.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;

@CucumberOptions(
        features = {"features/regman.feature","features/a.feature"},
        glue = {"com.stepDefinitions"},
        dryRun = false, //to check the mapping is proper between feature file and step def file
        tags = {"@Regression,@LoginTest"},
        plugin = {"pretty", "json:target/cucumber-reports/cucumber.json","html:target/cucumber-reports/cucumber-pretty",
                  "com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html","rerun:target/cucumber-reports/rerun.txt"},
        monochrome = true)

public class TestRunner {
	
	private TestNGCucumberRunner testNGCucumberRunner;
	 
    @BeforeClass(alwaysRun = true)
    public void setUpClass() throws Exception {
        testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
    }
 
    @Test(groups = "cucumber", description = "Runs Cucumber Feature", dataProvider = "features")
    public void feature(CucumberFeatureWrapper cucumberFeature) {
        testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
    }
 
    @DataProvider
    public Object[][] features() {
        return testNGCucumberRunner.provideFeatures();
    }
    
 
    @AfterClass(alwaysRun = true)
    public void tearDownClass() throws Exception {
        testNGCucumberRunner.finish();
    }
	
    @AfterClass
    public static void writeExtentReport() {
        Reporter.loadXMLConfig(new File("config/report.xml"));
        Reporter.setSystemInfo("User Name", "VinodDuddukuri");
        Reporter.setSystemInfo("Application Name", "Regression Manager App ");
        Reporter.setSystemInfo("Operating System Type", "Windows10");
        Reporter.setSystemInfo("Environment", "Test");
        Reporter.setTestRunnerOutput("Test Execution Cucumber Report");
    
    }
}

//OR : tags = {"@LoginTest, @HomePageTest"}
//AND : tags = {"@LoginTest", "@HomePageTest"}
//NOT : tags = {"~@HomePageTest", "~@RegressionTest"}
