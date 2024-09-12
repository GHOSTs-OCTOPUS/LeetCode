use std::collections::HashSet;
impl Solution {
    pub fn count_consistent_strings(allowed: String, words: Vec<String>) -> i32 {
        let allowed:HashSet<char> = HashSet::from_iter(allowed.chars());
        words.iter().map(|word| 
            if HashSet::from_iter(word.chars()).difference(&allowed).count()==0 {1} else {0}
        ).sum::<i32>()
    }
}