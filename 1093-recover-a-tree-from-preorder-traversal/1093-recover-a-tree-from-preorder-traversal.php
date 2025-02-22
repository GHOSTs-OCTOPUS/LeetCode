class Solution {

    function recoverFromPreorder($traversal) {
        $stack = new SplStack();

        $i = 0;
        $n = strlen($traversal);

        while ($i < $n) {
            $level = 0;
            while ($traversal[$i] == '-') {
                $level++;
                $i++;
            }
            
            $value = 0;
            while ($i < $n && is_numeric($traversal[$i])) {
                $value = $value * 10 + intval($traversal[$i]);
                $i++;
            }
            
            $node = new TreeNode($value);

            while ($level < $stack->count()) {
                $stack->pop();
            }
            
            if (!$stack->isEmpty()) {
                if ($stack->top()->left === null) {
                    $stack->top()->left = $node;
                } else {
                    $stack->top()->right = $node;
                }
            }
            
            $stack->push($node);
        }
        
        return $stack->bottom();
    }
}