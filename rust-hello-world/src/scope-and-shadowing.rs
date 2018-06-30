const MEANING_OF_LIFE: u8 = 42;
static OH_NO: &str = "Oh! No!";

fn scope_and_shadowing() {
    let a = 123;
    {
        let a = 321;
        println!("inside: {}", a);
    }
    println!("outside: {}", a);
}

fn main() {
    scope_and_shadowing();
    println!("The Answer is {}", MEANING_OF_LIFE);
    println!("Panic? {}", OH_NO);
}
