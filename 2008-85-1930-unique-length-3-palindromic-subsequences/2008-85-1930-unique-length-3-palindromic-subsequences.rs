impl Solution {
	pub fn count_palindromic_subsequence(s: String) -> i32 {
		let mut cnt = [0; 26];
		let mut first = [cnt; 26];
		let mut last = [cnt; 26];
		for c in s.bytes() {
			let idx = (c - b'a') as usize;
			last[idx] = cnt;
			if cnt[idx] == 0 {
				first[idx] = cnt;
			}
			cnt[idx] += 1;
		}
		let mut ans = 0;
		for ((c, prv), cur) in (0..).zip(first).zip(last) {
			for ((cc, prv), cur) in (0..).zip(prv).zip(cur) {
				ans += (prv < cur - 1 || (cc != c && prv < cur)) as i32;
			}
		}
		ans
	}
}