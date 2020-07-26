mod m2;
mod m4;
mod m5;
mod m6;
mod rust1;
mod rust2;
mod rust3;
mod rust5;

fn main() {
    rust1::main1();

    let number = 10;
    let cubed = i32::pow(number, 3);
    let cudeb_times_pi = cubed as f64 * std::f64::consts::PI;
    println!("10^3 * PI = {}", cudeb_times_pi);

    m2::main_m2();

    rust2::main2();

    rust3::main3();

    m4::main_m4();

    m5::main();

    rust5::main();

    m5::closures();

    m6::main();
}
