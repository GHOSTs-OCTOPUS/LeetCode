/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    const node = new Map();    // value -> TreeNode
    const parent = new Map();  // child node -> parent node

    let cur = null;

    for (const [p, c, isLeft] of descriptions) {

        // Create parent node if not present
        if (!node.has(p))
            node.set(p, new TreeNode(p));

        // Create child node if not present
        if (!node.has(c))
            node.set(c, new TreeNode(c));

        // Connect parent and child
        if (isLeft)
            node.get(p).left = node.get(c);
        else
            node.get(p).right = node.get(c);

        // Store parent of child
        parent.set(node.get(c), node.get(p));

        cur = node.get(p);
    }

    // Move up until root is found
    while (parent.has(cur))
        cur = parent.get(cur);

    return cur;
};