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
}
