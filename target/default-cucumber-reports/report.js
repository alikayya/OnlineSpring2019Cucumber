$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\activities\\calendar_events\\AllCalendarEvents.feature");
formatter.feature({
  "name": "All Calendar Events",
  "description": "  As user I want to be able to see all calendar events as a table",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@calendar_events"
    }
  ]
});
formatter.scenario({
  "name": "Verify column names",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@calendar_events"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as a store manager",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_a_store_manager()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Activities\" and \"Calendar Events\"",
  "keyword": "When "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "following table headers should be displayed",
  "rows": [
    {
      "cells": [
        "TITLE"
      ]
    },
    {
      "cells": [
        "CALENDAR"
      ]
    },
    {
      "cells": [
        "START"
      ]
    },
    {
      "cells": [
        "END"
      ]
    },
    {
      "cells": [
        "RECURRENT"
      ]
    },
    {
      "cells": [
        "RECURRENCE"
      ]
    },
    {
      "cells": [
        "INVITATION STATUS"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CalendarEventsStepDefinitions.following_table_headers_should_be_displayed(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});