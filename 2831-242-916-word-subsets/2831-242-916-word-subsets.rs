impl Solution {
    pub fn word_subsets(words1: Vec<String>, words2: Vec<String>) -> Vec<String> {
        let chars = words2
            .into_iter()
            .map(|s| Self::count_chars(&s))
            .reduce(Self::list_max)
            .unwrap();

        words1
            .into_iter()
            .filter(|s| {
                Self::count_chars(s)
                    .into_iter()
                    .zip(chars)
                    .all(|(a, b)| a >= b)
            })
            .collect()
    }

    fn count_chars(str: &str) -> [usize; 26] {
        str.bytes()
            .map(|c| (c - b'a') as usize)
            .fold([0; 26], |mut acc, c| {
                acc[c] += 1;
                acc
            })
    }

    fn list_max(mut x: [usize; 26], y: [usize; 26]) -> [usize; 26] {
        x.iter_mut().zip(y).for_each(|(a, b)| *a = b.max(*a));
        x
    }
}