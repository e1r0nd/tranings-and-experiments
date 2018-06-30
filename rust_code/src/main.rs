mod m2;
mod rust1;

fn main() {
    rust1::main1();

    let number = 10;
    let cubed = i32::pow(number, 3);
    let cudeb_times_pi = cubed as f64 * std::f64::consts::PI;
    println!("10^3 * PI = {}", cudeb_times_pi);

    m2::main_m2();
}
