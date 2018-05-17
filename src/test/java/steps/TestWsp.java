package steps;

import Objects.LoginObjects;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.appium.java_client.*;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.ios.IOSDriver;
import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Keyboard;
import org.openqa.selenium.interactions.touch.TouchActions;
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
    LoginObjects objects_test = new LoginObjects();

    @Before
    public void beforeScenario() throws MalformedURLException, InterruptedException {
        File app = new File("C:/Users/mpizarro/Downloads", "Hybrid.apk");

        url = new URL("http://127.0.0.1:4723/wd/hub");
        DesiredCapabilities capabilities = new DesiredCapabilities();

        capabilities.setCapability("device", "Android");
        capabilities.setCapability("deviceName", "MayS8");
        capabilities.setCapability("platformName", "Android");
        capabilities.setCapability("platformVersion", "8.0");
        capabilities.setCapability("appPackage", "com.restwla.z88ab174d");
        capabilities.setCapability("app", app.getAbsolutePath());
        capabilities.setCapability("browser", "");

        driver = new AndroidDriver(url, capabilities);
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);

    }

    @After
    public void afterScenario() {
        driver.quit();
    }

   @Given("^the application is open$")
    public void ffgfgg() throws MalformedURLException, InterruptedException {
        Thread.sleep(5000);
        Assert.assertEquals(driver.findElement(By.xpath(objects_test.iconInformation)).getText(), "Información");
     }

    //Icon Information
    @When("^the user clicks on the information icon$")
    public void the_user_clicks_on_the_information_icon() throws InterruptedException {
        Thread.sleep(5000);
        WebDriverWait wait = new WebDriverWait(driver, 10);
        MobileElement icon_information = (MobileElement) wait.until(ExpectedConditions.elementToBeClickable(By.xpath(objects_test.iconInformation)));
        icon_information.click();
    }

    @And("^access information$")
    public void access_information() throws InterruptedException {
        Thread.sleep(3000);
        WebDriverWait wait = new WebDriverWait(driver, 10);
        Assert.assertEquals(driver.findElement(By.xpath(objects_test.tableReservation)).getText(), "TABLE RESERVATION");
        MobileElement icon_behind = (MobileElement) wait.until(ExpectedConditions.elementToBeClickable(By.xpath(objects_test.iconBehind)));
        icon_behind.click();
    }

    @Then("^return to the main menu$")
    public void return_to_the_main_menu() throws InterruptedException {
        Assert.assertEquals(driver.findElement(By.xpath(objects_test.iconInformation)).getText(), "Información");
    }

    //Icon gallery
    @When("^the user clicks on the gallery icon$")
    public void the_user_clicks_on_the_gallery_icon() throws InterruptedException {
        Thread.sleep(5000);
        WebDriverWait wait = new WebDriverWait(driver, 10);
        MobileElement icon_gallery = (MobileElement) wait.until(ExpectedConditions.elementToBeClickable(By.xpath(objects_test.iconGallery)));
        icon_gallery.click();
    }

    @And("^access the gallery$")
    public void access_the_gallery() throws InterruptedException {
        Thread.sleep(4000);
        WebDriverWait wait = new WebDriverWait(driver, 10);
        MobileElement my_photos = (MobileElement) wait.until(ExpectedConditions.elementToBeClickable(By.xpath(objects_test.myPhotos)));
        my_photos.click();
        MobileElement all_photos = (MobileElement) wait.until(ExpectedConditions.elementToBeClickable(By.xpath(objects_test.allPhotos)));
        all_photos.click();
        MobileElement icon_behind = (MobileElement) wait.until(ExpectedConditions.elementToBeClickable(By.xpath(objects_test.iconBehind)));
        icon_behind.click();
    }

    //Login
    @When("^user enter the login view$")
    public void user_enter_the_login_view() throws InterruptedException {
        Thread.sleep(5000);
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        MobileElement user_button = (MobileElement) driver.findElement(By.id(objects_test.user));
        user_button.click();

        MobileElement login_opcion = (MobileElement) driver.findElement(By.xpath(objects_test.login));
        login_opcion.click();

    }

    @And("^enter (.*),(.*) and (.*)$")
    public void enter_personal_data(String name, String mail, String password) throws InterruptedException {
        Thread.sleep(5000);
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

        MobileElement user_name = (MobileElement) driver.findElement(By.id(objects_test.name));
        user_name.sendKeys(name);

        MobileElement user_mail = (MobileElement) driver.findElement(By.id(objects_test.mail));
        user_mail.sendKeys(mail);

        MobileElement user_password = (MobileElement) driver.findElement(By.id(objects_test.password));
        user_password.sendKeys(password);

        MobileElement sign_button = (MobileElement) driver.findElement(By.id(objects_test.signUp));
        sign_button.click();
    }


}
