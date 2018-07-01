#[derive(Debug)]

enum Color {
    Red,
    Green,
    Blue,
    RgbColor(u8, u8, u8), // tuple
}

fn enums() {
    let c: Color = Color::Red;

    match c {
        Color::Red => println!("red"),
        Color::Green => println!("green"),
        Color::Blue => println!("blue"),
        Color::RgbColor(0, 0, 0) => println!("black"),
        Color::RgbColor(r, g, b) => println!("rgb({}, {}, {})", r, g, b),
    }
}

pub fn print_color() {
    enums();
}
