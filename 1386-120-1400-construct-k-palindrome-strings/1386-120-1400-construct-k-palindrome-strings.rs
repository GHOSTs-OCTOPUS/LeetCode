impl Solution {
    pub fn can_construct(s: String, k: i32) -> bool {
        // we can pair letters together to extend palendromes
        // so we only need to care about if theres an odd or even number of each letter
        // we will use a bitmask to store this information.
        // for each palendrome we can use up one extra odd count char,
        // so all we need to do is check if theres <= k odd letters.
        // 
        // the question wants *exactly* k palendromes 
        // instead of *up to* k palendromes, 
        // so we need to check theres at least k characters in s first.
        
        s.len() >= k as usize
            && s.bytes()
                .fold(0u32, |acc, b| acc ^ (1 << b-b'a'))
                .count_ones() <= k as u32
    }
}