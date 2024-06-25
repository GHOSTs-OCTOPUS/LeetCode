class Solution:
    def bstToGst(self, root):
        # Store the inorder traversal in an array.
        self.inorder_traversal = []
        self.inorder(root)

        # Reverse the array to get descending order.
        self.inorder_traversal.reverse()

        # Modify the values in the tree.
        self.replace_values(root)

        return root

    def inorder(self, root):
        if root is None:
            return
        self.inorder(root.left)
        self.inorder_traversal.append(root.val)
        self.inorder(root.right)

    # Function to modify the values in the tree.
    def replace_values(self, root):
        if root is None:
            return
        self.replace_values(root.left)
        self.replace_values(root.right)

        # Replace node with values greater than the current value.
        node_sum = 0
        for i in self.inorder_traversal:
            if i > root.val:
                node_sum += i
            else:
                break

        root.val += node_sum