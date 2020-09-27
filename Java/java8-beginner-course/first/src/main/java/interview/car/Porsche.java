package interview.car;

public class Porsche implements Car, Property {
    public String drive() {
        return "Porsche drives";
    }

    public String owner() {
        return "Marcus";
    }
}
