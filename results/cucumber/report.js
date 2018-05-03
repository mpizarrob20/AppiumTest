$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("app.feature");
formatter.feature({
  "line": 2,
  "name": "Check app functionality",
  "description": "",
  "id": "check-app-functionality",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "Install the app",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "the installation of the app",
  "keyword": "Given "
});
formatter.match({
  "location": "TestWsp.setUp()"
});
formatter.result({
  "duration": 18113379140,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Test icon information",
  "description": "",
  "id": "check-app-functionality;test-icon-information",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "the user clicks on the information icon",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "access information",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "return to the main menu",
  "keyword": "Then "
});
formatter.match({
  "location": "TestWsp.the_user_clicks_on_the_information_icon()"
});
formatter.result({
  "duration": 5894028913,
  "status": "passed"
});
formatter.match({
  "location": "TestWsp.access_information()"
});
formatter.result({
  "duration": 3678030969,
  "status": "passed"
});
formatter.match({
  "location": "TestWsp.return_to_the_main_menu()"
});
formatter.result({
  "duration": 1834436533,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Install the app",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "the installation of the app",
  "keyword": "Given "
});
formatter.match({
  "location": "TestWsp.setUp()"
});
formatter.result({
  "duration": 15641987150,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Test gallery icon",
  "description": "",
  "id": "check-app-functionality;test-gallery-icon",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "the user clicks on the gallery icon",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "access the gallery",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "return to the main menu",
  "keyword": "Then "
});
formatter.match({
  "location": "TestWsp.the_user_clicks_on_the_gallery_icon()"
});
formatter.result({
  "duration": 8083271561,
  "status": "passed"
});
formatter.match({
  "location": "TestWsp.access_the_gallery()"
});
formatter.result({
  "duration": 7049697870,
  "status": "passed"
});
formatter.match({
  "location": "TestWsp.return_to_the_main_menu()"
});
formatter.result({
  "duration": 551677938,
  "status": "passed"
});
formatter.uri("appLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Verify login functionality",
  "description": "",
  "id": "verify-login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Login app",
  "description": "",
  "id": "verify-login-functionality;login-app",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "user enter the login view",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "enter \u003cname\u003e, \u003cmail\u003e and \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "return to the main menu",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "verify-login-functionality;login-app;",
  "rows": [
    {
      "cells": [
        "name",
        "mail",
        "password"
      ],
      "line": 12,
      "id": "verify-login-functionality;login-app;;1"
    },
    {
      "cells": [
        "Maydalis",
        "mpizarrob20@gmail.com",
        "maydalis12345"
      ],
      "line": 13,
      "id": "verify-login-functionality;login-app;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "Install the app",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the installation of the app",
  "keyword": "Given "
});
formatter.match({
  "location": "TestWsp.setUp()"
});
formatter.result({
  "duration": 15387019486,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login app",
  "description": "",
  "id": "verify-login-functionality;login-app;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "user enter the login view",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "enter Maydalis, mpizarrob20@gmail.com and maydalis12345",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "return to the main menu",
  "keyword": "Then "
});
formatter.match({
  "location": "TestWsp.user_enter_the_login_view()"
});
formatter.result({
  "duration": 6735320694,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Maydalis",
      "offset": 6
    },
    {
      "val": " mpizarrob20@gmail.com",
      "offset": 15
    },
    {
      "val": "maydalis12345",
      "offset": 42
    }
  ],
  "location": "TestWsp.enter_personal_data(String,String,String)"
});
formatter.result({
  "duration": 26011002453,
  "status": "passed"
});
formatter.match({
  "location": "TestWsp.return_to_the_main_menu()"
});
formatter.result({
  "duration": 10040801208,
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027NI-NTB-020\u0027, ip: \u0027192.168.220.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: C:\\Users\\mpizarro\\Downloads..., appActivity: com.application.zomato.bake..., appPackage: com.restwla.z88ab174d, appWaitActivity: com.application.zomato.bake..., appWaitPackage: com.restwla.z88ab174d, browser: , databaseEnabled: false, desired: {app: C:\\Users\\mpizarro\\Downloads..., appPackage: com.restwla.z88ab174d, browser: , device: Android, deviceName: MayS8, platformName: android, platformVersion: 8.0}, device: Android, deviceManufacturer: samsung, deviceModel: SM-G950F, deviceName: 988a17353348335947, deviceScreenSize: 1440x2960, deviceUDID: 988a17353348335947, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, platform: LINUX, platformName: LINUX, platformVersion: 8.0.0, takesScreenshot: true, warnings: {}, webStorageEnabled: false}\nSession ID: 62209bcd-4715-434d-9931-2541d723d078\n*** Element info: {Using\u003dxpath, value\u003d//android.widget.TextView[@text\u003d\u0027Información\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:129)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:62)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:152)\r\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementByXPath(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat steps.TestWsp.return_to_the_main_menu(TestWsp.java:88)\r\n\tat ✽.Then return to the main menu(appLogin.feature:9)\r\n",
  "status": "failed"
});
});