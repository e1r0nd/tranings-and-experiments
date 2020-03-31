use pulldown_cmark::{html, Parser};
use std::{env, fs};

fn convert(filename: &str) {
    let contents = fs::read_to_string(filename).expect("Something went wrong reading the file");
    let parser = Parser::new(&contents);
    let mut html_output = String::new();
    html::push_html(&mut html_output, parser);
    println!("{}", html_output);
}
fn main() {
    let args: Vec<String> = env::args().collect();
    let program = args[0].clone();
    if args.len() < 2 {
        eprintln!("{} <markdown file>", program);
        return;
    }
    convert(&args[1])
}
