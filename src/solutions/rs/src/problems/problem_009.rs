pub fn main() -> u32 {
    // a^2 + b^2 == c^2 && a + b + c = 1000

    for a in 1..998 {
        for b in 1..998 {
            for c in 1..998 {
                if a * a + b * b == c * c && a + b + c == 1000 {
                    println!("a: {}, b: {}, c: {}", a, b, c);
                }
            }
        }
    }

    0
}
