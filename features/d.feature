@RemoveMRLTest
Feature: Regression Manager Remove MRL Test
    Scenario Outline: Regression Manager Remove
    Given user open browser with login page
    When user provide "<username>" and "<password>"
    Then user expand run testMrl suite tree node
    Then user select and remove mrl from suite
    Then dismiss browser session
    
Examples:
	| username                     | password  |
	| vinod.duddukuri@oracle.com   | WINod1@14 |