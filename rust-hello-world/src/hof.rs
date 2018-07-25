pub fn is_even(num: i32) -> bool {
    num % 2 == 0
}

pub fn hof() {
    let limit = 150;
    let mut sum = 0;

    for i in 0.. {
        let isq = i * i;
        if isq > limit {
            break;
        } else if is_even(isq) {
            sum += isq;
        }
    }
    println!("loop sum = {}", sum);

    let sum2 = (0..)
        .map(|x| x * x)
        .take_while(|&x| x <= limit)
        .filter(|x| is_even(*x))
        .fold(0, |sum, x| sum + x);
    println!("sum2 = {}", sum2);
}
