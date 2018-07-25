struct Point {
    x: f64,
    y: f64,
}

struct Line {
    start: Point,
    end: Point,
}

impl Line {
    fn len(&self) -> f64 {
        let dx = self.start.x - self.end.x;
        let dy = self.start.y - self.end.y;
        (dx * dx + dy * dy).sqrt()
    }
}

pub fn methods() {
    let start_point = Point { x: 3.0, y: 4.0 };
    let end_point = Point { x: 5.0, y: 10.0 };
    let myline = Line {
        start: start_point,
        end: end_point,
    };

    println!("length = {}", myline.len());
    let plus_one = |x: f64| -> f64 { x + 1.0 };
    let newx = plus_one(myline.start.x);
    println!("oldx = {}, newx = {}", myline.start.x, newx);

    let plus_three = |x: &mut i32| *x += 3;
    let mut f = 12;
    plus_three(&mut f);
    println!("12 + 3 = {}", f);
}
