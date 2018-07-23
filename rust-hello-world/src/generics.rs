// Option <T>
struct Point<T> {
    x: T,
    y: T,
}

struct Line<T> {
    start: Point<T>,
    end: Point<T>,
}

pub fn generics() {
    let a: Point<f64> = Point { x: 0f64, y: 0.0 };
    let b: Point<f64> = Point { x: 1.2, y: 3f64 };
    let l = Line { start: a, end: b };

    // println!("a({}, {})", a.x, a.y);
    // println!("b({}, {})", b.x, b.y);
    println!(
        "line:({}, {})-({}, {})",
        l.start.x, l.start.y, l.end.x, l.end.y
    );
}
