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
class FindElements {
    private $values = [];
    /**
     * @param TreeNode $root
     */
    function __construct(TreeNode $root) {
        if ($root !== null) {
            $this->recoverTree($root, 0);
        }        
    }
  
    /**
     * @param Integer $target
     * @return Boolean
     */
    function find(int $target): bool {
        return isset($this->values[$target]);
    }

    /**
     * @param TreeNode $node
     * @param Integer $val
     * @return Boolean
     */
    private function recoverTree($node, int $val): void {
        if ($node === null) return;

        $node->val = $val;
        $this->values[$val] = true;

        $this->recoverTree($node->left, 2 * $val + 1);
        $this->recoverTree($node->right, 2 * $val + 2);
    }    
}

/**
 * Your FindElements object will be instantiated and called as such:
 * $obj = FindElements($root);
 * $ret_1 = $obj->find($target);
 */