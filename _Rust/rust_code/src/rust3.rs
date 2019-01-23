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
    let second_language = Languages::Scala;
    let third_language = Languages::Kotlin;
    println!(
        "1st lang: {:?}, 2nd lang: {:?}, 3rd lang: {:?}",
        first_language, second_language, third_language
    );

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

    // Arrays
    let my_array = [1, 2, 3];
    println!("Array: {:?}", my_array);
    let mut index = 0;
    for i in my_array.iter() {
        print!("my_arr[{}] = {}; ", i, my_array[index]);
        index += 1;
    }
    println!("<---");

    let big_arr = [4; 5];
    println!("Big arr: {:?}", big_arr);
    for i in 0..big_arr.len() {
        print!("big_arr[{}] = {}; ", i, big_arr[i]);
    }
    println!("<---");

    // Vectors
    let mut my_vector = vec![1, 2, 3, 4];
    let vector_a = vec![0; 3];
    println!("my_vector[3]={}", my_vector[3]);
    my_vector.push(0);
    println!("{:?}", my_vector);
    println!("{:?}", vector_a);
    my_vector.remove(1);
    println!("After remove: {:?}", my_vector);
    for i in my_vector {
        print!("el: {}; ", i);
    }
    println!("<---");
}
