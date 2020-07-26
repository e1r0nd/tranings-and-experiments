use std::mem;

pub fn array() {
    // arrays always are fixed size
    let mut a: [i32; 5] = [1, 2, 3, 4, 5];
    println!("{} elements; a[0]={}", a.len(), a[0]);
    a[0] = 321;
    println!("new a[0]={}", a[0]);
    println!("{:?}", a);
    if a == [321, 2, 3, 4, 5] {
        println!("True: a == [321,2,3,4,5]");
    }

    let b = [1u8; 10];
    for i in 0..b.len() {
        print!("b[{}]={} ", i, b[i]);
    }
    println!("b is {} bytes", mem::size_of_val(&b));

    let mtx: [[f32; 3]; 2] = [[1.0, 0.0, 0.0], [0.0, 2.0, 0.0]];
    println!("{:?}", mtx);
}
