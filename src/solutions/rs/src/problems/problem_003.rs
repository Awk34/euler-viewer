fn is_prime(n: u32) -> bool {
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

const NUM: u64 = 600851475143;

pub fn main() -> u32 {
	println!("{}", is_prime(13));

	println!("{}", NUM);

    0
}
