pub fn main_m4() {
    let my_vec = vec![1, 2, 3, 4, 5, 2, 9, 9, 5, 2];
    let mut res = vec![];

    println!("Initial: {:?}", my_vec);
    for i in &my_vec {
        if i % 3 == 0 {
            println!("!{}", i);
        } else {
            res.push(i);
        }
    }

    println!("New: {:?}", res);
}
