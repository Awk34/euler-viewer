pub fn main() -> u32 {
    let mut num1 = 1;
    let mut num2 = 1;
    let mut num3;
    let mut sum = 0;
    let max = 4_000_000;

    while num2 < max {
        if num2 % 2 == 0 {
            sum += num2;
        }

        num3 = num2;
        num2 = num1 + num2;
        num1 = num3;
    }

    sum
}

// The Sum of all even Fibonacci numbers below 4000000 is 4613732
