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
}
