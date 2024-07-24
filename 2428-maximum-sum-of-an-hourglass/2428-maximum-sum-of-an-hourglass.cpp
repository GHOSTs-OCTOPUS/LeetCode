class Solution {
public:
    int maxSum(vector<vector<int>>& grid) {
        int sum, maxm=0;
        for(int i=0;i<grid.size()-2;i++) //traversing rows
        {
            for(int j=0;j<grid[0].size()-2;j++) //traversing columns
            { 
                //sum of elements of each hourglass     
                sum=grid[i][j]+grid[i][j+1]+grid[i][j+2]
                              +grid[i+1][j+1]+
                grid[i+2][j]+grid[i+2][j+1]+grid[i+2][j+2]; 
                maxm=max(maxm,sum); // finding maximum sum 
            }
        }
        return maxm;
    }
};