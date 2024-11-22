class Solution {
public:
    int maxEqualRowsAfterFlips(vector<vector<int>>& matrix) {
        int numCols = matrix[0].size();
        int maxIdenticalRows = 0;

        for (auto& currentRow : matrix) {
            // Create vector to store flipped version of current row
            vector<int> flippedRow(numCols);
            int identicalRowCount = 0;

            // Create flipped version of current row (0->1, 1->0)
            for (int col = 0; col < numCols; col++) {
                flippedRow[col] = 1 - currentRow[col];
            }

            // Check every row against current row and its flipped version
            for (auto& compareRow : matrix) {
                // If row matches either original or flipped pattern, increment
                // counter
                if (compareRow == currentRow || compareRow == flippedRow) {
                    identicalRowCount++;
                }
            }

            maxIdenticalRows = max(maxIdenticalRows, identicalRowCount);
        }

        return maxIdenticalRows;
    }
};