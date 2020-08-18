@LoginTest
Feature: Regression Manager Login Test
    Scenario Outline: Regression Manager Login 
       Given user is already in login page
       When user enters "<username>" and "<password>"
       Then user clicks on Authenticate button
       Then close the session
       
       Examples:
				 | username                     | password  |
				 | vinod.duddukuri@oracle.com   | MAHAbharatam@123 |
