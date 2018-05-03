Feature: Verify login functionality

  Background: Install the app
    Given the installation of the app

  Scenario Outline: Search for different products on Macys mobile application
    When user enter a <search> criteria
    Then user should see all results of that search

    Examples:
      |search|
      |levi's women skinny jeans super|