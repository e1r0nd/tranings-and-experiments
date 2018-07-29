mod arrays;
mod dispatch;
mod enums;
mod generics;
mod hof;
mod lifetime;
mod loops;
mod methods;
mod option;
mod pm;
mod sh;
mod strings;
mod traits;
mod tuples;
mod unions;
mod vectors_and_slice;

fn increase_value(x: &mut i32) {
    *x += 1
}

fn main() {
    sh::stack_and_heap();
    loops::loops();
    sh::print_line(0.0, 0.0, 1.0, 2.0);
    enums::print_color();
    unions::unions();
    option::option();
    arrays::array();
    vectors_and_slice::vectors();
    vectors_and_slice::slices();
    strings::strings();
    tuples::tuples();
    pm::pattern_matching();
    generics::generics();

    let mut z: i32 = 0;
    println!("before: {}", z);
    increase_value(&mut z);
    println!("after: {}", z);

    methods::methods();
    hof::hof();

    traits::traits();
    dispatch::dispatch();
    lifetime::lifetime();
}
