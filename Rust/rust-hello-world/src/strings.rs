pub fn strings() {
    let s: &'static str = "hello world";
    println!("s={}", s);
    for c in s.chars().rev() {
        print!("{}+", c);
    }
    if let Some(c) = s.chars().nth(0) {
        println!("\nc={}", c);
    }

    // Strings
    let mut letters = String::new();
    let mut let_i = 'a' as u8;
    while let_i <= ('z' as u8) {
        letters.push(let_i as char);
        letters.push_str(",");
        let_i += 1;
    }
    println!("{}", letters);
    let u: &str = &letters;
    println!("u={}", u);
    println!("{:?}", letters);
    // let abc = String::from("hell");
    let mut abc = "hell".to_string();
    abc.remove(0);
    abc.push_str("!!!");
    println!("{}", abc.replace("ll", "ww"));
}
