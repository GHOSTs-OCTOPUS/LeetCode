impl Solution {
    pub fn vowel_strings(words: Vec<String>, queries: Vec<Vec<i32>>) -> Vec<i32> {
        let vowels = vec!['a', 'e', 'i', 'o', 'u'];

        let prefix_sum: Vec<i32> = words
            .iter()
            .scan(0, |acc, word| {
                let is_vowel_start_end = word.chars().next().map_or(false, |c| vowels.contains(&c))
                    && word.chars().last().map_or(false, |c| vowels.contains(&c));

                if is_vowel_start_end {
                    *acc += 1;
                }

                Some(*acc)
            })
            .collect();

        queries
            .iter()
            .map(|query| {
                let l = query[0] as usize;
                let r = query[1] as usize;
                if l == 0 {
                    prefix_sum[r]
                } else {
                    prefix_sum[r] - prefix_sum[l - 1]
                }
            })
            .collect()
    }
}