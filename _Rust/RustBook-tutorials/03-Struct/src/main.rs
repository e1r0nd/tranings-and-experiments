#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}
impl Rectangle {
    fn square(size: u32) -> Rectangle {
        Rectangle {
            width: size,
            height: size,
        }
    }
    fn area(&self) -> u32 {
        self.width * self.height
    }
}
fn main() {
    // Using a plain function
    let width1 = 30;
    let height1 = 50;
    println!(
        "The area of the rectangle is {} square pixels (using a plain function)",
        area(width1, height1)
    );

    // Using a tuple
    let rect1 = (30, 50);
    println!(
        "The area of the rectangle is {} square pixels (using a tuple)",
        area_by_tuple(rect1)
    );

    // Using a structure
    let rect2 = Rectangle {
        width: 30,
        height: 50,
    };
    println!(
        "The area of the rectangle is {} square pixels (using a struct)",
        area_by_struct(&rect2)
    );
    println!("The rectangle is: {:?}", rect2);
    println!(
        "The area of the rectangle is {} square pixels (using a method)",
        rect2.area()
    );
    // Construct a square
    let square1 = Rectangle::square(50);
    println!("The is a square {:?}", square1);
    println!("This square has an area: {}", square1.area());
}

fn area(width: u32, height: u32) -> u32 {
    width * height
}

fn area_by_tuple(dimensions: (u32, u32)) -> u32 {
    dimensions.0 * dimensions.1
}

fn area_by_struct(rect: &Rectangle) -> u32 {
    rect.width * rect.height
}