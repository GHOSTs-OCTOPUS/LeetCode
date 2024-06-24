class Solution {
public:
    vector<string> fullJustify(vector<string>& words, int maxWidth) {
        std::vector<std::string> sol;
        std::string plc;
        //Is better paradigm to just add the word (no assumed space, and then check the size when adding a space)?
        for (size_t i=0;i<words.size();i++){
            if (i!=0 && plc.length()+words[i].length()+1>static_cast<size_t>(maxWidth)){
                //Justify the line
                auto it=std::find(plc.begin(), plc.end(),' ');
                //If only one word, left justified
                if (it==plc.end()){
                    while(plc.length()<static_cast<size_t>(maxWidth)){
                        it=plc.insert(it,' ');
                    }
                } else{ //If more than one, center justified
                    while(plc.length()<static_cast<size_t>(maxWidth)){
                        it=plc.insert(it,' '); //Insert space in the group of space characters
                        it=std::find_if(it,plc.end(),[](char c){return c!=' ';});//Find next non-space
                        it=std::find(it,plc.end(),' ');//Find next space
                        if(it==plc.end()){ //If no more space groups, back to the first one
                            it=std::find(plc.begin(),plc.end(),' ');       
                        }
                    }
                }
                
                //Append
                sol.push_back(plc);
                plc.clear();
                plc.append(words[i]); //First word in a line can always be appended
            } else {
                if (plc.size()==0){ //First iteration only, probably
                    plc.append(words[i]);
                } else { //Append space (at least always one), then word
                    plc.append(1,' ');
                    plc.append(words[i]);
                }
            }
        }
        //Justify last line
        auto it=plc.end();
        while(plc.length()<static_cast<size_t>(maxWidth)){
            it=plc.insert(it,' ');//Just insert spaces at the end
        }
        //Add to solution
        sol.push_back(plc);
        return sol;
    }
};