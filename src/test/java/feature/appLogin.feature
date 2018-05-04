Feature: Verify login functionality

  Background: Install the app
    Given the installation of the app

  Scenario Outline: Login app
    When user enter the login view
    And enter <name>, <mail> and <password>
    Then return to the main menu

    Examples:
      |name|mail|password|
      |May|maiditabarata@gmail.com| az12345WsxEdc234|