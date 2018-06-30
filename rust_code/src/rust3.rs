struct Student {
    age: i32,
    mark: i32,
}

#[derive(Debug)]
enum Languages {
    Java,
    Scala,
    Kotlin,
}

fn check_division(dividend: i32, divisor: i32) -> Option<i32> {
    if divisor == 0 {
        None
    } else {
        Some(dividend / divisor)
    }
}

fn try_division(dividend: i32, divisor: i32) {
    match check_division(dividend, divisor) {
        Some(i) => println!("{}/{}={}", dividend, divisor, i),
        None => println!("{}/{} failed!", dividend, divisor),
    }
}

pub fn main3() {
    let student: Student = Student { age: 23, mark: 11 };

    println!("--- Module 3 ---");
    println!("Student: age {}, mark {}", student.age, student.mark);

    let Student {
        age: my_age,
        mark: my_mark,
    } = student;
    println!("Information: {} - {}", my_age, my_mark);

    let first_language = Languages::Java;
    println!("{:?}", first_language);

    // Option<T>
    let number = Some(7);
    let letter: Option<i32> = None;

    if let Some(i) = number {
        println!("match! {:?}", i)
    }
    if let Some(i) = letter {
        println!("Match: {:?}", i)
    }

    try_division(10, 5);
    try_division(10, 0);
}
