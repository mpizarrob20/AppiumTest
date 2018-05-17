
Feature: Check app functionality

  Background: Install the app
    Given the application is open

   @Test
  Scenario: Test icon information
    When the user clicks on the information icon
    And access information
    Then return to the main menu

  @Regression
  Scenario: Test gallery icon
    When the user clicks on the gallery icon
    And access the gallery
    Then return to the main menu

