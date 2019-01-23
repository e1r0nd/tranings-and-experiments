pub fn option() {
    let x = 3.0;
    let y = 2.0;
    let result: Option<f64> = if y != 0.0 { Some(x / y) } else { None };

    match result {
        Some(z) => println!("{} / {} = {}", x, y, z),
        None => println!("{} / {} !", x, y),
    }
    let y = 0.0;
    let result: Option<f64> = if y != 0.0 { Some(x / y) } else { None };
    match result {
        Some(z) => println!("{} / {} = {}", x, y, z),
        None => println!("{} / {} !", x, y),
    }

    // if let / while let
    let y = 2.0;
    let result: Option<f64> = if y != 0.0 { Some(x / y) } else { None };
    if let Some(z) = result {
        println!("z={}", z);
    }
}
