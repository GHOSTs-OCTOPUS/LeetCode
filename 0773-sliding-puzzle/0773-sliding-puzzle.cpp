class Solution {
private:
    // Direction map for zero's possible moves in a flattened 1D array (2x3
    // board)
    vector<vector<int>> directions = {{1, 3}, {0, 2, 4}, {1, 5},
                                      {0, 4}, {3, 5, 1}, {4, 2}};

public:
    int slidingPuzzle(vector<vector<int>>& board) {
        // Convert the 2D board into a string representation to use as state
        string startState;
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 3; j++) {
                startState += to_string(board[i][j]);
            }
        }

        // Map to store the minimum moves for each visited state
        unordered_map<string, int> visited;

        // Start DFS traversal from initial board state
        dfs(startState, visited, startState.find('0'), 0);

        // Return the minimum moves required to reach the target state, or -1 if
        // unreachable
        return visited.count("123450") ? visited["123450"] : -1;
    }

private:
    void dfs(string state, unordered_map<string, int>& visited, int zeroPos,
             int moves) {
        // Skip if this state has been visited with fewer or equal moves
        if (visited.count(state) && visited[state] <= moves) {
            return;
        }
        visited[state] = moves;

        // Try moving zero to each possible adjacent position
        for (int nextPos : directions[zeroPos]) {
            swap(state[zeroPos], state[nextPos]);  // Swap to generate new state
            dfs(state, visited, nextPos,
                moves + 1);  // Recursive DFS with updated state and move count
            swap(state[zeroPos],
                 state[nextPos]);  // Swap back to restore original state
        }
    }
};