package interview;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class PersonTest {
    @Test
    public void shouldSayHello() {
        Person marcus = new Person("Marcus");
        assertEquals("Hello from Marcus", marcus.hello());
    }

    @Test
    public void shouldCalculatePersons() {
        Person[] persons = new Person[3];
        persons[0] = new Person("name1");
        persons[1] = new Person("name2");
        persons[2] = new Person("name2");

        assertEquals(4, Person.numOfInstance());
    }

    @Test
    public void shouldReviewNames() {
        Person[] persons = new Person[3];
        String[] names = new String[3];

        names[0] = "Marcus";
        names[1] = "Max";
        names[2] = "Anna";

        persons[0] = new Person(names[0]);
        persons[1] = new Person(names[1]);
        persons[2] = new Person(names[2]);

        for (int i = 0; i < persons.length; i++) {
            String str = "Hello from " + names[i];
            assertEquals(str, persons[i].hello());
        }
    }

    @Test
    public void shouldCheckLoggingLevel() {
        LoggingLevel testString = LoggingLevel.PROCESSED;
        assertEquals(LoggingLevel.PROCESSED, testString);
    }
}
