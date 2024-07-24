class Solution {
public:
    bool winnerOfGame(string colors) {
        int alice=0;
        int bob=0;
        for(int i=1;i<colors.size()-1;i++)
        {
            if(colors[i-1]=='A' && colors[i+1]=='A' && colors[i]=='A')
            {
                alice++;
            }
            else if(colors[i-1]=='B' && colors[i+1]=='B' && colors[i]=='B')
            {
                bob++;
            }
        }
        cout<<alice<<" "<<bob<<endl;
        return alice>bob;
    }
};