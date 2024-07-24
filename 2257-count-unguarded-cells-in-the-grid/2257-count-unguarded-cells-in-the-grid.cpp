class Solution {
public:
    
    void markThem(vector<vector<char>>& prison, int r, int c, int m, int n) {

		// marking Unguarded Cell in the Right as Guarded until a Guarded or Walled Cell is found.
        for (int j=c+1; j<n; j++) {
			// breaking if wall is found as guard cannot see past that wall.
			// breaking if cell has a guard as that guard will mark the rest of cells.
            if (prison[r][j] == 'w' or prison[r][j] == 'g')    break;
            prison[r][j] = 'd'; // marking unguarded cell as guarded.
        }
		
		// marking Unguarded Cell in the Left as Guarded until a Guarded or Walled Cell is found.
        for (int j=c-1; j>=0; j--) {
            if (prison[r][j] == 'w' or prison[r][j] == 'g')    break;
            prison[r][j] = 'd';
        }
        
		// marking Unguarded Cell in the Downward as Guarded until a Guarded or Walled Cell is found.
        for (int i=r+1; i<m; i++) {
            if (prison[i][c] == 'w' or prison[i][c] == 'g')    break;
            prison[i][c] = 'd';
        }
		
		// marking Unguarded Cell Upward as Guarded until a Guarded or Walled Cell is found.
        for (int i=r-1; i>=0; i--) {
            if (prison[i][c] == 'w' or prison[i][c] == 'g')    break;
            prison[i][c] = 'd';
        }
    }
    
    int countUnguarded(int m, int n, vector<vector<int>>& guards, vector<vector<int>>& walls) {
        
        int res = 0;
        vector<vector<char>> prison(m, vector<char>(n, 'u'));
        
        for (auto& g : guards)  prison[g[0]][g[1]] = 'g';
        for (auto& w : walls)    prison[w[0]][w[1]] = 'w';
        
		for (auto& g : guards)
             markThem(prison, g[0], g[1], m, n);
        
        for (auto& row : prison)
            for (auto& cell : row)
                if (cell == 'u') res++;

        return res;
    }
};