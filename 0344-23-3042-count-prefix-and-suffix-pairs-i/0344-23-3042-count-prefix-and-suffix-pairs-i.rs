impl Solution {
    pub fn count_prefix_suffix_pairs(words: Vec<String>) -> i32 {
        if words.len() <= 1 {
            return 0;
        }

        let mut count = 0;
        for i in 0..words.len() - 1 {
            let curr_len = words[i].len();
            for j in (i + 1)..words.len() {
                if curr_len > words[j].len() {
                    continue;
                }
                if Self::is_prefix_and_suffix_pairs(&words[j], &words[i]) {
                    count += 1;
                }
            }
        }
        count
    }

    fn is_prefix_and_suffix_pairs(s: &String, affix: &String) -> bool
    {
        if affix.is_empty() {
            return true;
        }
        if s.len() < affix.len() {
            return false;
        }
        s.starts_with(affix) && s.ends_with(affix)
    }
}