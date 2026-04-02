fn f(mut x: u32) -> bool {
	let mut y: u32 = 0;
	let mut done = false;
	let mut result = false;

	while !done {
		let s = x.to_string();
		let digits = s.chars()
			.map(|c| c.to_digit(10).unwrap());

		for digit in digits {
			y = y + digit.pow(2);
		}

		if y == 1 {
			done = true;
			result = false;
		} else if y == 89 {
			done = true;
			result = true;
		} else {
			x = y;
			y = 0;
		}
	}

	result
}

pub fn main() -> u32 {
	let mut acc = 0;

	for i in 1..10000000 {
		if f(i) {
			acc = acc + 1;
		}
	}

	acc
}
