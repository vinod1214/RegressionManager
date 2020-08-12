@Regression
Feature: Regression Manager Regression Tests
	 
	 @Scenario1
	 Scenario Outline: Regression Manager Login 
       Given user is already in login page
       When user enters "<username>" and "<password>"
       Then user clicks on Authenticate button
       Then close the session
       
       Examples:
				 | username                     | password  |
				 | vinod.duddukuri@oracle.com   | WINod1@14 |
		
		@Scenario2
		Scenario Outline: Regression Manager Home Page 
       Given user is in login page
       When user in login page enters "<username>" and "<password>" details
       Then user clicks on SuitesManager icon
       Then Close the browser
        
			Examples:
					| username                     | password  |
					| vinod.duddukuri@oracle.com   | WINod1@14 |
					
		@Scenario3
    Scenario Outline: Regression Manager Add
    	 Given user in login page
    	 When user in login page provide "<username>" and "<password>"
    	 Then user expand tree node
    	 Then user expand tree node13
    	 Then user drag and drop mrl
    	 Then quit the browser
        
		  Examples:
					| username                     | password  |
					| vinod.duddukuri@oracle.com   | WINod1@14 |
					
    @Scenario4
    Scenario Outline: Regression Manager Remove
       Given user open browser with login page
       When user provide "<username>" and "<password>"
       Then user expand run testMrl suite tree node
       Then user select and remove mrl from suite
       Then dismiss browser session
    
			Examples:
					| username                     | password  |
					| vinod.duddukuri@oracle.com   | WINod1@14 |      
