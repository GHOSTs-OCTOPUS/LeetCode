class Solution {
public:
    string solve(int srcx,int srcy,int destx,int desty)
    {
       if(srcx==destx && srcy==desty) return "!";
       string ans = "";
       bool fleg = false;
      
       if(destx==5)
       {
           destx-=1;
           fleg = true;
       }

       if(srcx<destx)
       for(int i = srcx;i<destx;i++) ans+='D';
       else
       for(int i = destx;i<srcx;i++) ans+='U';

       if(srcy<desty)
       for(int i = srcy;i<desty;i++) ans+='R';
       else
       for(int i = desty;i<srcy;i++) ans+='L';

       if(fleg) ans+='D';   
       return ans;  
    }
    string alphabetBoardPath(string t) {

        vector<string> board = {"abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"};
        vector<pair<int,int>> pos(26);
        string ans = "";
        for(int i = 0;i<board.size();i++)
        {
            for(int j = 0;j<board[i].size();j++)
            pos[board[i][j]-'a'] = {i,j};
        }

        int x = 0,y = 0;
        for(int i = 0;i<t.size();i++)
        {
            if(x==pos[t[i]-'a'].first && y==pos[t[i]-'a'].second)
            ans+="!";
            else
            {
             ans+=solve(x,y,pos[t[i]-'a'].first,pos[t[i]-'a'].second);
             ans+='!';
            }
            x = pos[t[i]-'a'].first;
            y = pos[t[i]-'a'].second;
        }
        return ans;
    }
};