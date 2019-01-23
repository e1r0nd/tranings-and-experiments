fn operators() {
    let a = 14;
    println!("remiders of {} / {} = {}", a, 3, (a % 3));

    let a_cubed = i32::pow(a, 3);
    println!("a^3 = {}", a_cubed);

    let b = 2.5;
    let b_cubed = f64::powi(b, 3);
    let b_to_pi = f64::powf(b, std::f64::consts::PI);
    println!("b={}, b^3={}, b^PI={}", b, b_cubed, b_to_pi);

    // bitwise
    let c = 1 | 2; // 01b OR 10b = 11b = 3_10
    println!("1|2={}", c);

    let two_to_10 = 1 << 10;
    println!("2^10={}", two_to_10);
}

fn main() {
    operators();
}
