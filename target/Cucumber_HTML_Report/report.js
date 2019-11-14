$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cbPack/omayoLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Login to the omayo application",
  "description": "",
  "id": "login-to-the-omayo-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User should only be able to login with valid credential",
  "description": "",
  "id": "login-to-the-omayo-application;user-should-only-be-able-to-login-with-valid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I navigate to omayo website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter username as \"\u003cusername\u003e\" and password as \"\u003cpassword\u003e\" into the fields",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should login based on expected \"\u003cloginstatus\u003e\" status",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "login-to-the-omayo-application;user-should-only-be-able-to-login-with-valid-credential;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "loginstatus"
      ],
      "line": 11,
      "id": "login-to-the-omayo-application;user-should-only-be-able-to-login-with-valid-credential;;1"
    },
    {
      "cells": [
        "arun",
        "pswd1",
        "failure"
      ],
      "line": 12,
      "id": "login-to-the-omayo-application;user-should-only-be-able-to-login-with-valid-credential;;2"
    },
    {
      "cells": [
        "SeleniumByArun",
        "Test143$",
        "success"
      ],
      "line": 13,
      "id": "login-to-the-omayo-application;user-should-only-be-able-to-login-with-valid-credential;;3"
    },
    {
      "cells": [
        "motoori",
        "pswd2",
        "failure"
      ],
      "line": 14,
      "id": "login-to-the-omayo-application;user-should-only-be-able-to-login-with-valid-credential;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "User should only be able to login with valid credential",
  "description": "",
  "id": "login-to-the-omayo-application;user-should-only-be-able-to-login-with-valid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I navigate to omayo website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter username as \"arun\" and password as \"pswd1\" into the fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should login based on expected \"failure\" status",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "omayoLogin.i_navigate_to_omayo_website()"
});
formatter.result({
  "duration": 15051816201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "arun",
      "offset": 21
    },
    {
      "val": "pswd1",
      "offset": 44
    }
  ],
  "location": "omayoLogin.i_enter_username_as_Username_and_password_as_Password(String,String)"
});
formatter.result({
  "duration": 2038874158,
  "status": "passed"
});
formatter.match({
  "location": "omayoLogin.i_click_on_login_button()"
});
formatter.result({
  "duration": 5271362518,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "failure",
      "offset": 37
    }
  ],
  "location": "omayoLogin.user_should_login_based_on_expected_status(String)"
});
formatter.result({
  "duration": 683951597,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should only be able to login with valid credential",
  "description": "",
  "id": "login-to-the-omayo-application;user-should-only-be-able-to-login-with-valid-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I navigate to omayo website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter username as \"SeleniumByArun\" and password as \"Test143$\" into the fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should login based on expected \"success\" status",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "omayoLogin.i_navigate_to_omayo_website()"
});
formatter.result({
  "duration": 5826937232,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SeleniumByArun",
      "offset": 21
    },
    {
      "val": "Test143$",
      "offset": 54
    }
  ],
  "location": "omayoLogin.i_enter_username_as_Username_and_password_as_Password(String,String)"
});
formatter.result({
  "duration": 318819001,
  "status": "passed"
});
formatter.match({
  "location": "omayoLogin.i_click_on_login_button()"
});
formatter.result({
  "duration": 5163272285,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 37
    }
  ],
  "location": "omayoLogin.user_should_login_based_on_expected_status(String)"
});
formatter.result({
  "duration": 695929328,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should only be able to login with valid credential",
  "description": "",
  "id": "login-to-the-omayo-application;user-should-only-be-able-to-login-with-valid-credential;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I navigate to omayo website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter username as \"motoori\" and password as \"pswd2\" into the fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should login based on expected \"failure\" status",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "omayoLogin.i_navigate_to_omayo_website()"
});
formatter.result({
  "duration": 6517751896,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "motoori",
      "offset": 21
    },
    {
      "val": "pswd2",
      "offset": 47
    }
  ],
  "location": "omayoLogin.i_enter_username_as_Username_and_password_as_Password(String,String)"
});
formatter.result({
  "duration": 266614038,
  "status": "passed"
});
formatter.match({
  "location": "omayoLogin.i_click_on_login_button()"
});
formatter.result({
  "duration": 5068722631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "failure",
      "offset": 37
    }
  ],
  "location": "omayoLogin.user_should_login_based_on_expected_status(String)"
});
formatter.result({
  "duration": 630187890,
  "status": "passed"
});
formatter.uri("cbPack/search.feature");
formatter.feature({
  "line": 1,
  "name": "Searching for various categories should be possible along with product search",
  "description": "",
  "id": "searching-for-various-categories-should-be-possible-along-with-product-search",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "visiting the website as a Guest user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I visit the website as Guest User",
  "keyword": "Given "
});
formatter.match({
  "location": "Search.I_visit_the_website_as_Guest_User()"
});
formatter.result({
  "duration": 406825,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Search for the products under Book Category",
  "description": "",
  "id": "searching-for-various-categories-should-be-possible-along-with-product-search;search-for-the-products-under-book-category",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I select Books option from the dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on search icon",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see the books page loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I should see Books at Amazon as heading",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should not see other category products",
  "keyword": "But "
});
formatter.match({
  "location": "Search.I_select_Books_option_from_the_dropdown()"
});
formatter.result({
  "duration": 109198,
  "status": "passed"
});
formatter.match({
  "location": "Search.I_click_on_search_icon()"
});
formatter.result({
  "duration": 75535,
  "status": "passed"
});
formatter.match({
  "location": "Search.I_should_see_the_books_page_loaded()"
});
formatter.result({
  "duration": 78409,
  "status": "passed"
});
formatter.match({
  "location": "Search.I_should_see_Books_at_Amazon_as_heading()"
});
formatter.result({
  "duration": 77999,
  "status": "passed"
});
formatter.match({
  "location": "Search.I_should_not_see_other_category_products()"
});
formatter.result({
  "duration": 140398,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "visiting the website as a Guest user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I visit the website as Guest User",
  "keyword": "Given "
});
formatter.match({
  "location": "Search.I_visit_the_website_as_Guest_User()"
});
formatter.result({
  "duration": 77588,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Search for the products under Baby Category",
  "description": "",
  "id": "searching-for-various-categories-should-be-possible-along-with-product-search;search-for-the-products-under-baby-category",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I select Baby option from the dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on search icon",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see the Baby page loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I should see Baby Store as heading",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should not see other category products",
  "keyword": "But "
});
formatter.match({
  "location": "Search.I_select_Baby_option_from_the_dropdown()"
});
formatter.result({
  "duration": 82925,
  "status": "passed"
});
formatter.match({
  "location": "Search.I_click_on_search_icon()"
});
formatter.result({
  "duration": 52547,
  "status": "passed"
});
formatter.match({
  "location": "Search.I_should_see_the_Baby_page_loaded()"
});
formatter.result({
  "duration": 67736,
  "status": "passed"
});
formatter.match({
  "location": "Search.I_should_see_Baby_Store_as_heading()"
});
formatter.result({
  "duration": 61578,
  "status": "passed"
});
formatter.match({
  "location": "Search.I_should_not_see_other_category_products()"
});
formatter.result({
  "duration": 64862,
  "status": "passed"
});
formatter.uri("cbPack/softwaretester.feature");
formatter.feature({
  "line": 1,
  "name": "Life of a software tester and his boss",
  "description": "",
  "id": "life-of-a-software-tester-and-his-boss",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "I am a good software tester and my boss loves me",
  "description": "",
  "id": "life-of-a-software-tester-and-his-boss;i-am-a-good-software-tester-and-my-boss-loves-me",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am a good software tester",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I go to work",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I involve with it",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "My boss loves me",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "good",
      "offset": 7
    }
  ],
  "location": "SoftwareTester.i_am_a_good_software_tester(String)"
});
formatter.result({
  "duration": 213470,
  "status": "passed"
});
formatter.match({
  "location": "SoftwareTester.i_go_to_work()"
});
formatter.result({
  "duration": 62810,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "involve",
      "offset": 2
    }
  ],
  "location": "SoftwareTester.i_involve_with_it(String)"
});
formatter.result({
  "duration": 98114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loves",
      "offset": 8
    }
  ],
  "location": "SoftwareTester.my_boss_loves_me(String)"
});
formatter.result({
  "duration": 90314,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "I am a average software tester and my boss forgives me",
  "description": "",
  "id": "life-of-a-software-tester-and-his-boss;i-am-a-average-software-tester-and-my-boss-forgives-me",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I am a average software tester",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I go to work",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I work with it",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "My boss forgives me",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "average",
      "offset": 7
    }
  ],
  "location": "SoftwareTester.i_am_a_good_software_tester(String)"
});
formatter.result({
  "duration": 143271,
  "status": "passed"
});
formatter.match({
  "location": "SoftwareTester.i_go_to_work()"
});
formatter.result({
  "duration": 83336,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "work",
      "offset": 2
    }
  ],
  "location": "SoftwareTester.i_involve_with_it(String)"
});
formatter.result({
  "duration": 147376,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "forgives",
      "offset": 8
    }
  ],
  "location": "SoftwareTester.my_boss_loves_me(String)"
});
formatter.result({
  "duration": 114124,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "I am a bad software tester and my boss hates me",
  "description": "",
  "id": "life-of-a-software-tester-and-his-boss;i-am-a-bad-software-tester-and-my-boss-hates-me",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I am a bad software tester",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I go to work",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I mess with it",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "My boss hates me",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "bad",
      "offset": 7
    }
  ],
  "location": "SoftwareTester.i_am_a_good_software_tester(String)"
});
formatter.result({
  "duration": 128082,
  "status": "passed"
});
formatter.match({
  "location": "SoftwareTester.i_go_to_work()"
});
formatter.result({
  "duration": 57062,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mess",
      "offset": 2
    }
  ],
  "location": "SoftwareTester.i_involve_with_it(String)"
});
formatter.result({
  "duration": 84977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hates",
      "offset": 8
    }
  ],
  "location": "SoftwareTester.my_boss_loves_me(String)"
});
formatter.result({
  "duration": 75946,
  "status": "passed"
});
});