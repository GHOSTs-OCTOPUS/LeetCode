/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head;

    let n = 1;
    let tail = head;

    while (tail.next) {
        tail = tail.next;
        n++;
    }

    tail.next = head;

    k = k % n;

    let steps = n - k - 1;
    let newTail = head;

    while (steps-- > 0) {
        newTail = newTail.next;
    }

    let newHead = newTail.next;

    newTail.next = null;

    return newHead;
};