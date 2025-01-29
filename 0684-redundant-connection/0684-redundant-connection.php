class Solution {

    /**
     * @param Integer[][] $edges
     * @return Integer[]
     */
    function findRedundantConnection($edges) {
        // +1 because nodes are 1-indexed
        $uf = new UnionFind(count($edges) + 1);
        foreach ($edges as $edge) {
            list($u, $v) = $edge;
            if (!$uf->union($u, $v)) {
                return [$u, $v];
            }
        }
    }
}

class UnionFind {
    private $parent;
    private $rank;

    public function __construct($size) {
        $this->parent = range(0, $size - 1);
        $this->rank = array_fill(0, $size, 1);
    }

    public function find($u) {
        if ($this->parent[$u] !== $u) {
            // Path compression
            $this->parent[$u] = $this->find($this->parent[$u]);
        }
        return $this->parent[$u];
    }

    public function union($u, $v) {
        $rootU = $this->find($u);
        $rootV = $this->find($v);

        if ($rootU === $rootV) {
            return false; // They are already connected
        }

        if ($this->rank[$rootU] > $this->rank[$rootV]) {
            $this->parent[$rootV] = $rootU;
        } elseif ($this->rank[$rootU] < $this->rank[$rootV]) {
            $this->parent[$rootU] = $rootV;
        } else {
            $this->parent[$rootV] = $rootU;
            $this->rank[$rootU] += 1;
        }
        return true;
    }
}