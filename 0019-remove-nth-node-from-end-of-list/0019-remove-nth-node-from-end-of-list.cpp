/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        if (head == NULL || n <= 0) {
            return head;
        }
        int count = 0;
        ListNode* temp = head;
        while (temp != NULL) {
            count++;
            temp = temp->next;
        }
        int ans = count - n;
        temp = head;
        ListNode* prev = NULL;
        int a = 0;
        while (temp != NULL) {
            if (a == ans) {
                if (prev != NULL) {
                    prev->next = temp->next;
                } else {
                    head = temp->next;
                }
                delete temp;
                return head;
            }
            prev = temp;
            temp = temp->next;
            a++;
        }
        return head;
    }
};