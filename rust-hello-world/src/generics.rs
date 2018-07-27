// Option <T>
struct Point<T> {
    x: T,
    y: T,
}
struct Line<T> {
    start: Point<T>,
    end: Point<T>,
}

#[derive(Debug)]
struct PointF64 {
    x: f64,
    y: f64,
}
use std::ops::Add;
impl Add for PointF64 {
    type Output = PointF64;

    fn add(self, other: PointF64) -> PointF64 {
        PointF64 {
            x: self.x + other.x,
            y: self.y + other.y,
        }
    }
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

    let p1: PointF64 = PointF64 { x: 1.2, y: 0.0 };
    let p2: PointF64 = PointF64 { x: 3.4, y: 5.6 };
    let p3 = p1 + p2;
    println!("p1 + p2 = {:?}", p3);
}
