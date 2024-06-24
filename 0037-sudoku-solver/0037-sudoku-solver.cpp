class Solution {
public:
bool Exist(vector<vector<char>>& board, int r, int c, char val)
{
	for (int i = 0; i < 9; i++)
		if (val == board[r][i])
			return 0;
	for (int i = 0; i < 9; i++)
		if (val == board[i][c])
			return 0;
	for (int i = (r / 3) * 3; i < (r / 3 + 1) * 3; i++)
		for (int j = (c / 3) * 3; j < (c / 3 + 1) * 3; j++)
			if (val == board[i][j])
				return 0;
	return 1;
}
void SudokuSolver(vector<vector<char>>& board, int r, int c, bool& flag)
{
	if (flag)
		return;
	if (board[r][c] != '.')
	{
		++r;
		if (r == 9)
		{
			r = 0;
			++c;
		}
		if (c == 9)
		{
			flag = true;
			return;
		}
		SudokuSolver(board, r, c, flag);
	}
	else
	{
		char val = 49;
		while (!flag && val != 58)
		{
			if (Exist(board, r, c, val))
			{
				board[r][c] = val;
				int i = r + 1;
				int j = c;
				if (i == 9)
				{
					i = 0;
					++j;
				}
				if (j == 9)
				{
					flag = true;
					return;
				}
				SudokuSolver(board, r, c, flag);
				if (!flag)
					board[r][c] = '.';
			}
			++val;
		}
	}
}
    void solveSudoku(vector<vector<char>>& board) {
        bool flag = false;
        SudokuSolver(board,0,0, flag);
        return;
    }
};