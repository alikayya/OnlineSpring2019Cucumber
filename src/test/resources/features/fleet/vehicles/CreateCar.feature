@create_a_car
Feature: Create a car
  As user I want to be able to create a car

  Scenario: Create a car
    Given user logs in as a "sales manager"
    When user navigates to "Fleet" and "Vehicles"
    And user verifies that "All Cars" page name is displayed
    Then user clicks on the create a car button
    And user enters car information:
    |Licence Plate|Cybertek|
    |Driver       |Spartan |
    |Location     |Alaska  |
    |Model Year   |2019    |
    |Color        |Year    |
    |Power        |500     |
    |Vehicle Make |Nissan  |
    |Vehicle Model|370z    |
    Then user clicks save and close
    And user verifies that general information is displayed
