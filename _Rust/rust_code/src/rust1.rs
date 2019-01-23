use std::mem;

fn foo_function() {
    let a = "a String here";
    println!("Print this: {}", a);
}

pub fn main1() {
    let bool_var = true;
    println!("Var: {}", bool_var);

    foo_function();
    let stack = 10;
    let heap = Box::new(stack);
    println!("stack={} heap={}", stack, heap);
    println!(
        "size of stack={}, size of heap={}",
        mem::size_of_val(&stack),
        mem::size_of_val(&heap)
    );
}
