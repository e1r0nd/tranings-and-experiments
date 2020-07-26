pub fn main2() {
    let x: bool = true;

    if x {
        println!("x is true!");
    }

    let mut x = 5;
    let mut keep_looping = true;
    while keep_looping {
        x += 5;
        if x > 20 {
            keep_looping = false;
        }
        print!("{}...", x);
    }

    println!("");
    for x in 0..5 {
        print!("{}...", x);
    }

    let brand = "Apple";
    match brand {
        "Apple" => println!("Great brand!"),
        "Linux" => println!("Open source"),
        _ => println!("oops"),
    }

    let area_code = 207;
    let area = match area_code {
        206 => "Seattle",
        318 => "Lousiana",
        200...300 => "Washington State",
        _ => "USA",
    };

    println!("Area: {}", area);
}
