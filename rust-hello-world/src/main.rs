fn the_answer() -> u8 {
    let result: u8 = 42;
    result
}
fn main() {
    let answer = the_answer();
    let mut not_an_answer = 0;
    not_an_answer += answer;
    println!("The answer is: {}", not_an_answer);
}
