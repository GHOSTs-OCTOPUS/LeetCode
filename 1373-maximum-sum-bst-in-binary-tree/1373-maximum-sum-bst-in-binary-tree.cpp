/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
    int answer=INT_MIN;
    vector<int> solve (TreeNode* node){
          if(node==NULL){
              return{INT_MAX,INT_MIN,0};
          }
         vector< int> leftsolve=solve(node->left);
         vector< int> rightsolve=solve(node->right);
         int value=node->val;
         if(!(value>leftsolve[1]&&value<rightsolve[0])){return{INT_MIN,INT_MAX,0};}
         answer=max(answer,leftsolve[2]+rightsolve[2]+node->val);
         return{min(node->val,leftsolve[0]),max(rightsolve[1],node->val),leftsolve[2]+rightsolve[2]+node->val};

    }
public:
    int maxSumBST(TreeNode* root) {
        vector<int>ans=solve(root);
        if(answer<0) return 0;
        return answer;
    }
};