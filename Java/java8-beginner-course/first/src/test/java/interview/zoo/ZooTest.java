package interview.zoo;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class ZooTest {
    @Test
    public void shouldTestMyZoo() {
        Animal[] animals = { new Dog(), new Cat() };
        int index = 0; // just for fun
        String[] listAnimals = { "Dog", "Cat" };
        for (Animal animal : animals) {
            String str = listAnimals[index] + " is eating";
            assertEquals(str, animal.eat());
            assertEquals("Marcus", animal.owner());
            index++;
        }
    }
}
