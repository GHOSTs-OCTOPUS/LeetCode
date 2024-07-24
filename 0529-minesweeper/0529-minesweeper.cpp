class Solution {
public:
    vector<vector<char>> updateBoard(vector<vector<char>>& A, vector<int>& C) {
        int x=C[0],y=C[1];
        int n=A.size();
        int m=A[0].size();
        if(A[x][y]=='M'){
            A[x][y]='X';
            return A;
        }
        vector<int> r={1,1,0,-1,-1,-1,0,1};
        vector<int> c={0,1,1,1,0,-1,-1,-1};
        queue<pair<int,int>> q;
        vector<vector<int>> V(n,vector<int>(m,0));
        q.push({x,y});
        V[x][y]=1;
        
        while(!q.empty()){
            pair<int,int> p=q.front();
            q.pop();
            int cnt=0;
            int x=p.first;
            int y=p.second;
            if(A[x][y]>='1' && A[x][y]<='9'){
                continue;
            }
            for(int k=0;k<8;k++){
                int x1=x+r[k];
                int y1=y+c[k];
                if(x1>=0 && x1<n && y1>=0 && y1<m && A[x1][y1]=='M'){
                    cnt++;
                }
            }
            if(cnt>0){
                A[x][y]='0'+cnt;
                continue;
            }
            A[x][y]='B';
            for(int k=0;k<8;k++){
                int x1=x+r[k];
                int y1=y+c[k];
                if(x1>=0 && x1<n && y1>=0 && y1<m && V[x1][y1]==0){
                    q.push({x1,y1});
                    V[x1][y1]=1;
                }
            }
        }
        return A;
    }
};