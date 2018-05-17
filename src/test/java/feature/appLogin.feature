Feature: Verify login functionality

  Background: Install the app
    Given the application is open

  @Regression
  Scenario Outline: Login app
    When user enter the login view
    And enter <name>, <mail> and <password>
    Then return to the main menu

    Examples:
      |name|mail|password|
      |May|mpizarrob95@gmail.com|az12345WsxEdc234|