package interview;

public class Person {
    private final String name;
    private static int entityNumber;

    public String hello() {
        return "Hello from " + this.name;
    }

    public static int numOfInstance() {
        return entityNumber;
    }

    public Person(final String name) {
        entityNumber++;
        this.name = name;
    }
}
