extern crate primal;

pub fn main() -> u32 {
    primal::StreamingSieve::nth_prime(10001) as u32
}
