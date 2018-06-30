pub fn main_m2() {
    println!("--- Challenge ---\n{}", 1);

    let n1 = 5;
    let n2 = 6;

    {
        let res = n1 * n2;
        println!("Scoped result: {}", res);
    }

    let res = n1 * n2 * 2;
    println!("Global result: {}", res);
}
