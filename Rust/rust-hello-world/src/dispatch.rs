trait Printable {
    fn format(&self) -> String;
}

impl Printable for i32 {
    fn format(&self) -> String {
        format!("i32: {}", *self)
    }
}
impl Printable for String {
    fn format(&self) -> String {
        format!("string: {}", *self)
    }
}

fn print_it<T: Printable>(z: T) {
    println!("{}", z.format());
}
fn print_it2(z: &Printable) {
    println!("dynamic: {}", z.format());
}

pub fn dispatch() {
    let a = 123;
    let b = "hello".to_string();
    println!("a.format : {}", a.format());
    println!("b.format : {}", b.format());
    print_it(a);
    print_it(b);

    print_it2(&a);
}
