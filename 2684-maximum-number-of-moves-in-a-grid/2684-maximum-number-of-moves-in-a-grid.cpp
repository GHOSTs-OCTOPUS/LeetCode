class Solution {
public:
    // The three possible directions for the next column.
    const int dirs[3] = {-1, 0, 1};

    int maxMoves(vector<vector<int>>& grid) {
        int M = grid.size(), N = grid[0].size();

        queue<vector<int>> q;
        vector<vector<int>> vis(M, vector<int>(N, 0));
        // Enqueue the cells in the first column.
        for (int i = 0; i < M; i++) {
            vis[i][0] = 1;
            q.push({i, 0, 0});
        }

        int maxMoves = 0;
        while (!q.empty()) {
            int sz = q.size();

            while (sz--) {
                vector<int> v = q.front();
                q.pop();

                // Current cell with the number of moves made so far.
                int row = v[0], col = v[1], count = v[2];

                maxMoves = max(maxMoves, count);

                for (int dir : dirs) {
                    // Next cell after the move.
                    int newRow = row + dir, newCol = col + 1;

                    // If the next cell isn't visited yet and is greater than
                    // the current cell value. Add it to the queue with the
                    // moves required.
                    if (newRow >= 0 && newCol >= 0 && newRow < M &&
                        newCol < N && !vis[newRow][newCol] &&
                        grid[row][col] < grid[newRow][newCol]) {
                        vis[newRow][newCol] = 1;
                        q.push({newRow, newCol, count + 1});
                    }
                }
            }
        }

        return maxMoves;
    }
};