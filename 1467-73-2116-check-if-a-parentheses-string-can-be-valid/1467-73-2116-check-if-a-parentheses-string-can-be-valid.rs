use std::collections::BTreeSet;

impl Solution {
    pub fn can_be_valid(s: String, locked: String) -> bool {
        if s.len() %2 == 1 { return false; }
        let mut lefts = BTreeSet::new();
        let mut rights = BTreeSet::new();
        let mut unlockeds = BTreeSet::new();
        for (p, (c, l)) in s.chars()
            .zip(locked.chars())
            .enumerate() {
                match l {
                    '1' => match c {
                        '(' => lefts.insert(p),
                        ')' => rights.insert(p),
                        c => panic!("Invalid char {}", c)
                    },
                    '0' => unlockeds.insert(p),
                    l => panic!("Invalid flag {}", l)
                };
            }
        for right in rights {
            match lefts.range(..right).next_back().map(|left| *left) {
                None => match unlockeds.range(..right).next_back().map(|unlocked| *unlocked) {
                    None => { return false; },
                    Some(unlocked) => { unlockeds.remove(&unlocked); }
                },
                Some(left) => { lefts.remove(&left); }
            }
        }
        for left in lefts {
            match unlockeds.range(left..).next().map(|unlocked| *unlocked) {
                None => { return false; },
                Some(unlocked) => { unlockeds.remove(&unlocked); }
            }
        }
        true
    }
}