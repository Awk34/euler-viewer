use wasm_bindgen::prelude::*;
use serde::{Serialize, Deserialize};

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console, js_name = log)]
    pub fn console_log(s: &str);
}

#[macro_export]
macro_rules! console_println {
    ($($t:tt)*) => {
        $crate::console_log(&format_args!($($t)*).to_string())
    }
}

pub mod problems;

pub mod util {
    pub mod is_prime;
}

#[derive(Serialize, Deserialize)]
pub struct RunResult {
    pub duration: f64,
    pub solution: f64,
    pub steps: u64,
}

#[wasm_bindgen]
pub fn run_problem(id: u32) -> Result<JsValue, JsValue> {
    console_error_panic_hook::set_once();
    
    let start = web_sys::window().unwrap().performance().unwrap().now();
    
    let solution: f64 = match id {
        1 => problems::problem_001::main() as f64,
        2 => problems::problem_002::main() as f64,
        3 => problems::problem_003::main() as f64,
        4 => problems::problem_004::main() as f64,
        5 => problems::problem_005::main() as f64,
        6 => problems::problem_006::main() as f64,
        7 => problems::problem_007::main() as f64,
        8 => problems::problem_008::main() as f64,
        9 => problems::problem_009::main() as f64,
        83 => problems::problem_083::main() as f64,
        92 => problems::problem_092::main() as f64,
        _ => return Err(JsValue::from_str("Problem not found or not implemented in Rust.")),
    };
    
    let end = web_sys::window().unwrap().performance().unwrap().now();
    let duration = end - start;
    
    let result = RunResult {
        duration,
        solution,
        steps: 0,
    };
    
    Ok(serde_wasm_bindgen::to_value(&result).map_err(|e| JsValue::from_str(&e.to_string()))?)
}
