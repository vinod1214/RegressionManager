@HomePageTest
Feature: Regression Manager Home Page Test
    Scenario Outline: Regression Manager Home Page 
    Given user is in login page
    When user in login page enters "<username>" and "<password>" details
    Then user clicks on SuitesManager icon
    Then Close the browser

Examples:
	| username                     | password  |
	| vinod.duddukuri@oracle.com   | WINod1@14 |