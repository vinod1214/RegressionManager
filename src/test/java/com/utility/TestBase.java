package com.utility;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.apache.commons.io.FileUtils;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import cucumber.api.Scenario;
import io.github.bonigarcia.wdm.WebDriverManager;

public class TestBase{
	
	public static WebDriver driver;
	public static Properties prop;
	
	Logger log = Logger.getLogger(TestBase.class);

	
	public TestBase() {
		try {
			prop = new Properties();
			FileInputStream ip = new FileInputStream("resources/config.properties");
			FileInputStream logs = new FileInputStream("resources/log4j.properties");
			prop.load(ip);
			prop.load(logs);
			PropertyConfigurator.configure(prop);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public static void initialization(){
		String browserName = prop.getProperty("browser");
		
		if(browserName.equals("chrome")){
			//System.setProperty("webdriver.chrome.driver", "C:\\Users\\VDUDDUKU\\eclipse-workspace\\RegressionManager\\drivers\\chromedriver.exe");
			WebDriverManager.chromedriver().proxy("https://www-proxy-idc.in.oracle.com:80").setup();
			driver = new ChromeDriver(); 
		}
		else if(browserName.equals("FF")){
			
			//System.setProperty("webdriver.gecko.driver", "C:\\Users\\VDUDDUKU\\eclipse-workspace\\RegressionManager\\drivers\\geckodriver.exe");
			WebDriverManager.firefoxdriver().proxy("https://www-proxy-idc.in.oracle.com:80").setup();
			driver = new FirefoxDriver(); 
		}
		driver.manage().window().maximize();
		driver.get(prop.getProperty("url"));
		
	}
	
	
	public void onFailure(Scenario scenario) throws Exception {
		if (scenario.isFailed()) {
			try {
				log.info(scenario.getName() + "is Failes");
				byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
				File screenshot_with_scenario_name = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
				FileUtils.copyFile(screenshot_with_scenario_name,
						new File("./target/test-report/" + scenario.getName() + ".png"));
				System.out.println(scenario.getName());
				scenario.embed(screenshot, "image/png");
			} catch (WebDriverException somePlatformsDontSupportScreenshots) {
				System.err.println(somePlatformsDontSupportScreenshots.getMessage());
			}

		}
	}

}
