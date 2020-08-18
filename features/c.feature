@AddMRLTest
Feature: Regression Manager Add MRL Test
    Scenario Outline: Regression Manager Add
    Given user in login page
    When user in login page provide "<username>" and "<password>"
    Then user expand tree node
    Then user expand tree node13
    Then user drag and drop mrl
    Then quit the browser
    
Examples:
	| username                     | password  |
	| vinod.duddukuri@oracle.com   | MAHAbharatam@123 |
