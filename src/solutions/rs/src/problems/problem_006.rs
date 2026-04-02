pub fn main() -> u32 {
    let mut n1: u32 = 1;
    let mut n2 = 1;
    let mut sum1 = 0;
    let mut sum2: u32 = 0;

    while n1 <= 100 {
        sum1 += n1.pow(2);
        n1 = n1 + 1;
    }
    while n2 <= 100 {
        sum2 += n2;
        n2 = n2 + 1;
    }

    sum2.pow(2) - sum1
}
