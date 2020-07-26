use std::mem;

fn the_answer() -> u8 {
    let result: u8 = 42;
    result
}
fn main() {
    let answer = the_answer();
    let mut not_an_answer = 0;
    not_an_answer += answer;
    println!("The answer is: {}", not_an_answer);
    println!(
        "The variable = {} is {} bytes",
        not_an_answer,
        mem::size_of_val(&not_an_answer)
    );

    let z: isize = 0;
    let z_size = mem::size_of_val(&z);
    println!(
        "z = {}, takes up {} bytes on {}-bit OS",
        z,
        z_size,
        z_size * 8
    );

    let one_char = 'c';
    let long_string = "just a string";
    println!(
        "One char = {} is {} bytes\nLong string = {} is {} bytes",
        one_char,
        mem::size_of_val(&one_char),
        long_string,
        mem::size_of_val(&long_string)
    );

    let true_or_false = 4 > 0;
    println!("Is it true? {}", true_or_false);
}
