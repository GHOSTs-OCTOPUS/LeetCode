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
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        ListNode* temp1 = list1;
        ListNode* temp2 = list2;

        ListNode* newList = new ListNode();
        ListNode* head = newList;
        ListNode* ans = newList;

        while(temp1 != NULL && temp2 != NULL)
        {
            if(temp1-> val < temp2-> val)
            {
                ListNode* newNode = new ListNode(temp1-> val);
                head-> next = newNode;
                head = head-> next;
                temp1 = temp1-> next;
            }
            else
            {
                ListNode* newNode = new ListNode(temp2-> val);
                head-> next = newNode;
                head = head-> next;
                temp2 = temp2-> next;
            }
        }
        while(temp1 != NULL)
        {
            ListNode* newNode = new ListNode(temp1-> val);
            head-> next = newNode;
            head = head-> next;
            temp1 = temp1-> next;
        }
        while(temp2 != NULL)
        {
            ListNode* newNode = new ListNode(temp2-> val);
            head-> next = newNode;
            head = head-> next;
            temp2 = temp2-> next;
        }
        head = ans-> next;
        return head;
    }
};