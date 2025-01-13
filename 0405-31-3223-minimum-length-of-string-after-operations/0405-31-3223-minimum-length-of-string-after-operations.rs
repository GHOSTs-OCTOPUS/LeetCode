use std::collections::HashMap;
impl Solution {
    pub fn minimum_length(s: String) -> i32 {
        let s: Vec<char> = s.chars().collect();
        let mut d: HashMap<char, usize> = HashMap::with_capacity(26);
        for c in s.iter() {
            *d.entry(*c).or_insert(0) += 1;
        }
        let mut deleted: usize = 0;
        for (k, v) in d.iter() {
            deleted += if v & 1 == 0 { v - 2 } else { v - 1 };
        }
        (s.len() - deleted) as i32
    }
}