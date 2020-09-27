package interview;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ch.qos.logback.classic.LoggerContext;
import ch.qos.logback.core.util.StatusPrinter;

/**
 * Hello world!
 *
 */
public class App {
    private static final Logger logger = LoggerFactory.getLogger(interview.App.class);

    public App() {
        /* Generator */
    }

    public String main() {
        LoggerContext lc = (LoggerContext) LoggerFactory.getILoggerFactory();
        StatusPrinter.print(lc);

        final Person marcus = new Person("Marcus");

        final String msg = marcus.hello();
        logger.debug("Debugging...");
        logger.info("The message is: {}", msg);

        return msg;
    }
}
