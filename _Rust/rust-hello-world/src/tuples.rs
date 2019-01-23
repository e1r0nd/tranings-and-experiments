fn sum_and_prod(x: i32, y: i32) -> (i32, i32) {
    (x + y, x * y)
}

pub fn tuples() {
    let x = 3;
    let y = 4;
    let sp = sum_and_prod(x, y);
    println!("sp = {:?}", sp);
    println!("{0} + {1} = {2}, {0} * {1} = {3}", x, y, sp.0, sp.1);

    let (a, b) = sp;
    println!("sum = {}, mul = {}", a, b);

    let sp2 = sum_and_prod(4, 7);
    let combined = (sp, sp2);
    println!("combine = {:?}", combined);
    println!("last element = {}", (combined.1).1);

    let ((c, d), (e, f)) = combined;
    println!("decombined = {}, {}, {}, {}", c, d, e, f);
}
