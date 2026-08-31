/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    let first = -1;
    let last = -1;
    let idx = 1;
    let minDist = Infinity;

    let prev = head;
    let curr = head.next;

    while(curr.next !== null) {
        if((curr.val > prev.val && curr.val > curr.next.val) ||
           (curr.val < prev.val && curr.val < curr.next.val)) {

            if(first === -1) {
                first = idx;
                last = idx;
            }
            else {
                minDist = Math.min(minDist, idx - last);
                last = idx;
            }
        }

        prev = curr;
        curr = curr.next;
        idx++;
    }

    if(first === last)
        return [-1, -1];

    return [minDist, last - first];
};