fn is_palindrome(string: &str) -> bool {
    string.chars().zip(string.chars().rev()).all(|(x, y)| x == y)
}

fn factor(num: i32) -> Vec<i32> {
    let mut factors: Vec<i32> = Vec::new(); // creates a new vector for the factors of the number
 
    for i in 1..((num as f32).sqrt() as i32 + 1) { 
        if num % i == 0 {
            factors.push(i);
            factors.push(num/i);
        }
    }
    factors.sort(); // sorts the factors into numerical order for viewing purposes
    factors // returns the factors
}

pub fn main() -> i32 {
    let mut n = 999 * 999;

    loop {
        let str = n.to_string();
        if !is_palindrome(&str) {
            n = n - 1;
            continue;
        }

        let factors = factor(n);

        let mut has_proper_factors = false;
        for i in 0..(factors.len()) {
            let fac1 = factors[i];
            let fac2 = n/fac1;

            if fac1.to_string().len() == 3 && fac2.to_string().len() == 3 {
                has_proper_factors = true;
                break;
            } else {
                continue;
            }
        }

        if has_proper_factors {
            // println!("{}", str);
            break;
        } else {
            n = n - 1;
            continue;
        }
    }

    n
}
