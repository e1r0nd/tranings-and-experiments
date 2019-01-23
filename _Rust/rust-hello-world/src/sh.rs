#![allow(dead_code)]
use std::mem;

struct Point {
    x: f64,
    y: f64,
}

struct Line {
    start: Point,
    end: Point,
}

fn origin() -> Point {
    Point { x: 0.0, y: 0.0 }
}

pub fn stack_and_heap() {
    let p1 = origin();
    let p2 = Box::new(origin());

    println!(
        "p1 takes {}, p2 takes {}",
        mem::size_of_val(&p1),
        mem::size_of_val(&p2)
    );

    let p3 = *p2;
    println!("p3 -> p2.x = {}", p3.x);
}

pub fn print_line(x1: f64, y1: f64, x2: f64, y2: f64) {
    let start_point = Point { x: x1, y: y1 };
    let end_point = Point { x: x2, y: y2 };
    let line = Line {
        start: start_point,
        end: end_point,
    };
    println!(
        "Line: ({}, {}) -> ({}, {})",
        line.start.x, line.start.y, line.end.x, line.end.y
    );
}
