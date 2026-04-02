pub fn main() -> u32 {
    let mut total = 0;

    for n in 1..1000 {
        if n % 3 == 0 || n % 5 == 0 {
            total += n;
        }
    }

    total
}
