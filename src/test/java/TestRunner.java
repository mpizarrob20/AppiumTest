import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by wreyes on 03-04-2017.
 */

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"C:\\Users\\mpizarro\\IdeaProjects\\appiumTestExample\\src\\test\\java\\feature\\app.feature" +
                ""}
        ,format = {"pretty", "html:results/cucumber"}
)

public class TestRunner {
}
