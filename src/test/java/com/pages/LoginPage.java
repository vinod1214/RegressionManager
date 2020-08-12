package com.pages;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.utility.TestBase;

public class LoginPage extends TestBase {
	
	@FindBy(how=How.NAME,name="userid")
	WebElement username;
	
	@FindBy(how=How.NAME,name="passwd")
	WebElement password;
	
	@FindBy(how=How.XPATH,xpath="//input[@type='button']")
	WebElement loginBtn;
	
	
	public LoginPage() {
		PageFactory.initElements(driver, this);
	}
	
	public void logindetails(String un, String pwd) {
		username.sendKeys(un);
		password.sendKeys(pwd);
	}
	
	public HomePage login() {
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();", loginBtn);
		    	
		return new HomePage();
	}

}
