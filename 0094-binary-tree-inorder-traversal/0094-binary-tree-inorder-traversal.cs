public class Solution {
    public IList<int> InorderTraversal(TreeNode root) {
        IList<int> res = new List<int>();
        Stack<TreeNode> stack = new Stack<TreeNode>();
        TreeNode curr = root;
        while (curr != null || stack.Count > 0) {
            while (curr != null) {
                stack.Push(curr);
                curr = curr.left;
            }

            curr = stack.Pop();
            res.Add(curr.val);
            curr = curr.right;
        }

        return res;
    }
}