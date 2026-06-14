/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let slow = head, fast = head;

    // Find middle of linked list
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse second half
    let prev = null;
    while (slow) {
        let nextNode = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextNode;
    }

    let ans = 0;
    let first = head;
    let second = prev;

    // Calculate twin sums
    while (second) {
        ans = Math.max(ans, first.val + second.val);
        first = first.next;
        second = second.next;
    }

    return ans;
};