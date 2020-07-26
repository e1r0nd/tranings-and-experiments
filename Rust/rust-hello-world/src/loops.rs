pub fn loops() {
    let mut y = 1;

    loop {
        print!("{}...", y);
        y += 1;
        if y == 10 {
            break;
        }
    }

    println!("");
    for i in 1..11 {
        if i % 2 != 0 {
            continue;
        }
        print!("{}..", i);
    }

    for (pos, x) in (30..41).enumerate() {
        println!("{}: {}", pos, x);
    }
}
