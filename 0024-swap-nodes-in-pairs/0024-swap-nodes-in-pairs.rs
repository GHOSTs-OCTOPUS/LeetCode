// Definition for singly-linked list.
// #[derive(PartialEq, Eq, Clone, Debug)]
// pub struct ListNode {
//   pub val: i32,
//   pub next: Option<Box<ListNode>>
// }
// 
// impl ListNode {
//   #[inline]
//   fn new(val: i32) -> Self {
//     ListNode {
//       next: None,
//       val
//     }
//   }
// }
impl Solution {
    pub fn swap_pairs(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        if head.is_none() { return None; }

        let mut one = head.clone();
        let mut one_pointer = &mut one;

        while let Some(node) = one_pointer {
            if node.next.is_none() { return one; }
            
            let mut temp = node.next.as_mut().unwrap().next.clone();
            std::mem::swap(&mut node.next,&mut temp);

            temp.as_mut().unwrap().next = Some(Box::new(*node.clone()));
            std::mem::swap(node, &mut temp.as_mut().unwrap());

            one_pointer = &mut node.next.as_mut().unwrap().next;
        }

        one
    }
}