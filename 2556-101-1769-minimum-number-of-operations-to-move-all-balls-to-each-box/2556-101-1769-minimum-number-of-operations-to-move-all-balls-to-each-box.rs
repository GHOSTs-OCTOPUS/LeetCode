impl Solution {
    pub fn min_operations(boxes: String) -> Vec<i32> {
        let res = boxes
          .as_bytes()
          .iter()
          .map(|&c| if c == '0' as u8 {0} else {1})
          .scan((0, 0), |(ball, mv), b| {
            let total = *mv;
            *ball += b;
            *mv += *ball;
            Some(total)
          })
          .collect::<Vec<_>>();
        boxes
          .as_bytes()
          .iter()
          .map(|&c| if c == '0' as u8 {0} else {1})
          .enumerate()
          .rev()
          .scan((0, 0), |(ball, mv), (i, b)| {
            let total = *mv;
            *ball += b;
            *mv += *ball;
            Some((i, total))
          })
          .fold(res, |mut ans, (i, total)| {
            ans[i] += total;
            ans
          })
    }
}