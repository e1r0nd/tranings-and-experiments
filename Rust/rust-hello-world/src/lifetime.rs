struct Person {
    name: String,
}

struct Company<'z> {
    name: String,
    ceo: &'z Person,
}

pub fn lifetime() {
    let boss = Person {
        name: String::from("Elon Musk"),
    };
    let tesla = Company {
        name: String::from("Tesla"),
        ceo: &boss,
    };
    println!("Company: {}; CEO: {}", tesla.name, tesla.ceo.name);
}
