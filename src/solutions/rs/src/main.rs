//use std::io;
extern crate euler;
extern crate time;

use euler::problems::problem_083;
use time::PreciseTime;

fn main() {
    let start = PreciseTime::now();

    println!("E83: {}", problem_083::main());

    let end = PreciseTime::now();

    let duration = start.to(end);
    let seconds = duration.num_seconds();
    let milliseconds = duration.num_milliseconds();
    let microseconds = duration.num_microseconds().unwrap();
    let nanoseconds = duration.num_nanoseconds().unwrap();

    if seconds < 1 as i64 {
        if milliseconds < 1 as i64 {
            if microseconds < 1 as i64 {
                println!("Time: {} nanoseconds", nanoseconds);
            } else {
                println!("Time: {} microseconds", microseconds);
            }
        } else {
            println!("Time: {} milliseconds", milliseconds);
        }
    } else {
        println!("Time: {} seconds", seconds);
    }

    // let mut number = String::new();

    // io::stdin().read_line(&mut number)
    // 	.expect("Failed to read line");

    // println!("You entered {}", number);
}
