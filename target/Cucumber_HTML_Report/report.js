$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Register.feature");
formatter.feature({
  "line": 1,
  "name": "Registration tests",
  "description": "",
  "id": "registration-tests",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Register an account with valid details",
  "description": "",
  "id": "registration-tests;register-an-account-with-valid-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Register"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User navigates to Registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User provies the following details into the input fields",
  "rows": [
    {
      "cells": [
        "firstName",
        "arun"
      ],
      "line": 8
    },
    {
      "cells": [
        "lastName",
        "motoori"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "arun.motoori@yahoo.co.in"
      ],
      "line": 10
    },
    {
      "cells": [
        "phone",
        "12345678"
      ],
      "line": 11
    },
    {
      "cells": [
        "password",
        "SeleniumTester$"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Selects the privacy policy option",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Clicks on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should get successfully registered",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_navigates_to_Registration_page()"
});
formatter.result({
  "duration": 11948345332,
  "status": "passed"
});
formatter.match({
  "location": "Register.user_provies_the_following_details_into_the_input_fields(DataTable)"
});
formatter.result({
  "duration": 912383253,
  "status": "passed"
});
formatter.match({
  "location": "Register.selects_the_privacy_policy_option()"
});
formatter.result({
  "duration": 93844766,
  "status": "passed"
});
formatter.match({
  "location": "Register.clicks_on_Continue_button()"
});
formatter.result({
  "duration": 1194399093,
  "status": "passed"
});
formatter.match({
  "location": "Register.user_should_get_successfully_registered()"
});
formatter.result({
  "duration": 31716057,
  "error_message": "java.lang.AssertionError: User not register the account successfully\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat stepDefinitions.Register.user_should_get_successfully_registered(Register.java:79)\r\n\tat ✽.Then User should get successfully registered(Register.feature:15)\r\n",
  "status": "failed"
});
});