package interview.car;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class CarTest {
    @Test
    public void shouldDriveCar() {
        Bmw bmw = new Bmw();
        Porsche porsche = new Porsche();

        assertEquals("BMW drives", bmw.drive());
        assertEquals("Porsche drives", porsche.drive());
        assertEquals("Marcus", porsche.owner());
    }
}
