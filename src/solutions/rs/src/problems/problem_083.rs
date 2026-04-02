const MATRIX: [[u32; 5]; 5] = [
[131, 673, 234, 103, 18], 
[201, 96, 342, 965, 150],
[630, 803, 746, 422, 111],
[537, 699, 497, 121, 956],
[805, 732, 524, 37, 331]];
// const SOLUTION_5X5_MAP: [[u32; 5]; 5] = [
// [ 1 , 0 , 1 , 1 , 1 ],
// [ 1 , 1 , 1 , 0 , 1 ],
// [ 0 , 0 , 0 , 1 , 1 ],
// [ 0 , 0 , 0 , 1 , 0 ],
// [ 0 , 0 , 0 , 1 , 1 ]];
// const SOLUTION_5X5: u32 = 2297;

struct Point {
    position: [u32; 2],
    g: u32,
    h: u32,
    f: u32,
}

const MIN: u32 = 18;
const END_POSITION: [u32; 2] = [4, 4];

fn up(pos: [u32; 2]) -> Option<[u32; 2]> {
    if pos[0] == 0 {
        None
    } else {
        Some([pos[0] - 1, pos[1]])
    }
}
fn down(pos: [u32; 2]) -> Option<[u32; 2]> {
    Some([pos[0] + 1, pos[1]])
}
fn left(pos: [u32; 2]) -> Option<[u32; 2]> {
    if pos[1] == 0 {
        return None;
    }

    Some([pos[0], pos[1] - 1])
}
fn right(pos: [u32; 2]) -> Option<[u32; 2]> {
    Some([pos[0], pos[1] + 1])
}

fn add_to_open(weight_map: [[u32; 5]; 5], heuristic_map: &Vec<Vec<u32>>, pos: Option<[u32; 2]>, mut open: &mut Vec<Point>, closed: &Vec<Point>, rows: u32, cols: u32) -> bool {
    if pos.is_none() {
        return false
    }

    let row = pos.unwrap()[0];
    let col = pos.unwrap()[1];

    if !can_go(closed, pos.unwrap(), rows, cols) {
        return false
    }

    let point = Point {
        position: [row, col],
        g: weight_map[row as usize][col as usize],
        h: heuristic_map[row as usize][col as usize],
        f: weight_map[row as usize][col as usize] + heuristic_map[row as usize][col as usize],
    };

    if open.binary_search_by_key(&point.f, |point| point.f).is_ok() {
        return false
    }

    let test = open.binary_search_by_key(&point.f, |point| point.f);

    if test.is_ok() {
        let position = open[test.unwrap()].position;
        println!("Ok: {}, {}", position[0], position[1]);
        println!("Open: ");
        for i in 0..open.len() {
            println!("  ({}, {}), {}", open[i].position[0], open[i].position[1], open[i].f);
        }
    }

    let index = open.binary_search_by_key(&point.f, |point| point.f).unwrap_err();
    open.insert(index, point);
    true
}

fn can_go(closed: &Vec<Point>, pos: [u32; 2], rows: u32, cols: u32) -> bool {
    let row = pos[0];
    let col = pos[1];

    // out of bounds check
    if row >= rows || col >= cols {
        return false;
    }

    // check if in closed list
    let closed_length = closed.len();
    for i in 0..closed_length {
        if closed[i].position[0] == row && closed[i].position[1] == col {
            return false
        }
    }

    true
}

pub fn main() -> u32 {
    let weight_map = MATRIX.clone();
    let rows = MATRIX.len() as u32;
    let cols = MATRIX[0].len() as u32;

    let mut solution: u32 = 0;
    let mut open: Vec<Point> = Vec::new();
    let mut closed: Vec<Point> = Vec::new();

    let mut heuristic_map: Vec<Vec<u32>> = Vec::new();
    for i in 0..rows {
        let mut row: Vec<u32> = Vec::new();
        for j in 0..cols {
            row.push(MIN * ((5 -  i) + (5 - j) - 1));
        }
        heuristic_map.push(row);
    }

    solution += weight_map[0][0];    // add starting position weight

    // add first points to open
    let mut p1 = Point {
        position: [0, 1],
        g: weight_map[0][1],
        h: heuristic_map[0][1],
        f: 0,
    };
    p1.f = p1.g + p1.h;

    let mut p2 = Point {
        position: [1, 0],
        g: weight_map[1][0],
        h: heuristic_map[1][0],
        f: 0,
    };
    p2.f = p2.g + p2.h;

    if p1.f <= p2.f {
        open.push(p1);
        open.push(p2);
    } else {
        open.push(p2);
        open.push(p1);
    }

    // add starting point to closed list
    let mut start = Point {
        position: [0, 0],
        g: weight_map[0][0],
        h: heuristic_map[0][0],
        f: 0,
    };
    start.f = start.g + start.h;
    closed.push(start);

    let position = [0, 0];

    while position != END_POSITION {
        let next = open.remove(0);
        println!("Next: ({}, {})", next.position[0], next.position[1]);
        solution += next.g;

        if next.position[0] == END_POSITION[0] && next.position[1] == END_POSITION[1] {
            println!("Reached end!");

            return solution;
        }

        let next_position = next.position;

        closed.push(next);

        // add new points, if possible (in sorted position)
        add_to_open(weight_map, &heuristic_map, up(next_position), &mut open, &closed, rows, cols);
        add_to_open(weight_map, &heuristic_map, down(next_position), &mut open, &closed, rows, cols);
        add_to_open(weight_map, &heuristic_map, left(next_position), &mut open, &closed, rows, cols);
        add_to_open(weight_map, &heuristic_map, right(next_position), &mut open, &closed, rows, cols);
    }

    0
}
