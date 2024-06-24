class Solution {
public:
    //solve1 function increments all positions which are not safe in our chess board
    void solve1(vector<vector<int>>&safe,int n,int row,int c){
        for(int i=0;i<n;i++){
            safe[row][i]++;
        }
        for(int i=row+1;i<n;i++){
            safe[i][c]++;
            if(c+i-row<n)
            safe[i][c+i-row]++;
            if(c-i+row>=0)
            safe[i][c-i+row]++;
        }

    }
    //solve2 function is used to backtrack
    void solve2(vector<vector<int>>&safe,int n,int row,int c){
         for(int i=0;i<n;i++){
            safe[row][i]--;
        }
        for(int i=row+1;i<n;i++){
            safe[i][c]--;
            if(c+i-row<n)
            safe[i][c+i-row]--;
            if(c-i+row>=0)
            safe[i][c-i+row]--;
        }

    }
    void solve(int n,int& ans,vector<vector<int>>&safe,int row){
        if(row==n){
            ans++;
            return;
        }
        for(int i=0;i<n;i++){
            if(safe[row][i]==0){
                solve1(safe,n,row,i);
                solve(n,ans,safe,row+1);
                solve2(safe,n,row,i);
            }
        }
    }
    int totalNQueens(int n) {
        vector<vector<int>> safe;
        for(int i=0;i<n;i++){
            vector<int>temp;
            for(int j=0;j<n;j++){
                temp.push_back(0);
            }
            safe.push_back(temp);
        }
        int row=0;
        int ans=0;
        solve(n,ans,safe,row);
       return ans;
    }
};