$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/a.feature");
formatter.feature({
  "line": 2,
  "name": "Regression Manager Login Test",
  "description": "",
  "id": "regression-manager-login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Regression Manager Login",
  "description": "",
  "id": "regression-manager-login-test;regression-manager-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is already in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user clicks on Authenticate button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "close the session",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "regression-manager-login-test;regression-manager-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "regression-manager-login-test;regression-manager-login;;1"
    },
    {
      "cells": [
        "vinod.duddukuri@oracle.com",
        "WINod1@14"
      ],
      "line": 11,
      "id": "regression-manager-login-test;regression-manager-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Regression Manager Login",
  "description": "",
  "id": "regression-manager-login-test;regression-manager-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is already in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"vinod.duddukuri@oracle.com\" and \"WINod1@14\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user clicks on Authenticate button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "close the session",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDefinition.user_is_already_in_login_page()"
});
formatter.result({
  "duration": 10698568800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vinod.duddukuri@oracle.com",
      "offset": 13
    },
    {
      "val": "WINod1@14",
      "offset": 46
    }
  ],
  "location": "LoginPageStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 288473600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinition.user_clicks_on_Authenticate_button()"
});
formatter.result({
  "duration": 47399749300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinition.close_the_session()"
});
formatter.result({
  "duration": 11894014400,
  "status": "passed"
});
formatter.after({
  "duration": 16919700,
  "status": "passed"
});
formatter.after({
  "duration": 3344800,
  "status": "passed"
});
formatter.after({
  "duration": 31000,
  "status": "passed"
});
formatter.after({
  "duration": 4011500,
  "status": "passed"
});
formatter.uri("features/regman.feature");
formatter.feature({
  "line": 2,
  "name": "Regression Manager Regression Tests",
  "description": "",
  "id": "regression-manager-regression-tests",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Regression Manager Login",
  "description": "",
  "id": "regression-manager-regression-tests;regression-manager-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is already in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user clicks on Authenticate button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close the session",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "regression-manager-regression-tests;regression-manager-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "regression-manager-regression-tests;regression-manager-login;;1"
    },
    {
      "cells": [
        "vinod.duddukuri@oracle.com",
        "WINod1@14"
      ],
      "line": 13,
      "id": "regression-manager-regression-tests;regression-manager-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Regression Manager Login",
  "description": "",
  "id": "regression-manager-regression-tests;regression-manager-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Scenario1"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is already in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters \"vinod.duddukuri@oracle.com\" and \"WINod1@14\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user clicks on Authenticate button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close the session",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDefinition.user_is_already_in_login_page()"
});
formatter.result({
  "duration": 7063345600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vinod.duddukuri@oracle.com",
      "offset": 13
    },
    {
      "val": "WINod1@14",
      "offset": 46
    }
  ],
  "location": "LoginPageStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 186720800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinition.user_clicks_on_Authenticate_button()"
});
formatter.result({
  "duration": 47977897900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinition.close_the_session()"
});
formatter.result({
  "duration": 11805893700,
  "status": "passed"
});
formatter.after({
  "duration": 18224200,
  "status": "passed"
});
formatter.after({
  "duration": 3197900,
  "status": "passed"
});
formatter.after({
  "duration": 225800,
  "status": "passed"
});
formatter.after({
  "duration": 4142000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Regression Manager Home Page",
  "description": "",
  "id": "regression-manager-regression-tests;regression-manager-home-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user in login page enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" details",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user clicks on SuitesManager icon",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "regression-manager-regression-tests;regression-manager-home-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 23,
      "id": "regression-manager-regression-tests;regression-manager-home-page;;1"
    },
    {
      "cells": [
        "vinod.duddukuri@oracle.com",
        "WINod1@14"
      ],
      "line": 24,
      "id": "regression-manager-regression-tests;regression-manager-home-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Regression Manager Home Page",
  "description": "",
  "id": "regression-manager-regression-tests;regression-manager-home-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Scenario2"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user in login page enters \"vinod.duddukuri@oracle.com\" and \"WINod1@14\" details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user clicks on SuitesManager icon",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinition.user_is_in_login_page()"
});
formatter.result({
  "duration": 6969604900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vinod.duddukuri@oracle.com",
      "offset": 27
    },
    {
      "val": "WINod1@14",
      "offset": 60
    }
  ],
  "location": "HomePageStepDefinition.user_in_Login_page_enters(String,String)"
});
formatter.result({
  "duration": 47833067500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_clicks_on_Suites_Manager_icon()"
});
formatter.result({
  "duration": 10519947200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7070281100,
  "status": "passed"
});
formatter.after({
  "duration": 14017200,
  "status": "passed"
});
formatter.after({
  "duration": 18400,
  "status": "passed"
});
formatter.after({
  "duration": 2639800,
  "status": "passed"
});
formatter.after({
  "duration": 3232600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Regression Manager Add",
  "description": "",
  "id": "regression-manager-regression-tests;regression-manager-add",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Scenario3"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "user in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "user in login page provide \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user expand tree node",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user expand tree node13",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user drag and drop mrl",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "quit the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "regression-manager-regression-tests;regression-manager-add;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 36,
      "id": "regression-manager-regression-tests;regression-manager-add;;1"
    },
    {
      "cells": [
        "vinod.duddukuri@oracle.com",
        "WINod1@14"
      ],
      "line": 37,
      "id": "regression-manager-regression-tests;regression-manager-add;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 37,
  "name": "Regression Manager Add",
  "description": "",
  "id": "regression-manager-regression-tests;regression-manager-add;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Scenario3"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "user in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "user in login page provide \"vinod.duddukuri@oracle.com\" and \"WINod1@14\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user expand tree node",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user expand tree node13",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user drag and drop mrl",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AddMRLToSuiteStepDefinition.user_is_already_in_login_page()"
});
formatter.result({
  "duration": 7064765100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vinod.duddukuri@oracle.com",
      "offset": 28
    },
    {
      "val": "WINod1@14",
      "offset": 61
    }
  ],
  "location": "AddMRLToSuiteStepDefinition.user_enter_and(String,String)"
});
formatter.result({
  "duration": 63063805000,
  "status": "passed"
});
formatter.match({
  "location": "AddMRLToSuiteStepDefinition.expand_tree_node()"
});
formatter.result({
  "duration": 5186795800,
  "status": "passed"
});
formatter.match({
  "location": "AddMRLToSuiteStepDefinition.expand_tree_node13()"
});
formatter.result({
  "duration": 2159985500,
  "status": "passed"
});
formatter.match({
  "location": "AddMRLToSuiteStepDefinition.user_drag_and_drop_mrl()"
});
formatter.result({
  "duration": 9030838200,
  "status": "passed"
});
formatter.match({
  "location": "AddMRLToSuiteStepDefinition.close_the_session()"
});
formatter.result({
  "duration": 7172269600,
  "status": "passed"
});
formatter.after({
  "duration": 5077000,
  "status": "passed"
});
formatter.after({
  "duration": 17021600,
  "status": "passed"
});
formatter.after({
  "duration": 3357600,
  "status": "passed"
});
formatter.after({
  "duration": 18300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 40,
  "name": "Regression Manager Remove",
  "description": "",
  "id": "regression-manager-regression-tests;regression-manager-remove",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 39,
      "name": "@Scenario4"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "user open browser with login page",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "user provide \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "user expand run testMrl suite tree node",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "user select and remove mrl from suite",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "dismiss browser session",
  "keyword": "Then "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "regression-manager-regression-tests;regression-manager-remove;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 48,
      "id": "regression-manager-regression-tests;regression-manager-remove;;1"
    },
    {
      "cells": [
        "vinod.duddukuri@oracle.com",
        "WINod1@14"
      ],
      "line": 49,
      "id": "regression-manager-regression-tests;regression-manager-remove;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 49,
  "name": "Regression Manager Remove",
  "description": "",
  "id": "regression-manager-regression-tests;regression-manager-remove;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 39,
      "name": "@Scenario4"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "user open browser with login page",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "user provide \"vinod.duddukuri@oracle.com\" and \"WINod1@14\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "user expand run testMrl suite tree node",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "user select and remove mrl from suite",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "dismiss browser session",
  "keyword": "Then "
});
formatter.match({
  "location": "RemoveMRLFromSuiteStepDefinition.user_is_already_in_login_page()"
});
formatter.result({
  "duration": 7194191100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vinod.duddukuri@oracle.com",
      "offset": 14
    },
    {
      "val": "WINod1@14",
      "offset": 47
    }
  ],
  "location": "RemoveMRLFromSuiteStepDefinition.user_Reg_Man_page_title(String,String)"
});
formatter.result({
  "duration": 65598168900,
  "status": "passed"
});
formatter.match({
  "location": "RemoveMRLFromSuiteStepDefinition.user_expand_run_suite_tree_node()"
});
formatter.result({
  "duration": 5175916200,
  "status": "passed"
});
formatter.match({
  "location": "RemoveMRLFromSuiteStepDefinition.user_select_and_remove_mrl_from_suite()"
});
formatter.result({
  "duration": 5394951700,
  "status": "passed"
});
formatter.match({
  "location": "RemoveMRLFromSuiteStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 6811109400,
  "status": "passed"
});
formatter.after({
  "duration": 16100,
  "status": "passed"
});
formatter.after({
  "duration": 3382400,
  "status": "passed"
});
formatter.after({
  "duration": 13673100,
  "status": "passed"
});
formatter.after({
  "duration": 4166800,
  "status": "passed"
});
});