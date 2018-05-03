package steps;

import Objects.LoginObjects;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.appium.java_client.*;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.ios.IOSDriver;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Keyboard;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import sun.reflect.generics.tree.Tree;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.*;
import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import static org.junit.Assert.*;

/**
 * Created by username on 28-03-17.
 */


public class TestWsp {
    private AppiumDriver driver;
    private URL url;
    Dimension size;
    LoginObjects objects_test = new LoginObjects();

   @Given("^the installation of the app$")
    public void setUp() throws MalformedURLException {
        File app = new File("C:/Users/mpizarro/Downloads", "Hybrid.apk");

        URL url = new URL("http://127.0.0.1:4723/wd/hub");
        DesiredCapabilities capabilities = new DesiredCapabilities();

        capabilities.setCapability("device", "Android");
        capabilities.setCapability("deviceName", "MayS8");
        capabilities.setCapability("platformName", "Android");
        capabilities.setCapability("platformVersion", "8.0");
        capabilities.setCapability("appPackage", "com.restwla.z88ab174d");
        capabilities.setCapability("app", app.getAbsolutePath());
        capabilities.setCapability("browser", "");
        //capabilities.setCapability("autoWebview", "true");
        //capabilities.setCapability("appActivity", "com.contextlogic.wish.browse.BrowseActivity");
        //capabilities.setCapability("autoDismissAlerts", true);
        driver = new AndroidDriver(url, capabilities);
    }

    @After
    public void tearDown() {
        driver.quit();
    }

    //Icon Information
    @When("^the user clicks on the information icon$")
    public void the_user_clicks_on_the_information_icon() throws InterruptedException {
        Thread.sleep(3000);
        WebDriverWait wait = new WebDriverWait(driver, 10);
        MobileElement icon_information = (MobileElement) wait.until(ExpectedConditions.elementToBeClickable(By.xpath(objects_test.iconInformation)));
        icon_information.click();
    }

    @And("^access information$")
    public void access_information() throws InterruptedException {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        Assert.assertEquals(driver.findElement(By.xpath(objects_test.tableReservation)).getText(), "TABLE RESERVATION");
        MobileElement icon_behind = (MobileElement) wait.until(ExpectedConditions.elementToBeClickable(By.xpath(objects_test.iconBehind)));
        icon_behind.click();
    }

    @Then("^return to the main menu$")
    public void return_to_the_main_menu() throws InterruptedException {
        Assert.assertEquals(driver.findElement(By.xpath(objects_test.iconInformation)).getText(), "Informaci�n");
    }

    //Icon gallery
    @When("^the user clicks on the gallery icon$")
    public void the_user_clicks_on_the_gallery_icon() throws InterruptedException {
        Thread.sleep(3000);
        WebDriverWait wait = new WebDriverWait(driver, 10);
        MobileElement icon_gallery = (MobileElement) wait.until(ExpectedConditions.elementToBeClickable(By.xpath(objects_test.iconGallery)));
        icon_gallery.click();
    }

    @And("^access_the_gallery$")
    public void access_the_gallery() throws InterruptedException {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        MobileElement my_photos = (MobileElement) wait.until(ExpectedConditions.elementToBeClickable(By.xpath(objects_test.myPhotos)));
        my_photos.click();
        MobileElement all_photos = (MobileElement) wait.until(ExpectedConditions.elementToBeClickable(By.xpath(objects_test.allPhotos)));
        all_photos.click();
        MobileElement icon_behind = (MobileElement) wait.until(ExpectedConditions.elementToBeClickable(By.xpath(objects_test.iconBehind)));
        icon_behind.click();
    }

    //Login


}