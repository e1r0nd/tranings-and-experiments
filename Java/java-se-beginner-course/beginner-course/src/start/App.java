package start;

import java.time.LocalDate;
import java.util.Date;

public class App {
    private static void refTypes() {
        int a = 10;
        int b = a;
        System.out.println(b);
        a = 11;
        System.out.println(b);

        Person alex = new Person("Alex");
        Person maria = alex;
        System.out.println(alex.name + " " + maria.name);
        alex.name = "Who?";
        System.out.println(maria.name);
    }

    static class Person {
        String name;

        Person(String name) {
            this.name = name;
        }

        Date date = new Date();
        LocalDate localDate = LocalDate.now();
    }

    public static void main(String[] args) {
        System.out.println("Hello, World!");

        String name = "Hello";
        System.out.println(name.toUpperCase());

        String string = "Hello World";
        String result = "";
        for (int i = 0; i < string.length(); i++) {
            String c = Character.toString(string.charAt(i));
            if (c.toUpperCase() == c) {
                result += c.toLowerCase();
            } else {
                result += c.toUpperCase();
            }
        }

        refTypes();
    }
}
