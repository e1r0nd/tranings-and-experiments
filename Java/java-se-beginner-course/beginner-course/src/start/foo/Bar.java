package start.foo;

public class Bar {
    int num = 100;
    String some = "things";
    double n2 = 100.01;
    short theShort = 32_001;

    byte theByte = -128; // Cannot be "-129"
    long theLong = 123908238409239L; // Should end with "L"

}
