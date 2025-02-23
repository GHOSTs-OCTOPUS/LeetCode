/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     public $val = null;
 *     public $left = null;
 *     public $right = null;
 *     function __construct($val = 0, $left = null, $right = null) {
 *         $this->val = $val;
 *         $this->left = $left;
 *         $this->right = $right;
 *     }
 * }
 */
class Solution {

    /**
     * @param Integer[] $preorder
     * @param Integer[] $postorder
     * @return TreeNode
     */
    function constructFromPrePost($preorder, $postorder) {
        $postIndexMap = array_flip($postorder); // Hash map for O(1) lookups
        $preIndex = 0; // Pointer to track preorder traversal
    
        return $this->buildTree($preorder, $postIndexMap, $preIndex, 0, count($postorder) - 1);       
    }
    
    function buildTree(&$preorder, &$postIndexMap, &$preIndex, $postLeft, $postRight) {
        if ($preIndex >= count($preorder) || $postLeft > $postRight) { return null; }
    
        // Create the root from preorder traversal
        $rootVal = $preorder[$preIndex++];
        $root = new TreeNode($rootVal);
    
        // If this is a leaf node, return
        if ($postLeft == $postRight) { return $root; }
    
        // Find the position of the next preorder element in postorder
        $leftSubtreeRoot = $preorder[$preIndex]; // Next preorder element is always left or right child
        $leftSubtreeIndex = $postIndexMap[$leftSubtreeRoot];
    
        // Recursively construct left and right subtrees
        if ($leftSubtreeIndex < $postRight) { // Ensure it belongs to the subtree
            $root->left = $this->buildTree($preorder, $postIndexMap, $preIndex, $postLeft, $leftSubtreeIndex);
            $root->right = $this->buildTree($preorder, $postIndexMap, $preIndex, $leftSubtreeIndex + 1, $postRight - 1);
        }
    
        return $root;
    } 
}