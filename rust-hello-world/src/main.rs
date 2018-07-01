mod enums;
mod loops;
mod sh;

fn main() {
    sh::stack_and_heap();
    loops::loops();
    sh::print_line(0.0, 0.0, 1.0, 2.0);
    enums::print_color();
}
