mod arrays;
mod enums;
mod generics;
mod loops;
mod option;
mod pm;
mod sh;
mod strings;
mod tuples;
mod unions;
mod vectors_and_slice;

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
}
