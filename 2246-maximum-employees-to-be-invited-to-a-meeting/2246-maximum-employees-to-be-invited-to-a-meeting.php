class Solution {  
    /**  
     * @param Integer[] $favorite  
     * @return Integer  
     */  
    function maximumInvitations($favorite) {  
        $n = count($favorite);  
        if ($n <= 2) {  
            return $n;  
        }  

        // Build adjacency list  
        $adj = array_fill(0, $n, []);  
        for ($i = 0; $i < $n; $i++) {  
            if ($favorite[$i] !== -1) {  
                $adj[$favorite[$i]][] = $i;  
            }  
        }  

        // To track visited nodes  
        $vis = array_fill(0, $n + 1, 0);  
        $maxi = 1;  

        // Check all nodes  
        for ($i = 0; $i < $n; $i++) {  
            if ($vis[$i] === 0) {  
                $a = 0;  
                $this->check($adj, $i, $vis, $a, $maxi);  
            }  
        }  

        // DFS to find the sum of largest component from pairs  
        $visited = array_fill(0, $n, 0);  
        $mp = [];  
        $v = [];  

        // Call fun for each node  
        for ($i = 0; $i < $n; $i++) {  
            if ($visited[$i] == 0) {  
                $this->fun($v, $visited, $i, $adj, -1, $mp, $favorite);  
            }  
        }  

        // Calculate the score based on pairs  
        $score = 0;  
        foreach ($v as $pair) {  
            $score += $mp[$pair[0]] + $mp[$pair[1]];  
        }  
        $maxi = max($maxi, $score);  

        return $maxi;  
    }  

    private function check(&$ad, $node, &$vis, $a, &$maxi) {  
        $a++;  
        $vis[$node] = $a;  
        foreach ($ad[$node] as $x) {  
            if ($vis[$x] > 0) {  
                $maxi = max($maxi, $vis[$node] - $vis[$x] + 1);  
            } elseif ($vis[$x] === 0) {  
                $this->check($ad, $x, $vis, $a, $maxi);  
            }  
        }  
        $vis[$node] = -1; // Mark as visited  
    }  

    private function fun(&$v, &$visited, $i, &$adj, $parent, &$mp, &$favorite) {  
        $mp[$i] = 1;  
        $visited[$i] = 1;  
        $c = 1;  

        foreach ($adj[$i] as $j) {  
            if ($visited[$j] == 0) {  
                $this->fun($v, $visited, $j, $adj, $i, $mp, $favorite);  
            } elseif ($visited[$j] == 1) {  
                if ($j == $parent) {  
                    $v[] = [$parent, $i];    
                }  
            }  

            if ($j != $parent && $favorite[$i] != $j) {  
                $sum = 1 + $mp[$j];  
                if ($sum >= $c) {  
                    $c = $sum;  
                }  
            }  
        }  
        $mp[$i] = $c;  
    }  
}