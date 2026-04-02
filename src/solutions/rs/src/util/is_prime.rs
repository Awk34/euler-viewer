pub fn is_prime(n: u32) -> bool {
    let mut i = 2;
    //let sqrt_n = sqrt(n).tofixed(0);
    let sqrt_n = 4;

    while i <= sqrt_n {
        if n % i == 0 {
            return false;
        } else {
            i += 1;
        }
    }

    true
}
