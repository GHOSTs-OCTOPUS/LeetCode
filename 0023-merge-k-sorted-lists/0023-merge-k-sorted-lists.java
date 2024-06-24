/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
       List <Integer> x=new ArrayList<>();
       for(int i=0;i<lists.length;i++)
       {
        ListNode temp=lists[i];
        while(temp!=null)
        {
            x.add(temp.val);
            temp=temp.next;
        }
       }
       Collections.sort(x);
       ListNode f=new ListNode(0);
       ListNode t2=f;
       for(int i:x)
       {
        ListNode m=new ListNode(i);
        t2.next=m;
        t2=t2.next;
       }
       return f.next; 
    }
}