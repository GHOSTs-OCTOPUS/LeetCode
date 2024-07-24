class Solution {
public:
    string orderlyQueue(string s, int k) {
       string res;
       if(k==0)
        return s;
       if(k>1){
           res=s;
           sort(s.begin(),s.end());
       }
       else{
           char ch='z';

           for(int i=0;i<s.size();i++)
                ch=(ch<s[i])?ch:s[i];
            vector<string> str;
            for(int i=0;i<s.size();i++){
                if(s[i]==ch){
                    string temp;
                    
                    temp=(s.substr(i,s.size()));
                    temp=temp+s.substr(0,i);
                    str.push_back(temp);
                }
            }
            sort(str.begin(),str.end());
            s=str[0];
       }
            

       
       return s; 
    }
};