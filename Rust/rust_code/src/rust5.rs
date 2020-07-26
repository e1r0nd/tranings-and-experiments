struct Point {
    x: f32,
    y: f32,
}

struct Rectangle {
    p1: Point,
    p2: Point,
}

struct Pair(i32, f32);

fn rect_area(_rectangle: &Rectangle) {
    let height = _rectangle.p2.y - _rectangle.p1.y;
    let width = _rectangle.p2.x - _rectangle.p1.x;
    println!("width: {}, height: {}", width, height);
    println!("Area: {}", width * height);
}

pub fn main() {
    println!("-------------------");
    println!("Tuples and Structs challange");

    let point1 = Point { x: 3.0, y: 6.0 };
    let point = Point { x: 12.0, y: 17.0 };
    println!("Point: ({}, {})", point.x, point.y);

    let _rectangle = Rectangle {
        p1: point1,
        p2: point,
    };

    rect_area(&_rectangle);

    let pair = Pair(1, 0.1);
    println!("Tuple Pair: {:?} & {:?}", pair.0, pair.1);
    let Pair(integer, decemical) = pair;
    println!("pair: {:?} & {:?}", integer, decemical);
}
