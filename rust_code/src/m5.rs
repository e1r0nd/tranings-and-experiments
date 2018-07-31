pub fn main() {
    println!("--- Slicing ---");
    let vector = vec![1, 2, 3];
    let int_vec = &vector[..];
    println!("int_vec: {:?}", int_vec);
    let str_slice: &[&str] = &["a", "b", "c"];
    println!("str_slice: {:?}", str_slice);

    let mut my_str = "Hello there!".to_string();
    my_str.push_str(" Hey.");
    println!("my_str[0]={}, {}", &my_str[..1], my_str);

    let hello = "Hello".to_string();
    let world = " world!".to_string();
    let hello_world = hello + &world;
    println!("{}", hello_world);

    let m_line = "one.
    two..
        three...";
    println!("{}", m_line);
}
