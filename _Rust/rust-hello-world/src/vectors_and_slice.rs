pub fn vectors() {
    let mut a = Vec::new();
    a.push(1);
    a.push(2);
    a.push(3);

    let idx: usize = 3;

    match a.get(idx) {
        Some(x) => println!("a[3]={}", x),
        None => println!("a[3] out of range"),
    }

    for el in &a {
        println!("{}", el);
    }

    let last = a.pop();
    println!("{:?}", last);

    while let Some(x) = a.pop() {
        println!("..{}", x);
    }
}

fn use_slice(slice: &mut [i32]) {
    println!("length={}", slice.len());
    slice[0] = 42;
}

pub fn slices() {
    let mut data = [1, 2, 3, 4, 5];
    use_slice(&mut data[1..2]);
    println!("{:?}", data);
    use_slice(&mut data);
    println!("{:?}", data);
}
