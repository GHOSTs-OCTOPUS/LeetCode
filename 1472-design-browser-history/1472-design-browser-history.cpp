class BrowserHistory {
public:
    vector<string> v;
    int cur=-1;
    int top=-1;
    BrowserHistory(string homepage) {
        v.push_back(homepage);
        cur=0;
        top=0;
    }
    
    void visit(string url) {
        cur++;
        if(cur>=v.size())
            v.push_back(url);
        else
            v[cur]=url;
        top=cur;
    }
    
    string back(int steps) {
        while(cur>0 && steps--)
            cur--;
        return v[cur];
    }
    
    string forward(int steps) {
        while(cur<top && steps--)
            cur++;
        return v[cur];
    }
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * BrowserHistory* obj = new BrowserHistory(homepage);
 * obj->visit(url);
 * string param_2 = obj->back(steps);
 * string param_3 = obj->forward(steps);
 */