trait Animal {
    fn create(name: &'static str) -> Self;

    fn name(&self) -> &'static str;

    fn talk(&self) {
        println!("{} cannot talk", self.name());
    }
}

struct Human {
    name: &'static str,
}
struct Cat {
    name: &'static str,
}
struct Bee {
    name: &'static str,
}

impl Animal for Human {
    fn create(name: &'static str) -> Human {
        Human { name: name }
    }
    fn name(&self) -> &'static str {
        self.name
    }

    fn talk(&self) {
        println!("{} says hello", self.name);
    }
}
impl Animal for Cat {
    fn create(name: &'static str) -> Cat {
        Cat { name: name }
    }

    fn name(&self) -> &'static str {
        self.name
    }

    fn talk(&self) {
        println!("{} says meow", self.name);
    }
}
impl Animal for Bee {
    fn create(name: &'static str) -> Bee {
        Bee { name: name }
    }

    fn name(&self) -> &'static str {
        self.name
    }
}

trait Summable<T> {
    fn sum(&self) -> T;
}
impl Summable<i32> for Vec<i32> {
    fn sum(&self) -> i32 {
        let mut result: i32 = 0;
        for x in self {
            result += *x;
        }
        result
    }
}
pub fn traits() {
    let b = Bee::create("Maya");
    b.talk();

    let h: Human = Animal::create("John");
    h.talk();

    let c: Cat = Animal::create("Misty");
    c.talk();

    let a = vec![1, 2, 3];
    println!("sum = {}", a.sum());
}
