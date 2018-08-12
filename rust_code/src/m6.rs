fn print_mul1(v: Vec<i32>) -> Vec<i32> {
    println!("{}", v[0] * v[1]);
    v
}

fn print_mul2(vr: &Vec<i32>) {
    println!("{}", (*vr)[0] * (*vr)[1]);
}

fn print_mul3(v: &Vec<i32>) {
    println!("{}", v[0] * v[1]);
}

fn count(v2: &Vec<i32>, val: i32) -> usize {
    v2.into_iter().filter(|&&x| x == val).count()
}

pub fn main() {
    println!("--- OWNERSHIP ---");

    let mut v = Vec::new();
    for i in 100..1000 {
        v.push(i);
    }
    v = print_mul1(v);
    println!("(1) We still have v: {}, {}, ...", v[0], v[1]);

    print_mul2(&v);
    println!("(2) We still have v: {}, {}, ...", v[0], v[1]);

    print_mul3(&v);
    println!("(3) We still have v: {}, {}, ...", v[0], v[1]);

    println!("\nAnother example");
    let v2 = vec![2, 9, 3, 1, 3, 2, 5, 5, 2];
    for &item in &v2 {
        let res = count(&v2, item);
        println!("{} x{}", &item, res);
    }
}
