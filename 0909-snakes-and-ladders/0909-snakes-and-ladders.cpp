class Solution {
public:
    int BOARD_MAX = 444;
    int snakesAndLadders(vector<vector<int>>& board) {
        int n = board.size();
        vector<int> boardArr;
        
        for(int i = n - 1; i >= 0; ){
            for(int j = 0; j < n; j++)
                boardArr.push_back(board[i][j] - 1);
            i--;
            if(i >= 0){
                for(int j = n - 1; j >= 0; j--)
                    boardArr.push_back(board[i][j] - 1);
            }
            i--;
        }

        vector<int> minMovesTo(n * n, BOARD_MAX);
        vector<int> minMovesToWithLadder(n * n, BOARD_MAX);
        minMovesTo[0] = 0;

        for(int i = 0; i < n * n - 1; i++){
            if(boardArr[i] == -2){
                for(int j = i + 1; j <= min(n * n - 1, i + 6); j++){
                    minMovesTo[j] = min(min(minMovesTo[j], minMovesTo[i] + 1), minMovesToWithLadder[i] + 1);
                }
            }
            else {
                if(minMovesToWithLadder[i] != BOARD_MAX){
                    for(int j = i + 1; j <= min(n * n - 1, i + 6); j++){
                        minMovesTo[j] = min(minMovesTo[j], minMovesToWithLadder[i] + 1);
                    }
                }
                int next = boardArr[i];
                if(next < i){
                    if(minMovesToWithLadder[next] > minMovesTo[i]){
                        minMovesToWithLadder[next] = minMovesTo[i];
                        i = next - 1;
                    }
                }
                else {
                    minMovesToWithLadder[next] = min(minMovesToWithLadder[next], minMovesTo[i]);
                }
            }
        }

        return min(minMovesTo[n * n - 1], minMovesToWithLadder[n * n - 1]) != BOARD_MAX ? min(minMovesTo[n * n - 1], minMovesToWithLadder[n * n - 1]) : -1;
    }
};